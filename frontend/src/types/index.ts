export type DocumentStatus =
  | "uploaded"
  | "queued"
  | "extracting"
  | "embedding"
  | "ready"
  | "failed";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "member";
  createdAt?: string;
  updatedAt?: string;
}

export interface DocumentItem {
  _id: string;
  title: string;
  originalFileName: string;
  storagePath: string;
  storageType?: "s3" | "local";
  mimeType: string;
  sizeBytes: number;
  uploadedBy: string;
  status: DocumentStatus;
  failureReason?: string | null;
  chromaCollection?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Citation {
  sourceIndex: number;
  fileName: string;
  pageNumber?: number;
  sheetName?: string;
  rowNumber?: number;
  similarityScore: number;
  snippet: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  citations?: Citation[];
  timestamp: string;
}

export interface ChatResponse {
  answer: string;
  citations: Citation[];
  documentId?: string;
  documentTitle?: string;
  chunksRetrieved?: number;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface ApiErrorResponse {
  error: string;
}
