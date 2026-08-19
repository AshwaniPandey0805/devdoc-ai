import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    originalFileName: { type: String, required: true },
    storagePath: { type: String, required: true }, // local path now, S3 key in Stage 3
    mimeType: { type: String, required: true },
    sizeBytes: { type: Number, required: true },

    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    // Processing status - becomes meaningful once BullMQ workers are added (Stage 3-4)
    status: {
      type: String,
      enum: ["uploaded", "queued", "extracting", "embedding", "ready", "failed"],
      default: "uploaded",
    },
    failureReason: { type: String, default: null },

    // workspaceId will be added when we introduce multi-tenant scoping
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);
