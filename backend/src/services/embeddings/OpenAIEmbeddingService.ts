import { OpenAIEmbeddings } from "@langchain/openai";
import { IEmbeddingService } from "./IEmbeddingService.js";

export class OpenAIEmbeddingService implements IEmbeddingService {
  readonly provider = "openai" as const;
  readonly modelName: string;
  readonly dimensions: number;
  private client: OpenAIEmbeddings;
  private batchSize: number;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is not configured in environment variables");
    }

    this.modelName = process.env.OPENAI_EMBEDDING_MODEL || "text-embedding-3-small";

    const configuredDimensions = process.env.OPENAI_EMBEDDING_DIMENSIONS
      ? parseInt(process.env.OPENAI_EMBEDDING_DIMENSIONS, 10)
      : undefined;

    // Matryoshka Representation Learning (MRL) dimension setup:
    // Allows shortening to e.g. 512, saving 66% storage and computation with virtually no loss in accuracy.
    this.dimensions =
      configuredDimensions || (this.modelName === "text-embedding-3-large" ? 3072 : 1536);
    this.batchSize = 200;

    this.client = new OpenAIEmbeddings({
      model: this.modelName,
      apiKey,
      dimensions: configuredDimensions,
      maxRetries: 3,
    });
  }

  public async embedQuery(text: string): Promise<number[]> {
    return this.client.embedQuery(text);
  }

  public async embedDocuments(texts: string[]): Promise<number[][]> {
    if (texts.length === 0) return [];

    const allVectors: number[][] = [];
    for (let i = 0; i < texts.length; i += this.batchSize) {
      const batch = texts.slice(i, i + this.batchSize);
      const batchVectors = await this.client.embedDocuments(batch);
      allVectors.push(...batchVectors);
    }

    return allVectors;
  }
}
