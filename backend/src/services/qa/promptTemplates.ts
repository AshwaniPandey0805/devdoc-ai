import { RetrievedChunk } from "../vectorDb/IVectorDbService.js";

export const RAG_SYSTEM_PROMPT = `You are DevDocs AI, an expert technical documentation assistant.
Your job is to answer user questions with extreme factual accuracy using ONLY the information provided in the Context below.

### STRICT INSTRUCTIONS:
1. ONLY use facts directly stated in the Context. Do NOT use outside knowledge, speculate, or extrapolate.
2. If the Context does not contain sufficient facts to answer the question, reply EXACTLY with:
   "I could not find information about this in the provided documents."
3. Every factual statement must cite its source using inline citation tags in the format [Source X], where X corresponds to the Source number in the context.
4. If multiple sources support a statement, combine citations like [Source 1, Source 3].
5. Format code blocks with proper syntax highlighting (\`\`\`language ... \`\`\`).
6. Present tabular or structured data as clean Markdown tables.
7. Be direct, professional, and concise.`;

/**
 * Builds an authoritative, tagged context block from retrieved chunks.
 */
export function buildContextString(chunks: RetrievedChunk[]): string {
  return chunks
    .map((chunk, index) => {
      const sourceNum = index + 1;
      let location = "";
      if (chunk.metadata.pageNumber) {
        location = ` | Page ${chunk.metadata.pageNumber}`;
      } else if (chunk.metadata.sheetName) {
        location = ` | Sheet: ${chunk.metadata.sheetName}, Row: ${chunk.metadata.rowNumber ?? "N/A"}`;
      } else if (chunk.metadata.rowNumber) {
        location = ` | Row ${chunk.metadata.rowNumber}`;
      }

      const sourceFile = chunk.metadata.source || "Document";
      return `--- [Source ${sourceNum} | File: ${sourceFile}${location}] ---\n${chunk.content}`;
    })
    .join("\n\n");
}
