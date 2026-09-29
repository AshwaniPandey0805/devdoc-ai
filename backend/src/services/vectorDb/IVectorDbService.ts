export interface VectorChunkRecord {
  id: string;
  vector: number[];
  content: string;
  metadata: {
    userId: string;
    documentId: string;
    source: string;
    chunkIndex: number;
    pageNumber?: number;
    sheetName?: string;
    rowNumber?: number;
    format?: string;
    charCount: number;
    [key: string]: any;
  };
}

export interface VectorQueryOptions {
  queryVector: number[];
  topK?: number;
  userId: string;
  documentId?: string;
  minSimilarity?: number;
}

export interface RetrievedChunk {
  id: string;
  content: string;
  distance: number;
  similarityScore: number;
  metadata: {
    userId: string;
    documentId: string;
    source: string;
    chunkIndex: number;
    pageNumber?: number;
    sheetName?: string;
    rowNumber?: number;
    format?: string;
    charCount: number;
    [key: string]: any;
  };
}

export interface IVectorDbService {
  readonly name: string;
  initialize(): Promise<boolean>;
  upsertChunks(collectionName: string, records: VectorChunkRecord[]): Promise<void>;
  querySimilar(collectionName: string, options: VectorQueryOptions): Promise<RetrievedChunk[]>;
  deleteByDocumentId(collectionName: string, documentId: string): Promise<void>;
}
