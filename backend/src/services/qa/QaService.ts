import { ChatOpenAI } from "@langchain/openai";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";
import { RetrievedChunk } from "../vectorDb/IVectorDbService.js";
import { RAG_SYSTEM_PROMPT, buildContextString } from "./promptTemplates.js";

export interface QaCitation {
  sourceIndex: number;
  fileName: string;
  pageNumber?: number;
  sheetName?: string;
  rowNumber?: number;
  similarityScore: number;
  snippet: string;
}

export interface QaResult {
  answer: string;
  citations: QaCitation[];
  tokenUsage?: {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
  };
}

import dotenv from "dotenv";

export class QaService {
  private llm: ChatOpenAI | null = null;
  public readonly modelName: string;

  constructor(modelName = process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini") {
    this.modelName = modelName;
    if (!process.env.OPENAI_API_KEY) {
      dotenv.config();
    }
    const apiKey = process.env.OPENAI_API_KEY?.trim();

    if (apiKey && apiKey !== "your_openai_api_key_here") {
      this.llm = new ChatOpenAI({
        model: modelName,
        temperature: 0.2,
        apiKey,
      });
    }
  }

  /**
   * Generates a grounded, citation-attributed answer using OpenAI LLM based on retrieved context.
   */
  public async answerQuestion(
    question: string,
    chunks: RetrievedChunk[],
    documentTitle?: string
  ): Promise<QaResult> {
    if (chunks.length === 0) {
      return {
        answer: "I could not find any relevant information in the uploaded documents to answer your question.",
        citations: [],
      };
    }

    const citations: QaCitation[] = chunks.map((chunk, idx) => ({
      sourceIndex: idx + 1,
      fileName: chunk.metadata.source || documentTitle || "Document",
      pageNumber: chunk.metadata.pageNumber,
      sheetName: chunk.metadata.sheetName,
      rowNumber: chunk.metadata.rowNumber,
      similarityScore: parseFloat((chunk.similarityScore * 100).toFixed(1)),
      snippet: chunk.content.slice(0, 160).trim() + "...",
    }));

    // If OpenAI API key is not configured, return retrieved context with guidance
    if (!this.llm) {
      const excerpts = chunks
        .map((c, i) => `**Source ${i + 1} (${citations[i].fileName}${citations[i].pageNumber ? `, p. ${citations[i].pageNumber}` : ""})**:\n> ${c.content}`)
        .join("\n\n");

      return {
        answer: `*Note: OPENAI_API_KEY is not configured on the server. Showing the top ${chunks.length} semantically relevant excerpt(s) retrieved from ChromaDB:*\n\n${excerpts}`,
        citations,
      };
    }

    const contextText = buildContextString(chunks);
    const userPrompt = `Context:\n${contextText}\n\nQuestion: ${question}\n\nHelpful Answer (with citations):`;

    const response = await this.llm.invoke([
      new SystemMessage(RAG_SYSTEM_PROMPT),
      new HumanMessage(userPrompt),
    ]);

    const answerText = typeof response.content === "string"
      ? response.content
      : JSON.stringify(response.content);

    const tokenUsage = (response as any).response_metadata?.tokenUsage;

    return {
      answer: answerText,
      citations,
      tokenUsage: tokenUsage ? {
        promptTokens: tokenUsage.promptTokens,
        completionTokens: tokenUsage.completionTokens,
        totalTokens: tokenUsage.totalTokens,
      } : undefined,
    };
  }
}
