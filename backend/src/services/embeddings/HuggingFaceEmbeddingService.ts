import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { IEmbeddingService } from "./IEmbeddingService.js";

/**
 * 100% Local, Offline Embedding Fallback
 * Powered by Transformers.js / ONNX Runtime.
 * Generates 384-dimensional vectors with zero external API calls or costs.
 */
export class HuggingFaceEmbeddingService implements IEmbeddingService {
  readonly provider = "huggingface" as const;
  readonly modelName = "Xenova/all-MiniLM-L6-v2";
  readonly dimensions = 384;
  private client: HuggingFaceTransformersEmbeddings;

  constructor() {
    this.client = new HuggingFaceTransformersEmbeddings({
      model: this.modelName,
    });
  }

  public async embedQuery(text: string): Promise<number[]> {
    return this.client.embedQuery(text);
  }

  public async embedDocuments(texts: string[]): Promise<number[][]> {
    if (texts.length === 0) return [];
    return this.client.embedDocuments(texts);
  }
}
