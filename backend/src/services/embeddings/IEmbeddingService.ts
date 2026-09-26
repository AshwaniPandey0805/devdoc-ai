export interface EmbeddingResult {
  vectors: number[][];
  dimensions: number;
  model: string;
}

export interface IEmbeddingService {
  readonly provider: "openai" | "huggingface";
  readonly modelName: string;
  readonly dimensions: number;

  /**
   * Generates a high-dimensional vector for a single query text (at search time).
   */
  embedQuery(text: string): Promise<number[]>;

  /**
   * Generates vectors for a batch of document chunk texts (at indexing time).
   */
  embedDocuments(texts: string[]): Promise<number[][]>;
}
