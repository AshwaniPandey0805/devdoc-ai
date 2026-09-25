import { Types } from "mongoose";
import fs from "fs/promises";
import Document, { StorageType } from "../models/Document.js";
import { ParserFactory } from "./parsers/index.js";
import { StorageFactory } from "./storage/index.js";

/**
 * Asynchronously processes an uploaded document:
 * 1. Updates status to "extracting"
 * 2. Downloads S3 object to temp file if stored in S3
 * 3. Selects the appropriate parser via ParserFactory
 * 4. Extracts cleaned content and metadata
 * 5. Updates document status to "ready" or "failed"
 * 6. Cleans up any temp files used for extraction
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
    await Document.findByIdAndUpdate(docId, {
      status: "extracting",
      failureReason: null,
    });

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

    // 5. Update document with extracted content and stats
    await Document.findByIdAndUpdate(docId, {
      status: "ready",
      pageCount: result.stats.totalUnits,
      extractedStats: result.stats,
      extractedContent: result.documents,
      failureReason: null,
    });

    console.log(
      `[DocumentProcessor] Successfully extracted ${result.documents.length} unit(s) (${result.stats.totalCharacters} chars) for document ${docId}. Status -> ready.`
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
