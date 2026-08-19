# DevDocs AI — Stage 1: Core MERN Skeleton

This is Stage 1 of the AI-Powered Developer Knowledge & Documentation Platform.
No AI, auth, or cloud storage yet — just the foundation: Express API, MongoDB
models, local file upload, and a React dashboard. Later stages layer in auth,
S3, Redis/BullMQ, and the RAG pipeline on top of this without changing the
shape of what's here.

## What's included in Stage 1

- Express REST API with MongoDB (Mongoose) models for `User` and `Document`
- File upload to local disk via Multer (swapped for AWS S3 in Stage 3)
- React (Vite) dashboard: upload box (drag-and-drop or click), document list
  with status badges
- A temporary "fake auth" (auto-creates a local test user in localStorage) so
  you can test the flow before Stage 2 adds real Firebase/JWT auth

## Prerequisites

- Node.js 18+
- MongoDB running locally (`mongodb://127.0.0.1:27017`) or a MongoDB Atlas
  connection string

## Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# edit .env if your MongoDB URI is different
npm run dev
```

Backend runs on `http://localhost:5000`. Check `http://localhost:5000/api/health`
to confirm it's up.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

### 3. Try it

Open `http://localhost:5173` — it will silently create a test user on first
load, then you can drag-and-drop a `.pdf`, `.txt`, or `.md` file to upload it.
It'll appear in the document list with an "Uploaded" status badge.

## What's intentionally NOT here yet

- Real authentication (Stage 2: Firebase OAuth + JWT + refresh tokens + RBAC)
- AWS S3 storage (Stage 3: replaces local disk storage)
- Redis/BullMQ async processing (Stage 3: replaces synchronous upload handling)
- Any AI/RAG functionality — chunking, embeddings, vector search, chat (Stage 4-5)
- The "Chat" button on ready documents is a UI stub with no handler wired up yet

## Project structure

```
devdocs-ai/
  backend/
    src/
      config/db.js           MongoDB connection
      models/                User.js, Document.js
      controllers/            request handlers
      routes/                 route definitions
      middleware/upload.js    Multer config (local disk for now)
      server.js               app entry point
    .env.example
    package.json
  frontend/
    src/
      api/client.js           axios instance
      components/              UploadBox, DocumentCard
      pages/Dashboard.jsx      main screen
      App.jsx, main.jsx
    package.json
```

## Next: Stage 2

Firebase OAuth + JWT refresh tokens + RBAC middleware, replacing the temporary
`userId` field currently passed manually from the frontend.
