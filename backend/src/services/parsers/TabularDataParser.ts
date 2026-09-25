import path from "path";
import XLSX from "xlsx";
import { BaseParser, ParsedDocument, ParseResult, ParserOptions } from "./BaseParser.js";

export class TabularDataParser extends BaseParser {
  readonly name = "TabularDataParser";
  readonly supportedExtensions = [".csv", ".xlsx", ".xls"];
  readonly supportedMimeTypes = [
    "text/csv",
    "application/csv",
    "text/x-csv",
    "text/comma-separated-values",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ];

  public async parse(filePath: string, options?: ParserOptions): Promise<ParseResult> {
    const source = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    // 1. Read workbook from disk using SheetJS
    const workbook = XLSX.readFile(filePath);
    const targetSheets = options?.sheets ?? workbook.SheetNames;

    if (!targetSheets || targetSheets.length === 0) {
      throw new Error(`Spreadsheet '${source}' contains no readable sheets.`);
    }

    const documents: ParsedDocument[] = [];
    let totalCharacters = 0;

    // 2. Iterate through each worksheet
    for (const sheetName of targetSheets) {
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) continue;

      // Extract rows as an array of JSON objects
      const rows: Record<string, any>[] = XLSX.utils.sheet_to_json(sheet, {
        defval: "",
        raw: false,
      });

      if (rows.length === 0) continue;

      // Mode A: Row-as-Document (Best practice for tabular RAG)
      for (const [rowIndex, row] of rows.entries()) {
        const rowNumber = rowIndex + 2; // 1-based index accounting for header row

        // Clean key-value pairs for pageContent
        const rowLines: string[] = [];
        const scalarMetadata: Record<string, any> = {};

        for (const [col, val] of Object.entries(row)) {
          if (val !== null && val !== undefined && val !== "") {
            rowLines.push(`${col}: ${val}`);

            // Hoist clean scalar fields into metadata for hybrid search
            if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
              scalarMetadata[col] = val;
            }
          }
        }

        const pageContent = rowLines.join("\n");
        if (!pageContent.trim()) continue;

        totalCharacters += pageContent.length;

        documents.push({
          pageContent,
          metadata: {
            source,
            format: ext === ".csv" ? "csv" : "excel",
            sheetName,
            rowNumber,
            ...scalarMetadata,
          },
        });
      }
    }

    if (documents.length === 0) {
      throw new Error(`Spreadsheet '${source}' contains no data rows.`);
    }

    return {
      documents,
      stats: {
        totalUnits: documents.length,
        totalCharacters,
        detectedFormat: ext === ".csv" ? "csv" : "excel",
      },
    };
  }
}
