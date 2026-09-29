import { ChromaClient, Collection } from "chromadb";
import {
  IVectorDbService,
  VectorChunkRecord,
  VectorQueryOptions,
  RetrievedChunk,
} from "./IVectorDbService.js";
import { LocalVectorStore } from "./LocalVectorStore.js";

/**
 * Deterministically maps embedding model and dimension to a ChromaDB collection name.
 * ChromaDB collections enforce a uniform vector dimension across all records.
 */
export function getCollectionNameForModel(modelName: string, dimensions: number): string {
  const sanitized = modelName.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
  return `devdocs_${sanitized}_${dimensions}`;
}

export class ChromaService implements IVectorDbService {
  public readonly name = "ChromaDB";
  private client: ChromaClient;
  private collectionsCache = new Map<string, Collection>();
  private localFallback = new LocalVectorStore();

  constructor(chromaUrl = process.env.CHROMA_URL || "http://localhost:8000") {
    this.client = new ChromaClient({
      path: chromaUrl,
    });
  }

  /**
   * Initializes and tests connection to ChromaDB.
   */
  public async initialize(): Promise<boolean> {
    try {
      const version = await this.client.version();
      console.log(`⚡ ChromaService: Connected to ChromaDB v${version} at ${process.env.CHROMA_URL || "http://localhost:8000"}`);
      return true;
    } catch (err: any) {
      console.warn(
        `⚠️ ChromaService: Could not connect to ChromaDB at ${process.env.CHROMA_URL || "http://localhost:8000"} (${err.message}).`
      );
      console.warn("📁 ChromaService: Automatically using LocalVectorStore fallback.");
      return false;
    }
  }

  /**
   * Gets or creates a ChromaDB collection configured with cosine distance.
   */
  public async getOrCreateCollection(name: string): Promise<Collection> {
    if (this.collectionsCache.has(name)) {
      return this.collectionsCache.get(name)!;
    }

    const collection = await this.client.getOrCreateCollection({
      name,
      metadata: { "hnsw:space": "cosine" },
    });

    this.collectionsCache.set(name, collection);
    return collection;
  }

  /**
   * Upserts chunk vectors and sanitized metadata into ChromaDB.
   * If ChromaDB server is offline, seamlessly persists to LocalVectorStore fallback.
   */
  public async upsertChunks(collectionName: string, records: VectorChunkRecord[]): Promise<void> {
    if (records.length === 0) return;

    try {
      const collection = await this.getOrCreateCollection(collectionName);

      // ChromaDB metadatas only allow string, number, or boolean values
      const sanitizedMetadatas = records.map((r) => {
        const meta: Record<string, string | number | boolean> = {};
        for (const [key, val] of Object.entries(r.metadata)) {
          if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
            meta[key] = val;
          } else if (val !== null && val !== undefined) {
            meta[key] = String(val);
          }
        }
        return meta;
      });

      const BATCH_SIZE = 200;
      for (let i = 0; i < records.length; i += BATCH_SIZE) {
        const batchRecords = records.slice(i, i + BATCH_SIZE);
        const batchMetas = sanitizedMetadatas.slice(i, i + BATCH_SIZE);

        await collection.upsert({
          ids: batchRecords.map((r) => r.id),
          embeddings: batchRecords.map((r) => r.vector),
          documents: batchRecords.map((r) => r.content),
          metadatas: batchMetas,
        });
      }

      console.log(`[ChromaService] Successfully upserted ${records.length} chunk(s) into ChromaDB collection '${collectionName}'.`);
    } catch (err: any) {
      console.warn(`[ChromaService] ChromaDB upsert failed (${err.message}). Using LocalVectorStore fallback.`);
      await this.localFallback.upsertChunks(collectionName, records);
    }
  }

  /**
   * Performs tenant-isolated similarity search across the vector collection.
   * If ChromaDB server is offline, seamlessly queries the LocalVectorStore fallback.
   */
  public async querySimilar(
    collectionName: string,
    options: VectorQueryOptions
  ): Promise<RetrievedChunk[]> {
    try {
      const collection = await this.getOrCreateCollection(collectionName);
      const topK = options.topK || 5;

      let whereClause: any = { userId: { $eq: options.userId } };
      if (options.documentId) {
        whereClause = {
          $and: [
            { userId: { $eq: options.userId } },
            { documentId: { $eq: options.documentId } },
          ],
        };
      }

      const queryResponse = await collection.query({
        queryEmbeddings: [options.queryVector],
        nResults: topK,
        where: whereClause,
      });

      const retrieved: RetrievedChunk[] = [];
      const ids = queryResponse.ids[0] || [];
      const docs = queryResponse.documents[0] || [];
      const metas = queryResponse.metadatas[0] || [];
      const distances = queryResponse.distances?.[0] || [];

      for (let i = 0; i < ids.length; i++) {
        const distance = distances[i] ?? 1.0;
        const similarityScore = Math.max(0, 1 - distance);

        if (options.minSimilarity && similarityScore < options.minSimilarity) {
          continue;
        }

        retrieved.push({
          id: ids[i],
          content: docs[i] || "",
          distance,
          similarityScore,
          metadata: (metas[i] as any) || {},
        });
      }

      return retrieved;
    } catch (err: any) {
      console.warn(`[ChromaService] ChromaDB query failed (${err.message}). Using LocalVectorStore fallback.`);
      return await this.localFallback.querySimilar(collectionName, options);
    }
  }

  /**
   * Deletes all chunk records associated with a document ID.
   */
  public async deleteByDocumentId(collectionName: string, documentId: string): Promise<void> {
    try {
      const collection = await this.getOrCreateCollection(collectionName);
      await collection.delete({
        where: { documentId: { $eq: documentId } },
      });
      console.log(`[ChromaService] Deleted chunks for document ${documentId} from ChromaDB collection '${collectionName}'.`);
    } catch (err: any) {
      console.warn(`[ChromaService] deleteByDocumentId Chroma warning (${err.message}). Calling LocalVectorStore cleanup.`);
    }

    await this.localFallback.deleteByDocumentId(collectionName, documentId);
  }
}
