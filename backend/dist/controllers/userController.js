import User from "../models/User.js";
// POST /api/users
export async function createUser(req, res) {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: "name and email are required" });
        }
        const existing = await User.findOne({ email });
        if (existing)
            return res.status(200).json(existing);
        const user = await User.create({ name, email });
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
// GET /api/users
export async function listUsers(_req, res) {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        return res.json(users);
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
