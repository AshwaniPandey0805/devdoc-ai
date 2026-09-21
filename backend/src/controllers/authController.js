import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import admin from "../config/firebaseAdmin.js";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

/**
 * Register a new user using name, email, and password.
 */
export async function signup(req, res) {
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
    const newUser = await User.create({
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
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Sign in a user using email and password.
 * Generates an HTTP-only JWT access token cookie.
 */
export async function signin(req, res) {
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

    // Sign JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Strip password from the response
    const { password: _, ...userData } = user.toObject();

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax", // Allow redirect authorization flow stability
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
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Handle Google OAuth registration or login.
 * Verifies ID token with Firebase Admin SDK, then issues a JWT access token cookie.
 */
export async function googleAuth(req, res) {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: "Firebase ID token is required" });
    }

    // Verify token using Firebase Admin SDK if service account is defined;
    // otherwise, fallback to decoding without cryptographic signature verification (development mode)
    let decodedToken;
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      decodedToken = await admin.auth().verifyIdToken(idToken);
    } else {
      decodedToken = jwt.decode(idToken);
      console.warn("⚠️ Google ID Token decoded WITHOUT cryptographic verification (development mode).");
      if (!decodedToken) {
        return res.status(400).json({ error: "Invalid Firebase ID token structure" });
      }
    }
    const { email, name, picture } = decodedToken;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create user if not found (generate a random password for db integrity)
      const randomPassword = crypto.randomBytes(16).toString("hex");
      const hashedPassword = await bcryptjs.hash(randomPassword, 10);

      user = await User.create({
        name: name || email.split("@")[0],
        email,
        password: hashedPassword,
        avatar: picture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      });
    }

    // Sign JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

/**
 * Sign out the current user by clearing the access token cookie.
 */
export async function signout(req, res) {
  try {
    return res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Signed out successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
