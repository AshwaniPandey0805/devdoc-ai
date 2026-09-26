import { Types } from "mongoose";
import fs from "fs/promises";
import Document, { StorageType } from "../models/Document.js";
import { ParserFactory } from "./parsers/index.js";
import { StorageFactory } from "./storage/index.js";
import { ChunkingService } from "./chunking/index.js";
import { EmbeddingFactory } from "./embeddings/index.js";

/**
 * Asynchronously processes an uploaded document:
 * 1. Updates status to "extracting"
 * 2. Downloads S3 object to temp file if stored in S3
 * 3. Selects the appropriate parser via ParserFactory
 * 4. Extracts cleaned content and metadata
 * 5. Updates status to "embedding"
 * 6. Chunks parsed content with ChunkingService
 * 7. Generates high-dimensional vector embeddings with OpenAIEmbeddings (or local fallback)
 * 8. Records embedding metadata on the document (status stays "embedding" until Stage 5 Vector DB storage)
 * 9. Cleans up any temp files used for extraction
 */
export async function processDocument(
  docId: string | Types.ObjectId,
  storageKey: string,
  storageType: StorageType,
  mimeType: string
): Promise<void> {
  console.log(`[DocumentProcessor] Starting extraction for document ${docId} (${storageType}: ${storageKey})`);

  let tempFilePath: string | null = null;

  try {
    // 1. Set status to extracting
    const doc = await Document.findByIdAndUpdate(
      docId,
      {
        status: "extracting",
        failureReason: null,
      },
      { new: true }
    );

    // 2. Resolve parser
    const parser = ParserFactory.getParser(storageKey, mimeType);
    console.log(`[DocumentProcessor] Using parser: ${parser.name}`);

    // 3. Resolve local path for parser
    const storageService = StorageFactory.getStorage();
    if (storageType === "s3") {
      tempFilePath = await storageService.downloadToTempFile(storageKey);
    } else {
      tempFilePath = storageKey;
    }

    // 4. Execute parsing
    const result = await parser.parse(tempFilePath);
    console.log(
      `[DocumentProcessor] Extracted ${result.documents.length} unit(s) (${result.stats.totalCharacters} chars) for document ${docId}.`
    );

    // 5. Update status to embedding
    await Document.findByIdAndUpdate(docId, {
      status: "embedding",
      pageCount: result.stats.totalUnits,
      extractedStats: result.stats,
      extractedContent: result.documents,
      failureReason: null,
    });

    // 6. Token-aware Chunking
    const chunkingService = new ChunkingService(800, 150);
    const sourceName = doc?.originalFileName || "document";
    const chunks = await chunkingService.chunkParsedItems(result.documents, sourceName);
    console.log(`[DocumentProcessor] Generated ${chunks.length} chunk(s) for document ${docId}.`);

    // 7. Vector Embedding Generation (Stage 4 Scope)
    const embeddingService = EmbeddingFactory.getEmbeddingService();
    const textsToEmbed = chunks.map((c) => c.content);
    const vectors = await embeddingService.embedDocuments(textsToEmbed);

    console.log(
      `[DocumentProcessor] Successfully embedded ${vectors.length} chunk(s) using ${embeddingService.modelName} (${embeddingService.dimensions} dims).`
    );

    // 8. Record embedding stats on document (retains status: "embedding" until Stage 5 Vector DB storage)
    await Document.findByIdAndUpdate(docId, {
      embeddingStats: {
        model: embeddingService.modelName,
        dimensions: embeddingService.dimensions,
        totalChunks: chunks.length,
        embeddedAt: new Date(),
      },
      failureReason: null,
    });

    console.log(
      `[DocumentProcessor] Document ${docId} processed and embedded (${vectors.length} vectors, ${embeddingService.dimensions} dims). Status -> embedding (Ready for Stage 5 Vector DB storage).`
    );
  } catch (error: any) {
    console.error(`[DocumentProcessor] Extraction failed for document ${docId}:`, error.message);

    await Document.findByIdAndUpdate(docId, {
      status: "failed",
      failureReason: error.message || "Unknown error during document extraction",
    });
  } finally {
    // If S3, delete the temporary scratch file downloaded for parsing
    if (storageType === "s3" && tempFilePath) {
      try {
        await fs.unlink(tempFilePath);
      } catch (err: any) {
        console.warn(`[DocumentProcessor] Could not clean up temp file ${tempFilePath}:`, err.message);
      }
    }
  }
}
