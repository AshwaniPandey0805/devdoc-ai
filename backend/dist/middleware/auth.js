import jwt from "jsonwebtoken";
/**
 * Middleware to verify the user's JWT access token from cookies.
 * Attaches the decoded token payload (containing user id) to req.user.
 */
export const verifyToken = (req, res, next) => {
    const token = req.cookies?.access_token;
    if (!token) {
        res.status(401).json({ error: "Unauthorized: Access token missing" });
        return;
    }
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        res.status(500).json({ error: "JWT_SECRET is not configured on server" });
        return;
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err || !decoded) {
            res.status(403).json({ error: "Forbidden: Invalid or expired token" });
            return;
        }
        req.user = decoded;
        next();
    });
};
