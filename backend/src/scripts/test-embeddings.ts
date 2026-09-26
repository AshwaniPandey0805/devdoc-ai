import dotenv from "dotenv";
dotenv.config();

import { ChunkingService } from "../services/chunking/index.js";
import { EmbeddingFactory, cosineSimilarity } from "../services/embeddings/index.js";
import { IParsedItem } from "../models/Document.js";

async function runEmbeddingsVerification() {
  console.log("==================================================================");
  console.log("       Stage 4 Verification: Chunking & Vector Embeddings        ");
  console.log("==================================================================");

  // -------------------------------------------------------------------------
  // Test 1: Chunking Service (Format-Aware Splitting)
  // -------------------------------------------------------------------------
  console.log("\n[Test 1/3] Testing ChunkingService...");
  const chunkingService = new ChunkingService(500, 100);

  const mockParsedItems: IParsedItem[] = [
    {
      pageContent:
        "Retrieval-Augmented Generation (RAG) is an architectural pattern that optimizes the output of Large Language Models. By referencing an authoritative knowledge base outside of its training data sources before generating a response, RAG prevents hallucinations and provides domain-specific factual grounding.\n\nVector databases like Pinecone, Qdrant, and Chroma index high-dimensional embeddings and perform sub-second nearest-neighbor vector similarity searches.",
      metadata: { source: "rag-overview.pdf", pageNumber: 1, format: "pdf" },
    },
    {
      pageContent:
        "Product: Enterprise Cloud Storage | Tier: Business | Storage: 5TB | Price: $499/mo | Region: us-east-1",
      metadata: { source: "pricing.xlsx", sheetName: "Plans", rowNumber: 2, format: "tabular" },
    },
  ];

  const chunks = await chunkingService.chunkParsedItems(mockParsedItems, "test-document");
  console.log(`Generated ${chunks.length} chunk(s):`);
  chunks.forEach((chunk, i) => {
    console.log(
      ` - Chunk #${i + 1} (${chunk.metadata.format || "prose"}, ${chunk.metadata.charCount} chars): "${chunk.content.slice(0, 60)}..."`
    );
  });

  if (chunks.length === 0) {
    throw new Error("ChunkingService failed to produce chunks");
  }

  // -------------------------------------------------------------------------
  // Test 2: Embedding Factory & Vector Generation
  // -------------------------------------------------------------------------
  console.log("\n[Test 2/3] Initializing Embedding Service via EmbeddingFactory...");
  const embeddingService = EmbeddingFactory.getEmbeddingService();
  console.log(`Provider: ${embeddingService.provider.toUpperCase()}`);
  console.log(`Model: ${embeddingService.modelName}`);
  console.log(`Dimensions: ${embeddingService.dimensions}`);

  const chunkTexts = chunks.map((c) => c.content);
  console.log(`\nGenerating embeddings for ${chunkTexts.length} document chunk(s)...`);
  const chunkVectors = await embeddingService.embedDocuments(chunkTexts);

  console.log(`Received ${chunkVectors.length} vector(s).`);
  console.log(`Vector Dimensions: ${chunkVectors[0].length}`);
  console.log(
    `Vector Preview (First 5 coords): [${chunkVectors[0].slice(0, 5).map((n) => n.toFixed(4)).join(", ")}, ...]`
  );

  if (chunkVectors.length !== chunkTexts.length || chunkVectors[0].length !== embeddingService.dimensions) {
    throw new Error(
      `Dimension mismatch: Expected ${chunkTexts.length} vectors of size ${embeddingService.dimensions}, got ${chunkVectors.length} x ${chunkVectors[0]?.length}`
    );
  }

  // -------------------------------------------------------------------------
  // Test 3: Query Embedding & Cosine Similarity Ranking
  // -------------------------------------------------------------------------
  const sampleQuery = "How does RAG prevent hallucinations in AI models?";
  console.log(`\n[Test 3/3] Generating Query Vector for: "${sampleQuery}"...`);
  const queryVector = await embeddingService.embedQuery(sampleQuery);
  console.log(`Query Vector Dimensions: ${queryVector.length}`);

  console.log("\nCalculating Cosine Similarities against generated chunks:");
  const ranked = chunks
    .map((chunk, idx) => ({
      chunkIndex: idx + 1,
      format: chunk.metadata.format || "prose",
      similarityScore: cosineSimilarity(queryVector, chunkVectors[idx]),
      preview: chunk.content.slice(0, 75) + "...",
    }))
    .sort((a, b) => b.similarityScore - a.similarityScore);

  console.table(
    ranked.map((r) => ({
      Rank: `#${r.chunkIndex}`,
      "Similarity Score": (r.similarityScore * 100).toFixed(2) + "%",
      Format: r.format,
      Snippet: r.preview,
    }))
  );

  console.log("\n✅ Stage 4 (Chunking & Embeddings) Verification completed successfully!");
}

runEmbeddingsVerification().catch((err) => {
  console.error("\n❌ Verification Failed:", err.message);
  process.exit(1);
});
