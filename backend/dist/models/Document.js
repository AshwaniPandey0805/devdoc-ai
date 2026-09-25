import mongoose from "mongoose";
const parsedItemSchema = new mongoose.Schema({
    pageContent: { type: String, required: true },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { _id: false });
const documentSchema = new mongoose.Schema({
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
}, { timestamps: true });
export default mongoose.model("Document", documentSchema);
