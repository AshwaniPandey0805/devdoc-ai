import express from "express";
import { upload } from "../middleware/upload.js";
import { verifyToken } from "../middleware/auth.js";
import {
  uploadDocument,
  listDocuments,
  getDocument,
  deleteDocument,
} from "../controllers/documentController.js";

const router = express.Router();

// Apply authentication middleware to all document routes
router.use(verifyToken);

router.post("/upload", upload.single("file"), uploadDocument);
router.get("/", listDocuments);
router.get("/:id", getDocument);
router.delete("/:id", deleteDocument);

export default router;
