import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/store";
import api from "../api/client";
import UploadBox from "../components/UploadBox";
import DocumentCard from "../components/DocumentCard";
import { DocumentItem } from "../types";

export default function Dashboard(): React.ReactElement {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { currentUser } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      fetchDocuments();
    }
  }, [currentUser]);

  async function fetchDocuments(): Promise<void> {
    setLoading(true);
    try {
      const res = await api.get<DocumentItem[]>("/documents");
      setDocuments(res.data);
    } catch (err: any) {
      console.error("Failed to fetch documents:", err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleUploaded(newDoc: DocumentItem): void {
    setDocuments((prev) => [newDoc, ...prev]);
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">DevDocs AI</h1>
      <p className="text-gray-500 mb-6">Upload documents and ask questions about them.</p>

      <div className="mb-8">
        {currentUser && <UploadBox onUploaded={handleUploaded} />}
      </div>

      <h2 className="text-lg font-medium text-gray-700 mb-3">Your documents</h2>
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : documents.length === 0 ? (
        <p className="text-gray-400">No documents yet. Upload one to get started.</p>
      ) : (
        <div className="space-y-3">
          {documents.map((doc) => (
            <DocumentCard key={doc._id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
