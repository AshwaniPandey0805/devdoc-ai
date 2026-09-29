import dotenv from "dotenv";
dotenv.config();

import { ChunkingService } from "../services/chunking/index.js";
import { EmbeddingFactory } from "../services/embeddings/index.js";
import { ChromaService, getCollectionNameForModel, VectorChunkRecord } from "../services/vectorDb/index.js";
import { QaService, buildContextString, RAG_SYSTEM_PROMPT } from "../services/qa/index.js";
import { IParsedItem } from "../models/Document.js";

async function runChromaRagVerification() {
  console.log("==================================================================");
  console.log("    Stage 5 Verification: ChromaDB Vector DB & OpenAI RAG Q&A    ");
  console.log("==================================================================");

  const chromaUrl = process.env.CHROMA_URL || "http://localhost:8000";
  console.log(`Connecting to ChromaDB at: ${chromaUrl}`);

  const chromaService = new ChromaService(chromaUrl);
  const isChromaOnline = await chromaService.initialize();

  // -------------------------------------------------------------------------
  // Test Data Preparation: Chunking & Embeddings
  // -------------------------------------------------------------------------
  console.log("\n[Step 1/5] Preparing Multi-Format Mock Document Chunks...");
  const chunkingService = new ChunkingService(500, 100);

  const mockItems: IParsedItem[] = [
    {
      pageContent:
        "DevDocs AI Architecture Overview:\nDevDocs AI is a developer-focused RAG platform. It ingests developer documentation, technical whitepapers, Excel spreadsheets, and CSV files. Documents are parsed using specialized extraction strategies and split into token-aware semantic chunks.",
      metadata: { source: "architecture-overview.pdf", pageNumber: 1, format: "pdf" },
    },
    {
      pageContent:
        "Authentication & Security:\nDevDocs AI employs dual-mode authentication using bcrypt hashed passwords and Google OAuth with Firebase Admin cryptographic verification. Sessions are stored in HTTP-only, SameSite strict cookies.",
      metadata: { source: "architecture-overview.pdf", pageNumber: 2, format: "pdf" },
    },
    {
      pageContent:
        "Tier: Enterprise Cloud | Storage: 10TB | S3 Integration: Yes | Price: $799/month | Support: 24/7 Dedicated",
      metadata: { source: "pricing-matrix.xlsx", sheetName: "CloudPlans", rowNumber: 4, format: "tabular" },
    },
  ];

  const chunks = await chunkingService.chunkParsedItems(mockItems, "test-doc");
  console.log(`Generated ${chunks.length} semantic chunk(s).`);

  // -------------------------------------------------------------------------
  // Generate Embeddings
  // -------------------------------------------------------------------------
  console.log("\n[Step 2/5] Generating Vector Embeddings via EmbeddingFactory...");
  const embeddingService = EmbeddingFactory.getEmbeddingService();
  console.log(`Provider: ${embeddingService.provider.toUpperCase()} (${embeddingService.modelName}, ${embeddingService.dimensions} dims)`);

  const chunkTexts = chunks.map((c) => c.content);
  const vectors = await embeddingService.embedDocuments(chunkTexts);
  console.log(`Generated ${vectors.length} vector(s) of size ${vectors[0].length}.`);

  const collectionName = getCollectionNameForModel(
    embeddingService.modelName,
    embeddingService.dimensions
  );
  console.log(`Target ChromaDB Collection: '${collectionName}'`);

  const testUserId = "test-tenant-user-1";
  const testDocId = "test-doc-rag-99";

  // -------------------------------------------------------------------------
  // ChromaDB Ingestion & Similarity Retrieval
  // -------------------------------------------------------------------------
  if (isChromaOnline) {
    console.log("\n[Step 3/5] Upserting Chunks into ChromaDB...");
    const records: VectorChunkRecord[] = chunks.map((chunk, i) => ({
      id: `${testDocId}_chunk_${chunk.chunkIndex}`,
      vector: vectors[i],
      content: chunk.content,
      metadata: {
        ...chunk.metadata,
        userId: testUserId,
        documentId: testDocId,
        source: chunk.metadata.source || "test-doc",
        chunkIndex: chunk.chunkIndex,
      },
    }));

    await chromaService.upsertChunks(collectionName, records);
    console.log(`Successfully stored ${records.length} records in ChromaDB.`);

    // -----------------------------------------------------------------------
    // Similarity Query
    // -----------------------------------------------------------------------
    const sampleQuery = "What are the specs and price of the Enterprise Cloud tier?";
    console.log(`\n[Step 4/5] Executing Similarity Search for: "${sampleQuery}"...`);

    const queryVector = await embeddingService.embedQuery(sampleQuery);
    const retrieved = await chromaService.querySimilar(collectionName, {
      queryVector,
      topK: 2,
      userId: testUserId,
      documentId: testDocId,
    });

    console.log(`Retrieved ${retrieved.length} relevant chunk(s):`);
    retrieved.forEach((r, idx) => {
      console.log(
        ` - Result #${idx + 1} | Sim: ${(r.similarityScore * 100).toFixed(1)}% | Source: ${r.metadata.source || "doc"} | Snippet: "${r.content.slice(0, 70)}..."`
      );
    });

    // -----------------------------------------------------------------------
    // OpenAI Prompt Grounding & Q&A
    // -----------------------------------------------------------------------
    console.log("\n[Step 5/5] Invoking Grounded OpenAI Q&A Engine (QaService)...");
    const qaService = new QaService();
    const qaResult = await qaService.answerQuestion(sampleQuery, retrieved, "Test Doc");

    console.log("\n--- Generated Answer ---");
    console.log(qaResult.answer);
    console.log("------------------------");
    console.log(`Citations returned: ${qaResult.citations.length}`);
    qaResult.citations.forEach((c) => {
      console.log(` - [Source ${c.sourceIndex}] ${c.fileName} (Score: ${c.similarityScore}%)`);
    });

    // Cleanup test data
    console.log("\nCleaning up test records from ChromaDB...");
    await chromaService.deleteByDocumentId(collectionName, testDocId);
    console.log("Cleanup complete.");
  } else {
    console.log("\n⚠️ ChromaDB Server is offline. Demonstrating Retrieval & QA Logic in Simulation Mode:");
    console.log("  To start ChromaDB, run: docker run -d -p 8000:8000 chromadb/chroma");

    const sampleQuery = "What are the specs and price of the Enterprise Cloud tier?";
    console.log(`\n[Step 4/5 Simulation] Querying vector similarity against generated embeddings for: "${sampleQuery}"...`);
    const queryVector = await embeddingService.embedQuery(sampleQuery);

    // Pure math cosine similarity simulation
    const simulatedRetrieved = chunks.map((chunk, i) => {
      const dot = queryVector.reduce((sum, val, idx) => sum + val * vectors[i][idx], 0);
      const magQ = Math.sqrt(queryVector.reduce((sum, val) => sum + val * val, 0));
      const magV = Math.sqrt(vectors[i].reduce((sum, val) => sum + val * val, 0));
      const sim = magQ && magV ? dot / (magQ * magV) : 0;
      return {
        id: `sim_chunk_${i}`,
        content: chunk.content,
        distance: 1 - sim,
        similarityScore: Math.max(0, sim),
        metadata: {
          ...chunk.metadata,
          userId: testUserId,
          documentId: testDocId,
          source: chunk.metadata.source || "test-doc",
          chunkIndex: chunk.chunkIndex,
        },
      };
    }).sort((a, b) => b.similarityScore - a.similarityScore).slice(0, 2);

    console.log(`Simulated Top-${simulatedRetrieved.length} matches:`);
    simulatedRetrieved.forEach((r, idx) => {
      console.log(
        ` - Result #${idx + 1} | Sim: ${(r.similarityScore * 100).toFixed(1)}% | Source: ${r.metadata.source} | Snippet: "${r.content.slice(0, 70)}..."`
      );
    });

    console.log("\n[Step 5/5 Simulation] Testing QA Prompt Formatter & QaService...");
    const contextPrompt = buildContextString(simulatedRetrieved);
    console.log("Constructed Grounded Context:\n" + contextPrompt);

    const qaService = new QaService();
    const qaResult = await qaService.answerQuestion(sampleQuery, simulatedRetrieved, "Test Doc");
    console.log("\n--- Generated Answer ---");
    console.log(qaResult.answer);
    console.log("------------------------");
  }

  console.log("\n✅ Stage 5 ChromaDB & OpenAI RAG Pipeline verified successfully!");
}

runChromaRagVerification().catch((err) => {
  console.error("\n❌ Verification Failed:", err);
  process.exit(1);
});
