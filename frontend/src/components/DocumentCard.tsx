import React from "react";
import { DocumentItem, DocumentStatus } from "../types";
import api from "../api/client";

const STATUS_LABELS: Record<DocumentStatus, string> = {
  uploaded: "Uploaded",
  queued: "Queued",
  extracting: "Extracting text",
  embedding: "Generating embeddings",
  ready: "Ready",
  failed: "Failed",
};

const STATUS_COLORS: Record<DocumentStatus, string> = {
  uploaded: "bg-gray-100 text-gray-700",
  queued: "bg-yellow-100 text-yellow-700",
  extracting: "bg-yellow-100 text-yellow-700",
  embedding: "bg-yellow-100 text-yellow-700",
  ready: "bg-green-100 text-green-700",
  failed: "bg-red-100 text-red-700",
};

interface DocumentCardProps {
  doc: DocumentItem;
}

export default function DocumentCard({ doc }: DocumentCardProps): React.ReactElement {
  const isReady = doc.status === "ready";

  const handleView = async (): Promise<void> => {
    try {
      const res = await api.get<{ downloadUrl: string }>(`/documents/${doc._id}/download-url`);
      if (res.data.downloadUrl) {
        window.open(res.data.downloadUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err: any) {
      console.error("Failed to retrieve document view URL:", err.message);
    }
  };

  return (
    <div className="border rounded-lg p-4 flex items-center justify-between bg-white shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-800">{doc.title}</p>
          {doc.storageType === "s3" && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
              S3
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400">{doc.originalFileName}</p>
        {doc.failureReason && (
          <p className="text-xs text-red-500 mt-1">{doc.failureReason}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_COLORS[doc.status] || "bg-gray-100 text-gray-700"}`}>
          {STATUS_LABELS[doc.status] || doc.status}
        </span>

        {/* View / Download presigned URL button */}
        <button
          onClick={handleView}
          className="text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors"
          title="Open document"
        >
          View
        </button>

        {/* Chat icon only appears once the document is ready - Stage 5+ */}
        {isReady && (
          <button
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            title="Ask questions about this document"
          >
            Chat
          </button>
        )}

        {doc.status === "failed" && (
          <button className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors">
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
