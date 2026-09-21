import { useRef, useState } from "react";
import api from "../api/client.js";

export default function UploadBox({ onUploaded }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  async function handleFile(file) {
    if (!file) return;
    setError("");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", file.name);

    try {
      const res = await api.post("/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUploaded(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  }

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
          dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <p className="text-gray-600">
          {uploading ? "Uploading..." : "Drag and drop a file here, or click to browse"}
        </p>
        <p className="text-sm text-gray-400 mt-1">
          PDF, Word, Excel, CSV, TXT, Markdown — up to 20MB
        </p>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".pdf,.txt,.md,.markdown,.csv,.xlsx,.xls,.docx,.doc"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
