import Document from "../models/Document.js";

// POST /api/documents/upload
export async function uploadDocument(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Read the user ID from the JWT auth payload (attached by verifyToken)
    const uploadedBy = req.user.id;

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
// Only return documents uploaded by the authenticated user
export async function listDocuments(req, res) {
  try {
    const docs = await Document.find({ uploadedBy: req.user.id }).sort({ createdAt: -1 });
    return res.json(docs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// GET /api/documents/:id
// Only fetch if the document belongs to the authenticated user
export async function getDocument(req, res) {
  try {
    const doc = await Document.findOne({ _id: req.params.id, uploadedBy: req.user.id });
    if (!doc) return res.status(404).json({ error: "Document not found" });
    return res.json(doc);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// DELETE /api/documents/:id
// Only delete if the document belongs to the authenticated user
export async function deleteDocument(req, res) {
  try {
    const doc = await Document.findOneAndDelete({ _id: req.params.id, uploadedBy: req.user.id });
    if (!doc) return res.status(404).json({ error: "Document not found" });
    return res.json({ message: "Document deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
