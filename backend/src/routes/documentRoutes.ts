import multer from "multer";
import express, { Router, Request, Response, NextFunction } from "express";
import { upload } from "../middleware/upload.js";
import { verifyToken } from "../middleware/auth.js";
import {
  uploadDocument,
  listDocuments,
  getDocument,
  deleteDocument,
} from "../controllers/documentController.js";

const router: Router = express.Router();

// Apply authentication middleware to all document routes
router.use(verifyToken);

router.post(
  "/upload",
  (req: Request, res: Response, next: NextFunction) => {
    upload.single("file")(req, res, (err: any) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          res.status(400).json({ error: "File size exceeds the 20MB limit" });
          return;
        }
        res.status(400).json({ error: err.message });
        return;
      } else if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      next();
    });
  },
  uploadDocument
);
router.get("/", listDocuments);
router.get("/:id", getDocument);
router.delete("/:id", deleteDocument);

export default router;
