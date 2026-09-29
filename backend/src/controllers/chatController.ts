import { Request, Response } from "express";
import Document from "../models/Document.js";
import { EmbeddingFactory } from "../services/embeddings/index.js";
import { ChromaService, getCollectionNameForModel } from "../services/vectorDb/index.js";
import { QaService } from "../services/qa/index.js";

/**
 * POST /api/documents/:id/chat
 * Ask questions scoped to a specific document.
 */
export async function askDocumentQuestion(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { question, topK = 5 } = req.body;
    if (!question || typeof question !== "string" || !question.trim()) {
      return res.status(400).json({ error: "Question is required" });
    }

    const doc = await Document.findOne({ _id: req.params.id, uploadedBy: userId });
    if (!doc) {
      return res.status(404).json({ error: "Document not found" });
    }

    if (doc.status !== "ready") {
      return res.status(400).json({
        error: `Document is not ready for chat yet (current status: ${doc.status})`,
        status: doc.status,
      });
    }

    // 1. Generate query embedding vector matching the exact model used to index this document
    const embeddingService = EmbeddingFactory.getServiceForModel(doc.embeddingStats?.model);
    const queryVector = await embeddingService.embedQuery(question.trim());

    // 2. Resolve Chroma collection
    const collectionName =
      doc.chromaCollection ||
      getCollectionNameForModel(embeddingService.modelName, embeddingService.dimensions);

    // 3. Query ChromaDB for relevant chunks
    const chromaService = new ChromaService();
    const chunks = await chromaService.querySimilar(collectionName, {
      queryVector,
      topK: Math.min(Number(topK) || 5, 15),
      userId,
      documentId: doc._id.toString(),
      minSimilarity: 0.05,
    });

    // 4. Grounded OpenAI Q&A generation
    const qaService = new QaService();
    const result = await qaService.answerQuestion(question.trim(), chunks, doc.title);

    return res.json({
      ...result,
      documentId: doc._id,
      documentTitle: doc.title,
      chunksRetrieved: chunks.length,
    });
  } catch (err: any) {
    console.error("[ChatController] askDocumentQuestion error:", err);
    return res.status(500).json({ error: err.message || "Failed to process question" });
  }
}

/**
 * POST /api/chat
 * Cross-document search & conversational Q&A across all user documents.
 */
export async function askGlobalQuestion(req: Request, res: Response): Promise<Response> {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { question, topK = 6 } = req.body;
    if (!question || typeof question !== "string" || !question.trim()) {
      return res.status(400).json({ error: "Question is required" });
    }

    // 1. Generate query embedding vector
    const embeddingService = EmbeddingFactory.getEmbeddingService();
    const queryVector = await embeddingService.embedQuery(question.trim());

    // 2. Resolve Chroma collection
    const collectionName = getCollectionNameForModel(
      embeddingService.modelName,
      embeddingService.dimensions
    );

    // 3. Query ChromaDB across all documents for this tenant
    const chromaService = new ChromaService();
    const chunks = await chromaService.querySimilar(collectionName, {
      queryVector,
      topK: Math.min(Number(topK) || 6, 20),
      userId,
      minSimilarity: 0.1,
    });

    // 4. Grounded OpenAI Q&A generation
    const qaService = new QaService();
    const result = await qaService.answerQuestion(question.trim(), chunks);

    return res.json({
      ...result,
      chunksRetrieved: chunks.length,
    });
  } catch (err: any) {
    console.error("[ChatController] askGlobalQuestion error:", err);
    return res.status(500).json({ error: err.message || "Failed to process question" });
  }
}
