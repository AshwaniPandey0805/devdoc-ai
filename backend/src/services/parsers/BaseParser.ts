export interface DocumentMetadata extends Record<string, any> {
  source: string;                     // Original file name
  format: string;                     // Parser identifier (e.g. "pdf", "docx-markdown")
  pageNumber?: number;                // Page index (for multi-page documents like PDF)
  totalPages?: number;                // Total pages in document
  sheetName?: string;                 // Worksheet name (for Excel workbooks)
  rowNumber?: number;                 // Row index (for CSV / Excel)
  charCount?: number;                 // Character count
}

export interface ParsedDocument {
  pageContent: string;                // The cleaned, normalized text
  metadata: DocumentMetadata;         // Enriched metadata for filtering & citations
}

export interface ParseResult {
  documents: ParsedDocument[];
  stats: {
    totalUnits: number;               // Total pages, rows, or entities extracted
    totalCharacters: number;          // Total character count
    detectedFormat: string;
    warnings?: string[];
  };
}

export interface ParserOptions {
  minPageLength?: number;             // Minimum characters to consider a page valid
  mode?: "rows" | "tables";           // For tabular data
  sheets?: string[];                  // Specific Excel sheets to extract
}

/**
 * Abstract Base Parser
 * Every format-specific parser must extend this class and implement parse().
 */
export abstract class BaseParser {
  abstract readonly name: string;
  abstract readonly supportedExtensions: string[];
  abstract readonly supportedMimeTypes: string[];

  /**
   * Parses a file from disk into standardized ParsedDocument items.
   * @param filePath - Absolute path to the uploaded file on disk
   * @param options - Format-specific parser configuration
   */
  abstract parse(filePath: string, options?: ParserOptions): Promise<ParseResult>;
}
