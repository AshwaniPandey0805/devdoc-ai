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
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface ApiErrorResponse {
  error: string;
}
