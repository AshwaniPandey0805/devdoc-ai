import React, { useState, useRef, useEffect } from "react";
import { DocumentItem, ChatMessage, ChatResponse, Citation } from "../types";
import api from "../api/client";
import {
  IoSparkles,
  IoSend,
  IoDocumentTextOutline,
  IoChevronDown,
  IoCheckmarkCircleOutline,
  IoHelpCircleOutline,
  IoArrowForward,
} from "react-icons/io5";

interface DashboardChatSectionProps {
  documents: DocumentItem[];
  selectedDoc: DocumentItem | null;
  onSelectDoc: (doc: DocumentItem) => void;
}

export default function DashboardChatSection({
  documents,
  selectedDoc,
  onSelectDoc,
}: DashboardChatSectionProps): React.ReactElement {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCitationIdx, setExpandedCitationIdx] = useState<string | null>(null);
  const [docDropdownOpen, setDocDropdownOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // When selected document changes, reset messages or show greeting
  useEffect(() => {
    if (selectedDoc) {
      setMessages([
        {
          id: `greet-${selectedDoc._id}`,
          sender: "assistant",
          text: `I'm ready! **${selectedDoc.title}** is indexed in ChromaDB. What would you like to know about it?`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } else {
      setMessages([]);
    }
  }, [selectedDoc?._id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const readyDocuments = documents.filter((d) => d.status === "ready");

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputQuestion.trim();
    if (!query || isLoading || !selectedDoc) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuestion("");
    setIsLoading(true);

    try {
      const res = await api.post<ChatResponse>(`/documents/${selectedDoc._id}/chat`, {
        question: query,
        topK: 5,
      });

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: res.data.answer,
        citations: res.data.citations,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: "assistant",
        text: `Error retrieving answer: ${
          err.response?.data?.error || err.message || "Failed to search document"
        }`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (promptText: string) => {
    setInputQuestion(promptText);
  };

  const toggleCitation = (key: string) => {
    setExpandedCitationIdx(expandedCitationIdx === key ? null : key);
  };

  if (readyDocuments.length === 0) {
    const processingDoc = documents.find(
      (d) => d.status === "extracting" || d.status === "embedding" || d.status === "uploaded"
    );

    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8 text-center">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <IoSparkles className="w-6 h-6 animate-pulse" />
        </div>
        <h3 className="text-base font-semibold text-gray-800 mb-1">
          {processingDoc ? "Document is Indexing..." : "No Indexed Documents Yet"}
        </h3>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          {processingDoc
            ? `Parsing and embedding "${processingDoc.title}" in ChromaDB. The Q&A chat box will activate automatically once ready!`
            : "Upload a document above (PDF, Word, Excel, CSV, or JSON) to unlock AI questions and semantic search."}
        </p>
      </div>
    );
  }

  const activeDoc = selectedDoc || readyDocuments[0];

  return (
    <div className="bg-white border border-blue-100 rounded-2xl shadow-md overflow-hidden mb-8 transition-all">
      {/* Header with Document Selector */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
            <IoSparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold tracking-tight">Ask Questions with AI</h2>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 text-white flex items-center gap-1">
                <IoCheckmarkCircleOutline /> ChromaDB Ready
              </span>
            </div>
            <p className="text-xs text-blue-100">
              Grounded answers strictly cited from your uploaded file
            </p>
          </div>
        </div>

        {/* Document Selector Dropdown if multiple docs */}
        {readyDocuments.length > 1 && (
          <div className="relative">
            <button
              onClick={() => setDocDropdownOpen(!docDropdownOpen)}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-all border border-white/20"
            >
              <IoDocumentTextOutline />
              <span className="truncate max-w-[160px]">{activeDoc.title}</span>
              <IoChevronDown />
            </button>

            {docDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-xl border border-gray-100 py-1.5 z-20 animate-fade-in">
                <p className="text-[11px] font-semibold text-gray-400 px-3 py-1 uppercase tracking-wider">
                  Select Document to Query
                </p>
                {readyDocuments.map((doc) => (
                  <button
                    key={doc._id}
                    onClick={() => {
                      onSelectDoc(doc);
                      setDocDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-blue-50 transition-colors ${
                      doc._id === activeDoc._id ? "bg-blue-50 font-semibold text-blue-700" : ""
                    }`}
                  >
                    <span className="truncate">{doc.title}</span>
                    {doc._id === activeDoc._id && (
                      <IoCheckmarkCircleOutline className="text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Messages Thread (Scrollable) */}
      <div className="max-h-[360px] min-h-[160px] overflow-y-auto p-5 space-y-4 bg-gray-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div className="flex items-start gap-2 max-w-[90%]">
              {msg.sender === "assistant" && (
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1 text-xs shadow-sm">
                  <IoSparkles />
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-none leading-relaxed"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {/* Citations block for assistant responses */}
                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                      <IoDocumentTextOutline className="w-3.5 h-3.5" /> Sources & Citations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.citations.map((c: Citation, idx: number) => {
                        const citationKey = `${msg.id}-cite-${idx}`;
                        const isExpanded = expandedCitationIdx === citationKey;
                        const location = c.pageNumber
                          ? `p. ${c.pageNumber}`
                          : c.sheetName
                          ? `${c.sheetName}`
                          : `Chunk ${c.sourceIndex}`;

                        return (
                          <div key={citationKey} className="flex flex-col">
                            <button
                              onClick={() => toggleCitation(citationKey)}
                              className={`text-[11px] px-2.5 py-0.5 rounded-md font-medium transition-colors border flex items-center gap-1.5 ${
                                isExpanded
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                              }`}
                            >
                              <span>[Source {c.sourceIndex}]</span>
                              <span>•</span>
                              <span>{location}</span>
                              <span className="text-emerald-600 font-semibold">{c.similarityScore}%</span>
                            </button>

                            {isExpanded && (
                              <div className="mt-1 p-2 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-700 max-w-sm shadow-inner">
                                <p className="italic text-gray-600">"{c.snippet}"</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
          </div>
        ))}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex items-start gap-2 max-w-[90%]">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1 text-xs">
              <IoSparkles />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-gray-400 ml-2">Searching ChromaDB vectors...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-5 py-2.5 bg-gray-50/80 border-t border-gray-100 flex items-center gap-2 overflow-x-auto text-xs text-gray-600">
        <span className="text-gray-400 flex items-center gap-1 font-medium whitespace-nowrap">
          <IoHelpCircleOutline /> Quick Prompts:
        </span>
        <button
          onClick={() => handleQuickQuestion("Summarize the main points of this document")}
          className="px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 text-gray-600 border border-gray-200 transition-colors whitespace-nowrap shadow-2xs"
        >
          Summarize main points
        </button>
        <button
          onClick={() => handleQuickQuestion("What are the key technical skills or specifications mentioned?")}
          className="px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 text-gray-600 border border-gray-200 transition-colors whitespace-nowrap shadow-2xs"
        >
          Key skills & specs
        </button>
        <button
          onClick={() => handleQuickQuestion("What are the important dates, numbers, or metrics?")}
          className="px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 text-gray-600 border border-gray-200 transition-colors whitespace-nowrap shadow-2xs"
        >
          Dates & numbers
        </button>
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
        <input
          type="text"
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          placeholder={`Ask anything about "${activeDoc.title}"...`}
          disabled={isLoading}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputQuestion.trim() || isLoading}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 flex-shrink-0"
        >
          <span>Ask</span>
          <IoSend className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
