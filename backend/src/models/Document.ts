import mongoose, { Document as MongooseDocument, Types } from "mongoose";

export type DocumentStatus =
  | "uploaded"
  | "queued"
  | "extracting"
  | "embedding"
  | "ready"
  | "failed";

export interface IParsedItem {
  pageContent: string;
  metadata: Record<string, any>;
}

export interface IDocument extends MongooseDocument {
  title: string;
  originalFileName: string;
  storagePath: string;
  mimeType: string;
  sizeBytes: number;
  uploadedBy: Types.ObjectId;
  status: DocumentStatus;
  failureReason?: string | null;
  pageCount?: number;
  extractedStats?: {
    totalUnits?: number;
    totalCharacters?: number;
    detectedFormat?: string;
  };
  extractedContent?: IParsedItem[];
  createdAt: Date;
  updatedAt: Date;
}

const parsedItemSchema = new mongoose.Schema(
  {
    pageContent: { type: String, required: true },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { _id: false }
);

const documentSchema = new mongoose.Schema<IDocument>(
  {
    title: { type: String, required: true, trim: true },
    originalFileName: { type: String, required: true },
    storagePath: { type: String, required: true },
    mimeType: { type: String, required: true },
    sizeBytes: { type: Number, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["uploaded", "queued", "extracting", "embedding", "ready", "failed"],
      default: "uploaded",
    },
    failureReason: { type: String, default: null },
    pageCount: { type: Number, default: 0 },
    extractedStats: {
      totalUnits: { type: Number, default: 0 },
      totalCharacters: { type: Number, default: 0 },
      detectedFormat: { type: String },
    },
    extractedContent: [parsedItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model<IDocument>("Document", documentSchema);
