import path from "path";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { BaseParser, ParsedDocument, ParseResult, ParserOptions } from "./BaseParser.js";

export class SmartPdfParser extends BaseParser {
  readonly name = "SmartPdfParser";
  readonly supportedExtensions = [".pdf"];
  readonly supportedMimeTypes = ["application/pdf"];

  /**
   * Cleans extracted text to fix common PDF parsing artifacts.
   */
  public cleanText(text: string): string {
    let cleaned = text;

    // 1. Fix common typographic ligatures (critical for keyword & embedding matching)
    const ligatures: Record<string, string> = {
      "ﬁ": "fi",
      "ﬂ": "fl",
      "ﬀ": "ff",
      "ﬃ": "ffi",
      "ﬄ": "ffl",
      "ﬅ": "ft",
      "ﬆ": "st",
    };

    for (const [ligature, replacement] of Object.entries(ligatures)) {
      cleaned = cleaned.replaceAll(ligature, replacement);
    }

    // 2. Fix hyphenated line breaks (e.g., "atten-\ntion" -> "attention")
    cleaned = cleaned.replace(/(\w+)-\n(\w+)/g, "$1$2");

    // 3. Remove non-printable / control characters
    cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

    // 4. Normalize multiple consecutive spaces/tabs into a single space while keeping paragraph breaks
    cleaned = cleaned
      .split("\n")
      .map((line) => line.replace(/[ \t]+/g, " ").trim())
      .filter((line) => line.length > 0)
      .join("\n");

    return cleaned;
  }

  public async parse(filePath: string, options?: ParserOptions): Promise<ParseResult> {
    const minPageLength = options?.minPageLength ?? 40;
    const source = path.basename(filePath);

    // 1. Load PDF page-by-page
    const loader = new PDFLoader(filePath, { splitPages: true });
    const pages = await loader.load();

    const documents: ParsedDocument[] = [];
    let totalCharacters = 0;
    let skippedPages = 0;

    for (const [pageIndex, page] of pages.entries()) {
      const pageNumber = pageIndex + 1;
      const cleaned = this.cleanText(page.pageContent);

      // Skip empty or near-empty pages (blank divider sheets)
      if (cleaned.trim().length < minPageLength) {
        skippedPages++;
        continue;
      }

      totalCharacters += cleaned.length;

      documents.push({
        pageContent: cleaned,
        metadata: {
          source,
          format: "pdf",
          pageNumber,
          totalPages: pages.length,
          charCount: cleaned.length,
        },
      });
    }

    // Check if no extractable text was found (scanned image PDF)
    if (documents.length === 0 && pages.length > 0) {
      throw new Error(
        "Scanned image or empty PDF detected. The document contains no extractable text and requires OCR."
      );
    }

    return {
      documents,
      stats: {
        totalUnits: documents.length,
        totalCharacters,
        detectedFormat: "pdf",
        warnings: skippedPages > 0 ? [`Filtered ${skippedPages} blank or insignificant page(s)`] : undefined,
      },
    };
  }
}
