import { useEffect, useState } from "react";
import api from "../api/client.js";
import UploadBox from "../components/UploadBox.jsx";
import DocumentCard from "../components/DocumentCard.jsx";

// TEMP: hardcoded user until Stage 2 (Firebase Auth + JWT) is added
const TEMP_USER_ID_KEY = "devdocs_temp_user_id";

export default function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    initTempUser();
  }, []);

  useEffect(() => {
    if (userId) fetchDocuments();
  }, [userId]);

  async function initTempUser() {
    let id = localStorage.getItem(TEMP_USER_ID_KEY);
    if (!id) {
      const res = await api.post("/users", {
        name: "Test User",
        email: `testuser-${Date.now()}@example.com`,
      });
      id = res.data._id;
      localStorage.setItem(TEMP_USER_ID_KEY, id);
    }
    setUserId(id);
  }

  async function fetchDocuments() {
    setLoading(true);
    const res = await api.get("/documents");
    setDocuments(res.data);
    setLoading(false);
  }

  function handleUploaded(newDoc) {
    setDocuments((prev) => [newDoc, ...prev]);
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">DevDocs AI</h1>
      <p className="text-gray-500 mb-6">Upload documents and (soon) ask questions about them.</p>

      <div className="mb-8">
        {userId && <UploadBox userId={userId} onUploaded={handleUploaded} />}
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
