import fs from "fs/promises";
import path from "path";
import readline from "readline";
import { createReadStream } from "fs";
import { BaseParser, ParsedDocument, ParseResult, ParserOptions } from "./BaseParser.js";

export class JsonDataParser extends BaseParser {
  readonly name = "JsonDataParser";
  readonly supportedExtensions = [".json", ".jsonl"];
  readonly supportedMimeTypes = ["application/json", "application/x-ndjson"];

  /**
   * Recursively serializes arbitrary objects or arrays into human-readable text.
   */
  public static serializeToText(data: unknown, prefix = ""): string {
    if (data === null || data === undefined) return "";

    const lines: string[] = [];

    if (Array.isArray(data)) {
      if (data.every((item) => typeof item !== "object" || item === null)) {
        lines.push(`${prefix}: ${data.join(", ")}`);
      } else {
        data.forEach((item, index) => {
          const itemText = this.serializeToText(item, `${prefix}[${index + 1}]`);
          if (itemText) lines.push(itemText);
        });
      }
    } else if (typeof data === "object") {
      for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value === null || value === undefined) continue;

        if (typeof value === "object") {
          lines.push(this.serializeToText(value, fullKey));
        } else {
          lines.push(`${fullKey}: ${value}`);
        }
      }
    } else {
      lines.push(`${prefix}: ${data}`);
    }

    return lines.filter(Boolean).join("\n");
  }

  /**
   * Extracts top-level scalar primitives into metadata for hybrid search.
   */
  public static extractScalarMetadata(data: Record<string, unknown>): Record<string, unknown> {
    const metadata: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        metadata[key] = value;
      } else if (Array.isArray(value) && value.every((v) => typeof v !== "object")) {
        metadata[key] = value;
      }
    }

    return metadata;
  }

  public async parse(filePath: string, _options?: ParserOptions): Promise<ParseResult> {
    const source = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    const documents: ParsedDocument[] = [];
    let totalCharacters = 0;

    if (ext === ".jsonl") {
      // Stream JSON Lines
      const fileStream = createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      let lineIndex = 0;
      for await (const line of rl) {
        lineIndex++;
        const trimmed = line.trim();
        if (!trimmed) continue;

        try {
          const parsed = JSON.parse(trimmed);
          const pageContent = JsonDataParser.serializeToText(parsed);
          if (!pageContent) continue;

          totalCharacters += pageContent.length;
          documents.push({
            pageContent,
            metadata: {
              source,
              format: "jsonl",
              rowNumber: lineIndex,
              ...JsonDataParser.extractScalarMetadata(
                typeof parsed === "object" && parsed !== null ? parsed : {}
              ),
            },
          });
        } catch {
          // Ignore malformed individual lines or record warning
        }
      }
    } else {
      // Read standard JSON
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        parsed.forEach((item, index) => {
          const pageContent = JsonDataParser.serializeToText(item);
          if (pageContent) {
            totalCharacters += pageContent.length;
            documents.push({
              pageContent,
              metadata: {
                source,
                format: "json",
                rowNumber: index + 1,
                ...JsonDataParser.extractScalarMetadata(
                  typeof item === "object" && item !== null ? item : {}
                ),
              },
            });
          }
        });
      } else if (typeof parsed === "object" && parsed !== null) {
        // Complex nested JSON with collections
        let foundCollection = false;

        for (const [topLevelKey, topLevelValue] of Object.entries(parsed)) {
          if (Array.isArray(topLevelValue)) {
            foundCollection = true;
            topLevelValue.forEach((item, index) => {
              const text = JsonDataParser.serializeToText(item);
              if (text) {
                const pageContent = `Category: ${topLevelKey}\n${text}`;
                totalCharacters += pageContent.length;
                documents.push({
                  pageContent,
                  metadata: {
                    source,
                    format: "json",
                    collection: topLevelKey,
                    rowNumber: index + 1,
                    ...JsonDataParser.extractScalarMetadata(
                      typeof item === "object" && item !== null ? item : {}
                    ),
                  },
                });
              }
            });
          }
        }

        // Single flat or deep object
        if (!foundCollection) {
          const pageContent = JsonDataParser.serializeToText(parsed);
          totalCharacters += pageContent.length;
          documents.push({
            pageContent,
            metadata: {
              source,
              format: "json",
              ...JsonDataParser.extractScalarMetadata(parsed as Record<string, unknown>),
            },
          });
        }
      }
    }

    if (documents.length === 0) {
      throw new Error(`JSON file '${source}' contains no parseable data.`);
    }

    return {
      documents,
      stats: {
        totalUnits: documents.length,
        totalCharacters,
        detectedFormat: ext === ".jsonl" ? "jsonl" : "json",
      },
    };
  }
}
