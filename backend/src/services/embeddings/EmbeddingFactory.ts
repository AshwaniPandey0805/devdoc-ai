import { IEmbeddingService } from "./IEmbeddingService.js";
import { OpenAIEmbeddingService } from "./OpenAIEmbeddingService.js";
import { HuggingFaceEmbeddingService } from "./HuggingFaceEmbeddingService.js";
import dotenv from "dotenv";

export class EmbeddingFactory {
  private static instance: IEmbeddingService | null = null;

  public static getEmbeddingService(): IEmbeddingService {
    if (!this.instance) {
      if (!process.env.OPENAI_API_KEY) {
        dotenv.config();
      }
      const apiKey = process.env.OPENAI_API_KEY?.trim();
      const hasOpenAI = !!apiKey && apiKey !== "your_openai_api_key_here";

      if (hasOpenAI) {
        try {
          this.instance = new OpenAIEmbeddingService();
          console.log(
            `🧠 EmbeddingFactory: Initialized OpenAI Embeddings (${this.instance.modelName}, ${this.instance.dimensions} dims).`
          );
        } catch (err: any) {
          console.warn(
            `⚠️ EmbeddingFactory: OpenAI initialization failed (${err.message}). Falling back to local HuggingFace.`
          );
          this.instance = new HuggingFaceEmbeddingService();
        }
      } else {
        console.warn(
          "📁 EmbeddingFactory: OPENAI_API_KEY not configured. Defaulting to local Hugging Face ONNX Embeddings (all-MiniLM-L6-v2)."
        );
        this.instance = new HuggingFaceEmbeddingService();
      }
    }

    return this.instance;
  }

  /**
   * Resolves the matching embedding service for a specific model name.
   * Guarantees queries against an indexed document always use the exact same vector space.
   */
  public static getServiceForModel(modelName?: string): IEmbeddingService {
    if (modelName && modelName.includes("all-MiniLM-L6-v2")) {
      return new HuggingFaceEmbeddingService();
    }
    if (modelName && modelName.includes("text-embedding-3")) {
      return new OpenAIEmbeddingService();
    }
    return this.getEmbeddingService();
  }
}
