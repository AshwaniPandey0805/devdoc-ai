import path from "path";
import mammoth from "mammoth";
import { BaseParser, ParsedDocument, ParseResult, ParserOptions } from "./BaseParser.js";

export class MarkdownDocxParser extends BaseParser {
  readonly name = "MarkdownDocxParser";
  readonly supportedExtensions = [".docx", ".doc"];
  readonly supportedMimeTypes = [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
  ];

  public async parse(filePath: string, _options?: ParserOptions): Promise<ParseResult> {
    const source = path.basename(filePath);
    let markdownText = "";
    let warnings: string[] = [];
    let detectedFormat = "docx-markdown";

    try {
      // 1. Convert Word document to Markdown to preserve heading hierarchy (#, ##) and tables
      const result = await (mammoth as any).convertToMarkdown({ path: filePath });
      markdownText = result.value.trim();

      if (result.messages && result.messages.length > 0) {
        warnings = result.messages.map((m) => m.message);
      }
    } catch (conversionError: any) {
      // 2. Fallback to raw text extraction if markdown conversion fails
      console.warn(
        `[MarkdownDocxParser] Markdown conversion failed for ${source}, falling back to raw text extraction:`,
        conversionError.message
      );
      const rawResult = await mammoth.extractRawText({ path: filePath });
      markdownText = rawResult.value.trim();
      detectedFormat = "docx-raw";
    }

    if (!markdownText) {
      throw new Error(`Word document '${source}' appears to be empty or contains no readable text.`);
    }

    const doc: ParsedDocument = {
      pageContent: markdownText,
      metadata: {
        source,
        format: detectedFormat,
        charCount: markdownText.length,
      },
    };

    return {
      documents: [doc],
      stats: {
        totalUnits: 1,
        totalCharacters: markdownText.length,
        detectedFormat,
        warnings: warnings.length > 0 ? warnings : undefined,
      },
    };
  }
}
