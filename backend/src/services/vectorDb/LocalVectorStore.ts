import fs from "fs/promises";
import path from "path";
import {
  IVectorDbService,
  VectorChunkRecord,
  VectorQueryOptions,
  RetrievedChunk,
} from "./IVectorDbService.js";
import { cosineSimilarity } from "../embeddings/vectorMath.js";

/**
 * Embedded local vector store that persists chunks and vectors to JSON files.
 * Used as a zero-downtime fallback when a standalone ChromaDB instance is not running.
 */
export class LocalVectorStore implements IVectorDbService {
  public readonly name = "LocalVectorStore (Fallback)";
  private storageDir: string;

  constructor(storageDir = path.resolve(process.cwd(), "uploads", "vector_store")) {
    this.storageDir = storageDir;
  }

  private async ensureDir(): Promise<void> {
    try {
      await fs.mkdir(this.storageDir, { recursive: true });
    } catch {
      // directory exists
    }
  }

  private getFilePath(collectionName: string): string {
    const safeName = collectionName.replace(/[^a-zA-Z0-9_-]/g, "_");
    return path.join(this.storageDir, `${safeName}.json`);
  }

  private async readRecords(collectionName: string): Promise<VectorChunkRecord[]> {
    await this.ensureDir();
    const filePath = this.getFilePath(collectionName);
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data) as VectorChunkRecord[];
    } catch {
      return [];
    }
  }

  private async writeRecords(collectionName: string, records: VectorChunkRecord[]): Promise<void> {
    await this.ensureDir();
    const filePath = this.getFilePath(collectionName);
    await fs.writeFile(filePath, JSON.stringify(records, null, 2), "utf-8");
  }

  public async initialize(): Promise<boolean> {
    await this.ensureDir();
    console.log(`📁 LocalVectorStore: Initialized local fallback vector store at ${this.storageDir}`);
    return true;
  }

  public async upsertChunks(collectionName: string, records: VectorChunkRecord[]): Promise<void> {
    const existing = await this.readRecords(collectionName);
    const recordMap = new Map<string, VectorChunkRecord>();

    for (const r of existing) {
      recordMap.set(r.id, r);
    }
    for (const r of records) {
      recordMap.set(r.id, r);
    }

    await this.writeRecords(collectionName, Array.from(recordMap.values()));
    console.log(
      `[LocalVectorStore] Upserted ${records.length} chunk(s) into fallback store '${collectionName}'.`
    );
  }

  public async querySimilar(
    collectionName: string,
    options: VectorQueryOptions
  ): Promise<RetrievedChunk[]> {
    const records = await this.readRecords(collectionName);
    const topK = options.topK || 5;

    // Filter by tenant and optionally documentId
    const filtered = records.filter((r) => {
      if (r.metadata.userId !== options.userId) return false;
      if (options.documentId && r.metadata.documentId !== options.documentId) return false;
      return true;
    });

    const scored = filtered.map((r) => {
      const sim = cosineSimilarity(options.queryVector, r.vector);
      return {
        id: r.id,
        content: r.content,
        distance: Math.max(0, 1 - sim),
        similarityScore: Math.max(0, sim),
        metadata: r.metadata,
      };
    });

    // Sort descending by similarity score
    scored.sort((a, b) => b.similarityScore - a.similarityScore);

    const results = scored.slice(0, topK);
    if (options.minSimilarity) {
      return results.filter((r) => r.similarityScore >= options.minSimilarity!);
    }

    return results;
  }

  public async deleteByDocumentId(collectionName: string, documentId: string): Promise<void> {
    const records = await this.readRecords(collectionName);
    const updated = records.filter((r) => r.metadata.documentId !== documentId);
    await this.writeRecords(collectionName, updated);
    console.log(`[LocalVectorStore] Removed chunks for document ${documentId} from '${collectionName}'.`);
  }
}
