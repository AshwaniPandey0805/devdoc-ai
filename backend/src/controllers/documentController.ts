import { Request, Response } from "express";
import Document, { IDocument } from "../models/Document.js";
import { processDocument } from "../services/documentProcessor.js";
import { StorageFactory } from "../services/storage/index.js";

// POST /api/documents/upload
export async function uploadDocument(req: Request, res: Response): Promise<Response> {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadedBy = req.user?.id;
    if (!uploadedBy) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Upload to active storage provider (AWS S3 or Local Fallback)
    const storageService = StorageFactory.getStorage();
    const uploadResult = await storageService.uploadFile(
      req.file.path,
      req.file.originalname,
      req.file.mimetype,
      uploadedBy
    );

    const doc: IDocument = await Document.create({
      title: req.body.title || req.file.originalname,
      originalFileName: req.file.originalname,
      storagePath: uploadResult.key,
      storageType: uploadResult.storageType,
      s3Bucket: uploadResult.bucket,
      s3Region: uploadResult.region,
      mimeType: req.file.mimetype,
      sizeBytes: req.file.size,
      uploadedBy,
      status: "uploaded",
    });

    // Asynchronously trigger parsing pipeline
    processDocument(doc._id, doc.storagePath, doc.storageType, doc.mimeType).catch((procErr) => {
      console.error(`[Upload] DocumentProcessor background error:`, procErr);
    });

    return res.status(201).json(doc);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents
// Only return documents uploaded by the authenticated user
export async function listDocuments(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const docs = await Document.find({ uploadedBy: userId }).sort({ createdAt: -1 });
    return res.json(docs);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents/:id
// Only fetch if the document belongs to the authenticated user
export async function getDocument(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const doc = await Document.findOne({ _id: req.params.id, uploadedBy: userId });
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    return res.json(doc);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents/:id/download-url
// Generate a time-limited presigned download/view URL for the document
export async function getDocumentDownloadUrl(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const doc = await Document.findOne({ _id: req.params.id, uploadedBy: userId });
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    if (doc.storageType === "s3") {
      const storageService = StorageFactory.getStorage();
      const downloadUrl = await storageService.getSignedDownloadUrl(doc.storagePath);
      return res.json({ downloadUrl });
    } else {
      // In local fallback mode, direct to backend authenticated streaming endpoint
      const serverUrl = process.env.SERVER_URL || `http://localhost:${process.env.PORT || 5000}`;
      const downloadUrl = `${serverUrl}/api/documents/${doc._id}/file`;
      return res.json({ downloadUrl });
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents/:id/file
// Stream file contents directly (used for local files or direct proxy)
export async function streamDocumentFile(req: Request, res: Response): Promise<void> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const doc = await Document.findOne({ _id: req.params.id, uploadedBy: userId });
    if (!doc) {
      res.status(404).json({ error: "Document not found" });
      return;
    }

    const storageService = StorageFactory.getStorage();
    const stream = await storageService.getFileStream(doc.storagePath);

    res.setHeader("Content-Type", doc.mimeType);
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${encodeURIComponent(doc.originalFileName)}"`
    );

    stream.on("error", (streamErr: any) => {
      console.error("[StreamDocumentFile] Stream read error:", streamErr.message);
      if (!res.headersSent) {
        res.status(500).json({ error: "Failed to read document file" });
      }
    });

    stream.pipe(res);
  } catch (err: any) {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  }
}

// DELETE /api/documents/:id
// Only delete if the document belongs to the authenticated user
export async function deleteDocument(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const doc = await Document.findOneAndDelete({ _id: req.params.id, uploadedBy: userId });
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    // Clean up file in S3 or local disk
    if (doc.storagePath) {
      try {
        const storageService = StorageFactory.getStorage();
        await storageService.deleteFile(doc.storagePath);
      } catch (err: any) {
        console.warn(`[DeleteDocument] Warning cleaning up ${doc.storagePath}:`, err.message);
      }
    }

    return res.json({ message: "Document deleted" });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
