import express, { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import { askGlobalQuestion } from "../controllers/chatController.js";

const router: Router = express.Router();

// Apply auth middleware
router.use(verifyToken);

// POST /api/chat - Cross-document conversational search
router.post("/", askGlobalQuestion);

export default router;
