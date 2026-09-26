import { IEmbeddingService } from "./IEmbeddingService.js";
import { OpenAIEmbeddingService } from "./OpenAIEmbeddingService.js";
import { HuggingFaceEmbeddingService } from "./HuggingFaceEmbeddingService.js";

export class EmbeddingFactory {
  private static instance: IEmbeddingService | null = null;

  public static getEmbeddingService(): IEmbeddingService {
    if (!this.instance) {
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
}
