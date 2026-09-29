import React from "react";
import { DocumentItem, DocumentStatus } from "../types";
import api from "../api/client";
import {
  IoSparkles,
  IoEyeOutline,
  IoDocumentTextOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";

const STATUS_LABELS: Record<DocumentStatus, string> = {
  uploaded: "Uploaded",
  queued: "Queued",
  extracting: "Extracting text",
  embedding: "Generating embeddings",
  ready: "Ready for Q&A",
  failed: "Failed",
};

const STATUS_COLORS: Record<DocumentStatus, string> = {
  uploaded: "bg-blue-50 text-blue-700 border border-blue-200",
  queued: "bg-amber-50 text-amber-700 border border-amber-200",
  extracting: "bg-amber-50 text-amber-700 border border-amber-200",
  embedding: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  ready: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  failed: "bg-red-50 text-red-700 border border-red-200",
};

interface DocumentCardProps {
  doc: DocumentItem;
  isSelected?: boolean;
  onChat?: (doc: DocumentItem) => void;
}

export default function DocumentCard({
  doc,
  isSelected,
  onChat,
}: DocumentCardProps): React.ReactElement {
  const isReady = doc.status === "ready";
  const isProcessing =
    doc.status === "uploaded" ||
    doc.status === "queued" ||
    doc.status === "extracting" ||
    doc.status === "embedding";

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
    <div
      className={`border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white transition-all ${
        isSelected
          ? "border-blue-500 shadow-md ring-2 ring-blue-500/10 bg-blue-50/20"
          : "border-gray-200 shadow-xs hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 mt-0.5">
          <IoDocumentTextOutline className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">
              {doc.title}
            </p>
            {doc.storageType === "s3" && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">
                S3
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate">{doc.originalFileName}</p>
          {doc.failureReason && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <IoAlertCircleOutline /> {doc.failureReason}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap justify-end flex-shrink-0">
        {/* Status Badge */}
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            STATUS_COLORS[doc.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {STATUS_LABELS[doc.status] || doc.status}
        </span>

        {/* View Document */}
        <button
          onClick={handleView}
          className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 border border-gray-200"
          title="Open document preview"
        >
          <IoEyeOutline className="w-3.5 h-3.5" />
          <span>View</span>
        </button>

        {/* Prominent Ask Questions Button */}
        {isReady ? (
          <button
            onClick={() => onChat?.(doc)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            title="Ask questions about this document with AI"
          >
            <IoSparkles className="w-3.5 h-3.5" />
            <span>Ask Questions</span>
          </button>
        ) : isProcessing ? (
          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium animate-pulse">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            Indexing...
          </span>
        ) : doc.status === "failed" ? (
          <button className="text-xs text-red-600 hover:text-red-800 font-medium px-2.5 py-1.5 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
}
