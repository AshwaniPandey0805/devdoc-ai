import fs from "fs/promises";
import path from "path";
import { BaseParser, ParsedDocument, ParseResult, ParserOptions } from "./BaseParser.js";

export class PlainTextParser extends BaseParser {
  readonly name = "PlainTextParser";
  readonly supportedExtensions = [".txt", ".md", ".markdown"];
  readonly supportedMimeTypes = ["text/plain", "text/markdown", "text/x-markdown"];

  public async parse(filePath: string, _options?: ParserOptions): Promise<ParseResult> {
    const rawContent = await fs.readFile(filePath, "utf-8");
    const source = path.basename(filePath);

    // Normalize carriage returns and non-printable control characters
    const cleanedContent = rawContent
      .replace(/\r\n/g, "\n")
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
      .trim();

    const doc: ParsedDocument = {
      pageContent: cleanedContent,
      metadata: {
        source,
        format: path.extname(filePath).toLowerCase() === ".txt" ? "txt" : "markdown",
        charCount: cleanedContent.length,
      },
    };

    return {
      documents: [doc],
      stats: {
        totalUnits: 1,
        totalCharacters: cleanedContent.length,
        detectedFormat: doc.metadata.format,
      },
    };
  }
}
