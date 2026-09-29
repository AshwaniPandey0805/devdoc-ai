import { Request, Response } from "express";
import User, { IUser } from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getAuth } from "../config/firebaseAdmin.js";
import crypto from "crypto";
import dotenv from "dotenv";
import { EmailService } from "../services/email/index.js";

dotenv.config();

/**
 * Register a new user using name, email, and password.
 */
export async function signup(req: Request, res: Response): Promise<Response> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required" });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists with this email" });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create the user
    const newUser: IUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        avatar: newUser.avatar,
        role: newUser.role,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Sign in a user using email and password.
 * Generates an HTTP-only JWT access token cookie.
 */
export async function signin(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // If user has no password set (i.e. registered only via Google)
    if (!user.password) {
      return res.status(400).json({
        error: "This account was registered via Google. Please log in using Google OAuth.",
      });
    }

    // Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: "JWT_SECRET is not configured on server" });
    }

    // Sign JWT
    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: "1d",
    });

    // Strip password from the response
    const { password: _, ...userData } = user.toObject();

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .status(200)
      .json({
        message: "Logged in successfully",
        user: {
          id: userData._id,
          name: userData.name,
          email: userData.email,
          avatar: userData.avatar,
          role: userData.role,
        },
      });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Handle Google OAuth registration or login.
 * Verifies ID token with Firebase Admin SDK, then issues a JWT access token cookie.
 */
export async function googleAuth(req: Request, res: Response): Promise<Response> {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: "Firebase ID token is required" });
    }

    let decodedToken: any;
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      decodedToken = await getAuth().verifyIdToken(idToken);
    } else {
      decodedToken = jwt.decode(idToken);
      console.warn("⚠️ Google ID Token decoded WITHOUT cryptographic verification (development mode).");
      if (!decodedToken) {
        return res.status(400).json({ error: "Invalid Firebase ID token structure" });
      }
    }
    const { email, name, picture } = decodedToken;

    let user = await User.findOne({ email });

    if (!user) {
      const randomPassword = crypto.randomBytes(16).toString("hex");
      const hashedPassword = await bcryptjs.hash(randomPassword, 10);

      user = await User.create({
        name: name || (email as string).split("@")[0],
        email,
        password: hashedPassword,
        avatar: picture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({ error: "JWT_SECRET is not configured on server" });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, {
      expiresIn: "7d",
    });

    const { password: _, ...userData } = user.toObject();

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .status(200)
      .json({
        message: "Logged in with Google successfully",
        user: {
          id: userData._id,
          name: userData.name,
          email: userData.email,
          avatar: userData.avatar,
          role: userData.role,
        },
      });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Sign out the current user by clearing the access token cookie.
 */
export async function signout(_req: Request, res: Response): Promise<Response> {
  try {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Signed out successfully" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Initiates the password reset process.
 * Generates an unguessable 256-bit token, saves its SHA-256 hash in MongoDB,
 * and sends an email with the unhashed reset link.
 */
export async function forgotPassword(req: Request, res: Response): Promise<Response> {
  try {
    const { email } = req.body;

    if (!email || typeof email !== "string" || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "A valid email address is required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });

    let devResetUrl: string | undefined;

    // Security: Only proceed if user exists and has a standard password (not OAuth-only)
    if (user && user.password) {
      // 1. Generate 32-byte cryptographically secure random token (64 hex characters)
      const rawToken = crypto.randomBytes(32).toString("hex");

      // 2. Hash token using SHA-256 for secure database storage
      const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");

      // 3. Save hashed token and 15-minute expiration
      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
      await user.save();

      // 4. Construct reset link URL
      const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
      const resetUrl = `${clientUrl}/reset-password/${rawToken}`;

      // 5. Dispatch email
      const emailResult = await EmailService.sendPasswordResetEmail(
        user.email,
        resetUrl,
        user.name
      );
      devResetUrl = emailResult.devResetUrl;
    } else if (user && !user.password) {
      console.warn(`[ForgotPassword] Password reset requested for Google OAuth account: ${normalizedEmail}`);
    }

    // OWASP: Always return a generic success message to prevent user enumeration
    return res.status(200).json({
      message: "If an account with that email exists, a password reset link has been sent.",
      devResetUrl, // Returned in dev mode for quick local testing
    });
  } catch (err: any) {
    console.error("[ForgotPassword] Error:", err.message);
    return res.status(500).json({ error: "Failed to process password reset request" });
  }
}

/**
 * Completes the password reset process.
 * Validates the unexpired token hash and updates the password with bcrypt.
 */
export async function resetPassword(req: Request, res: Response): Promise<Response> {
  try {
    const token = req.body.token || req.params.token;
    const { password } = req.body;

    if (!token || typeof token !== "string") {
      return res.status(400).json({ error: "Password reset token is required" });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    // 1. Hash the incoming token using SHA-256 to look up in the database
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // 2. Find user with matching active token that has not expired
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({
        error: "Password reset link is invalid or has expired. Please request a new link.",
      });
    }

    // 3. Hash the new password using bcryptjs
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);

    // 4. Invalidate the reset token atomically
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    console.log(`[ResetPassword] Successfully updated password for user: ${user.email}`);

    return res.status(200).json({
      message: "Password has been successfully updated. You may now sign in with your new password.",
    });
  } catch (err: any) {
    console.error("[ResetPassword] Error:", err.message);
    return res.status(500).json({ error: "Failed to reset password" });
  }
}

