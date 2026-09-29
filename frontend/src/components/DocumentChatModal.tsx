import React, { useState, useRef, useEffect } from "react";
import { DocumentItem, ChatMessage, ChatResponse, Citation } from "../types";
import api from "../api/client";
import {
  IoClose,
  IoSend,
  IoSparkles,
  IoDocumentTextOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

interface DocumentChatModalProps {
  doc: DocumentItem;
  onClose: () => void;
}

export default function DocumentChatModal({
  doc,
  onClose,
}: DocumentChatModalProps): React.ReactElement {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "assistant",
      text: `Hello! I have indexed **${doc.title}** into ChromaDB. Ask me any question about this document, its tables, or its contents!`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCitationIdx, setExpandedCitationIdx] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputQuestion.trim();
    if (!query || isLoading) return;

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
      const res = await api.post<ChatResponse>(`/documents/${doc._id}/chat`, {
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
        text: `Sorry, an error occurred while searching ChromaDB: ${
          err.response?.data?.error || err.message || "Failed to retrieve answer"
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <IoSparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-base">{doc.title}</h3>
                <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1">
                  <IoCheckmarkCircleOutline className="w-3 h-3" /> Indexed in ChromaDB
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate max-w-md">{doc.originalFileName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            title="Close Chat"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gray-50/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div className="flex items-start gap-2 max-w-[85%]">
                {msg.sender === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1 text-xs">
                    <IoSparkles />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
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
                        <IoDocumentTextOutline className="w-3.5 h-3.5" /> Retrieved Sources & Citations
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
                                className={`text-[11px] px-2.5 py-1 rounded-md font-medium transition-colors border flex items-center gap-1.5 ${
                                  isExpanded
                                    ? "bg-blue-50 text-blue-700 border-blue-200"
                                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                                }`}
                              >
                                <span>[Source {c.sourceIndex}]</span>
                                <span className="text-gray-400">•</span>
                                <span>{location}</span>
                                <span className="text-emerald-600 font-semibold">{c.similarityScore}%</span>
                              </button>

                              {isExpanded && (
                                <div className="mt-1.5 p-2.5 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-700 max-w-md shadow-inner animate-fade-in">
                                  <div className="font-semibold text-gray-900 mb-1 flex items-center justify-between">
                                    <span>{c.fileName}</span>
                                    <span className="text-[10px] text-gray-500 font-normal">
                                      Match: {c.similarityScore}%
                                    </span>
                                  </div>
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

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center mt-1 text-xs">
                <IoSparkles />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-gray-400 ml-2">Searching ChromaDB vectors...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-6 py-2 bg-white border-t border-gray-100 flex items-center gap-2 overflow-x-auto text-xs text-gray-600">
          <span className="text-gray-400 flex items-center gap-1 font-medium">
            <IoSparkles className="text-blue-500" /> Suggestions:
          </span>
          <button
            onClick={() => handleQuickQuestion("Summarize the key points in this document")}
            className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors whitespace-nowrap"
          >
            Summarize key points
          </button>
          <button
            onClick={() => handleQuickQuestion("What are the main numbers, dates, or specifications?")}
            className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors whitespace-nowrap"
          >
            Numbers & Dates
          </button>
          <button
            onClick={() => handleQuickQuestion("Extract any actionable recommendations or next steps")}
            className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors whitespace-nowrap"
          >
            Action items
          </button>
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            placeholder="Ask a question about this document..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputQuestion.trim() || isLoading}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl text-sm font-medium transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
          >
            <span>Send</span>
            <IoSend className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
