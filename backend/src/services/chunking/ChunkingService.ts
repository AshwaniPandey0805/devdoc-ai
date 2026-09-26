import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { IParsedItem } from "../../models/Document.js";

export interface DocumentChunkItem {
  content: string;
  chunkIndex: number;
  metadata: {
    source: string;
    pageNumber?: number;
    sheetName?: string;
    rowNumber?: number;
    charCount: number;
    [key: string]: any;
  };
}

export interface ChunkingOptions {
  chunkSize?: number;
  chunkOverlap?: number;
}

export class ChunkingService {
  private splitter: RecursiveCharacterTextSplitter;
  public readonly chunkSize: number;
  public readonly chunkOverlap: number;

  constructor(chunkSize = 800, chunkOverlap = 150) {
    this.chunkSize = chunkSize;
    this.chunkOverlap = chunkOverlap;
    this.splitter = new RecursiveCharacterTextSplitter({
      chunkSize,
      chunkOverlap,
      separators: ["\n\n", "\n", " ", ""],
    });
  }

  /**
   * Chunks parsed document items into bounded, semantically coherent segments:
   * - Tabular data rows (CSV/Excel) that fit within chunkSize are preserved as standalone units.
   * - Prose (PDF, Word, TXT, JSON) is split along recursive paragraph/sentence boundaries.
   * - Preserves metadata (page number, sheet name, row number, etc.) on each chunk.
   */
  public async chunkParsedItems(
    items: IParsedItem[],
    sourceName: string
  ): Promise<DocumentChunkItem[]> {
    const chunks: DocumentChunkItem[] = [];
    let globalIndex = 0;

    for (const item of items) {
      if (!item.pageContent || !item.pageContent.trim()) {
        continue;
      }

      // If the parsed item is a structured tabular row under chunkSize, keep it intact
      if (item.metadata?.format === "tabular" && item.pageContent.length <= this.chunkSize) {
        chunks.push({
          content: item.pageContent.trim(),
          chunkIndex: globalIndex++,
          metadata: {
            source: sourceName,
            ...item.metadata,
            charCount: item.pageContent.trim().length,
          },
        });
        continue;
      }

      // Prose documents (PDF, Word, TXT, JSON) split recursively
      const splitTexts = await this.splitter.splitText(item.pageContent);

      for (const text of splitTexts) {
        const cleanedText = text.trim();
        if (!cleanedText) continue;

        chunks.push({
          content: cleanedText,
          chunkIndex: globalIndex++,
          metadata: {
            source: sourceName,
            ...item.metadata,
            charCount: cleanedText.length,
          },
        });
      }
    }

    return chunks;
  }
}
