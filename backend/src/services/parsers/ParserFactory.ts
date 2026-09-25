import path from "path";
import { BaseParser } from "./BaseParser.js";

export class ParserFactory {
  private static parsers: Map<string, BaseParser> = new Map();

  /**
   * Registers a parser instance for its supported extensions and MIME types.
   */
  public static register(parser: BaseParser): void {
    for (const ext of parser.supportedExtensions) {
      this.parsers.set(ext.toLowerCase(), parser);
    }
    for (const mime of parser.supportedMimeTypes) {
      this.parsers.set(mime.toLowerCase(), parser);
    }
  }

  /**
   * Resolves the appropriate parser based on file path and MIME type.
   */
  public static getParser(filePath: string, mimeType?: string): BaseParser {
    const ext = path.extname(filePath).toLowerCase();

    // 1. Resolve by file extension
    if (this.parsers.has(ext)) {
      return this.parsers.get(ext)!;
    }

    // 2. Resolve by MIME type
    if (mimeType && this.parsers.has(mimeType.toLowerCase())) {
      return this.parsers.get(mimeType.toLowerCase())!;
    }

    throw new Error(
      `No parser registered for file extension '${ext}' (MIME: '${mimeType || "unknown"}')`
    );
  }

  /**
   * Check if a parser exists for a given file path or MIME type.
   */
  public static supports(filePath: string, mimeType?: string): boolean {
    const ext = path.extname(filePath).toLowerCase();
    return this.parsers.has(ext) || (!!mimeType && this.parsers.has(mimeType.toLowerCase()));
  }
}
