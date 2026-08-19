import Document from "../models/Document.js";

// POST /api/documents/upload
export async function uploadDocument(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // TEMP: hardcoded until Stage 2 auth middleware attaches req.user
    const uploadedBy = req.body.userId;
    if (!uploadedBy) {
      return res.status(400).json({ error: "userId is required (temporary, until auth is added)" });
    }

    const doc = await Document.create({
      title: req.body.title || req.file.originalname,
      originalFileName: req.file.originalname,
      storagePath: req.file.path,
      mimeType: req.file.mimetype,
      sizeBytes: req.file.size,
      uploadedBy,
      status: "uploaded", // becomes "queued" once BullMQ is wired in Stage 3
    });

    return res.status(201).json(doc);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents
export async function listDocuments(req, res) {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    return res.json(docs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents/:id
export async function getDocument(req, res) {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Document not found" });
    return res.json(doc);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// DELETE /api/documents/:id
export async function deleteDocument(req, res) {
  try {
    const doc = await Document.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Document not found" });
    return res.json({ message: "Document deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
