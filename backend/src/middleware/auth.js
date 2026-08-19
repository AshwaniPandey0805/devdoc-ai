import jwt from "jsonwebtoken";

/**
 * Middleware to verify the user's JWT access token from cookies.
 * Attaches the decoded token payload (containing user id) to req.user.
 */
export const verifyToken = (req, res, next) => {
  const token = req.cookies?.access_token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Access token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden: Invalid or expired token" });
    }

    req.user = decoded; // decoded will contain user.id (from user._id)
    next();
  });
};
