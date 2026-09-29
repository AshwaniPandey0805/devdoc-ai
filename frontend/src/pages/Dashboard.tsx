import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";
import api from "../api/client";
import UploadBox from "../components/UploadBox";
import DocumentCard from "../components/DocumentCard";
import DashboardChatSection from "../components/DashboardChatSection";
import DocumentChatModal from "../components/DocumentChatModal";
import { DocumentItem } from "../types";
import { IoSparkles, IoRefreshOutline } from "react-icons/io5";

export default function Dashboard(): React.ReactElement {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [modalChatDoc, setModalChatDoc] = useState<DocumentItem | null>(null);
  const { currentUser } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      fetchDocuments();
    }
  }, [currentUser]);

  // Auto-polling when any document is still processing
  useEffect(() => {
    const hasProcessing = documents.some(
      (d) =>
        d.status === "uploaded" ||
        d.status === "queued" ||
        d.status === "extracting" ||
        d.status === "embedding"
    );

    if (!hasProcessing) return;

    const interval = setInterval(() => {
      fetchDocuments(false);
    }, 2500);

    return () => clearInterval(interval);
  }, [documents]);

  async function fetchDocuments(showLoading = true): Promise<void> {
    if (showLoading) setLoading(true);
    try {
      const res = await api.get<DocumentItem[]>("/documents");
      setDocuments(res.data);

      // Auto-select the first ready document if none currently selected
      if (!selectedDoc) {
        const firstReady = res.data.find((d) => d.status === "ready");
        if (firstReady) {
          setSelectedDoc(firstReady);
        }
      }
    } catch (err: any) {
      console.error("Failed to fetch documents:", err.message);
    } finally {
      if (showLoading) setLoading(false);
    }
  }

  function handleUploaded(newDoc: DocumentItem): void {
    setDocuments((prev) => [newDoc, ...prev]);
    // Pre-select the newly uploaded doc for when it becomes ready
    setSelectedDoc(newDoc);
  }

  const handleCardChat = (doc: DocumentItem) => {
    setSelectedDoc(doc);
    setModalChatDoc(doc);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Platform Title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">DevDocs AI</h1>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1">
            <IoSparkles className="w-3 h-3" /> RAG Platform
          </span>
        </div>
        <p className="text-sm text-gray-500">
          Upload documents and ask questions grounded in your technical files, PDFs, spreadsheets, and specifications.
        </p>
      </div>

      {/* 1. Upload Box */}
      <div className="mb-8">
        {currentUser && <UploadBox onUploaded={handleUploaded} />}
      </div>

      {/* 2. Embedded In-Page AI Question & Answer Section */}
      <div className="mb-8">
        <DashboardChatSection
          documents={documents}
          selectedDoc={selectedDoc}
          onSelectDoc={(doc) => setSelectedDoc(doc)}
        />
      </div>

      {/* 3. Document Library Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Your Indexed Documents</h2>
          <p className="text-xs text-gray-400">Click "Ask Questions" on any ready document to chat with it</p>
        </div>
        <button
          onClick={() => fetchDocuments(true)}
          className="text-xs text-gray-500 hover:text-gray-800 flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          title="Refresh documents"
        >
          <IoRefreshOutline className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Document Cards List */}
      {loading ? (
        <div className="p-8 text-center bg-gray-50 rounded-xl border border-gray-100 text-gray-400 text-sm">
          Loading documents...
        </div>
      ) : documents.length === 0 ? (
        <div className="p-8 text-center bg-gray-50 rounded-xl border border-gray-100 text-gray-400 text-sm">
          No documents uploaded yet. Upload a document above to get started.
        </div>
      ) : (
        <div className="space-y-3">
          {documents.map((doc) => (
            <DocumentCard
              key={doc._id}
              doc={doc}
              isSelected={selectedDoc?._id === doc._id}
              onChat={handleCardChat}
            />
          ))}
        </div>
      )}

      {/* Full-Screen Chat Modal */}
      {modalChatDoc && (
        <DocumentChatModal
          doc={modalChatDoc}
          onClose={() => setModalChatDoc(null)}
        />
      )}
    </div>
  );
}
