# DevDocs AI — AI-Powered Developer Knowledge & Document QA Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-cyan.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-purple.svg)](https://vitejs.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg)](https://mongoosejs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)

DevDocs AI is a modern, full-stack, enterprise-ready platform designed to ingest developer documentation, technical whitepapers, contracts, spreadsheets, and structured datasets, allowing teams to organize knowledge and query it via Retrieval-Augmented Generation (RAG).

The platform features end-to-end **TypeScript** type safety across both frontend and backend, secure multi-tenant authentication, and user-isolated multi-format file management.

---

## 🚀 Current Project Status: Stage 3 & 3.5 (Parsing Layer & AWS S3 Storage Complete)

- [x] **End-to-End TypeScript Migration**: 100% strongly typed React (`.tsx`) and Express API (`.ts`).
- [x] **Dual-Mode Authentication**:
  - Secure Email/Password registration and login with `bcryptjs` hashing.
  - One-click Google OAuth via Firebase popup and backend cryptographic verification.
  - HTTP-only, secure, `SameSite` JWT session cookies (immune to client-side XSS token theft).
- [x] **Client State Persistence**: Redux Toolkit store with `redux-persist` preserving login sessions.
- [x] **Protected Navigation**: Declarative `PrivateRoute` and `PublicOnlyRoute` route guards.
- [x] **Multi-Format Document Parsing Layer (Stage 3)**:
  - Smart PDF sanitization (ligature decoding `ﬁ` $\rightarrow$ `fi`, hyphen reconnection `atten-\ntion`, blank divider filtering).
  - Word (`.docx`, `.doc`) structural Markdown conversion via `mammoth`.
  - Tabular Row-as-Document serializer for multi-sheet Excel (`.xlsx`, `.xls`) and CSV with metadata hoisting.
  - Schema-agnostic recursive JSON & streaming `.jsonl` ingestion.
  - Normalized plain text & markdown cleaner.
  - Automated status tracking (`uploaded` $\rightarrow$ `extracting` $\rightarrow$ `ready` or `failed`).
- [x] **AWS S3 Cloud Storage Integration (Stage 3.5)**:
  - Enterprise cloud file storage with modular AWS SDK v3.
  - Multi-tenant tenant-isolated key hierarchy: `users/{userId}/documents/{timestamp}-{filename}`.
  - Cryptographically signed presigned download/preview URLs via `@aws-sdk/s3-request-presigner`.
  - Zero-downtime local disk fallback (`uploads/`) when AWS credentials are not set.
  - Temporary scratch-file streaming for parsers with automated cleanup on completion.
- [ ] **Next (Stage 4)**: Token-aware chunking (`@langchain/textsplitters`) and dense vector embeddings generation.

---

## 🛠️ Tech Stack

### Frontend (`/frontend`)
* **Framework**: React 18, Vite 5, TypeScript (`.tsx`)
* **Styling**: TailwindCSS 3.4
* **State Management**: Redux Toolkit (`@reduxjs/toolkit`), `redux-persist`
* **Routing**: React Router DOM v6
* **Auth SDK**: Firebase Authentication Client SDK
* **Networking**: Axios (with credentials for cross-origin cookie exchange)
* **Feedback & Icons**: React Toastify, React Icons (`react-icons`)

### Backend (`/backend`)
* **Runtime**: Node.js 20+ (ES Modules)
* **Language & Execution**: TypeScript (`.ts`), `tsx watch` (zero-transpile instant hot-reloading)
* **API Framework**: Express 4 with typed routing and middleware
* **Database & ODM**: MongoDB with Mongoose 8
* **Security & Auth**: `jsonwebtoken`, `bcryptjs`, `cookie-parser`, `cors`
* **Cloud & Admin**: `firebase-admin` (OAuth token verification)
* **Cloud Storage**: AWS S3 (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`, `@aws-sdk/lib-storage`) with local disk fallback
* **Parsers & Ingestion**: `@langchain/core`, `@langchain/community`, `pdf-parse`, `mammoth`, `xlsx`, `d3-dsv`

---

## 📁 Project Structure

```
AI-Document-QA-Platform/
├── IMPLEMENTATION.md               # Detailed Data Parsing Architecture Plan
├── TYPESCRIPT_MIGRATION_PLAN.md    # TypeScript Migration Specs & Types Record
├── .gitignore                      # Git ignore rules (protects dist, uploads, env)
├── README.md                       # Platform documentation & setup guide
│
├── frontend/                       # React 18 + Vite + TypeScript Application
│   ├── src/
│   │   ├── api/
│   │   │   └── client.ts           # Axios instance with credentials
│   │   ├── components/
│   │   │   ├── AuthGuard.tsx       # PrivateRoute and PublicOnlyRoute
│   │   │   ├── DocumentCard.tsx    # Document card with dynamic status badges
│   │   │   ├── Header.tsx          # Nav header, user avatar, and signout
│   │   │   ├── OAuth.tsx           # Google OAuth button using Firebase
│   │   │   └── UploadBox.tsx       # Drag-and-drop & file picker (up to 20MB)
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx       # Main dashboard & user document list
│   │   │   ├── SignIn.tsx          # Email/Password sign-in screen
│   │   │   └── SignUp.tsx          # User registration screen
│   │   ├── redux/
│   │   │   ├── store.ts            # Redux store & typed hooks (useAppSelector)
│   │   │   └── user/
│   │   │       └── userSlice.ts    # User auth state slice
│   │   ├── types/
│   │   │   └── index.ts            # Central interfaces (User, DocumentItem, etc.)
│   │   ├── App.tsx                 # Root layout & route configuration
│   │   ├── firebase.ts             # Firebase client configuration
│   │   ├── index.css               # Tailwind CSS entry
│   │   ├── main.tsx                # React DOM root entry
│   │   └── vite-env.d.ts           # Vite client environment types
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── backend/                        # Node.js + Express + TypeScript API
    ├── src/
    │   ├── config/
    │   │   ├── db.ts               # MongoDB Mongoose connection
    │   │   └── firebaseAdmin.ts    # Firebase Admin SDK initialization
    │   ├── controllers/
    │   │   ├── authController.ts   # Signup, signin, Google OAuth, signout
    │   │   ├── documentController.ts# Upload, list, get, view URLs, delete
    │   │   └── userController.ts   # User management handlers
    │   ├── middleware/
    │   │   ├── auth.ts             # verifyToken JWT cookie validator
    │   │   └── upload.ts           # Multer storage, size limits & MIME filter
    │   ├── models/
    │   │   ├── Document.ts         # Document schema (IDocument)
    │   │   └── User.ts             # User schema (IUser)
    │   ├── routes/
    │   │   ├── authRoutes.ts       # /api/auth routes
    │   │   ├── documentRoutes.ts   # /api/documents routes (protected)
    │   │   └── userRoutes.ts       # /api/users routes
    │   ├── services/
    │   │   ├── documentProcessor.ts# Background extraction orchestrator
    │   │   ├── parsers/            # Multi-format document parser strategies
    │   │   │   ├── BaseParser.ts
    │   │   │   ├── ParserFactory.ts
    │   │   │   ├── SmartPdfParser.ts
    │   │   │   ├── MarkdownDocxParser.ts
    │   │   │   ├── TabularDataParser.ts
    │   │   │   ├── JsonDataParser.ts
    │   │   │   └── PlainTextParser.ts
    │   │   └── storage/            # Cloud & local storage abstraction
    │   │       ├── IStorageService.ts
    │   │       ├── S3StorageService.ts
    │   │       ├── LocalStorageService.ts
    │   │       └── StorageFactory.ts
    │   ├── types/
    │   │   └── express.d.ts        # Request augmentation (req.user)
    │   └── server.ts               # Express entry point
    ├── uploads/                    # Local storage directory (git-ignored)
    │   └── .gitkeep
    ├── .env.example
    ├── package.json
    └── tsconfig.json
```

---

## ⚡ Prerequisites

* **Node.js**: v18+ (Node.js 20+ recommended)
* **npm**: v9+
* **MongoDB**: A local instance running on `mongodb://127.0.0.1:27017` or a MongoDB Atlas connection string.
* *(Optional)* **Firebase Project**: For enabling Google OAuth sign-in.

---

## 🔧 Installation & Setup

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

Edit `backend/.env` with your values:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/devdocs-ai
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_super_secret_jwt_key_here

# Firebase Admin configuration (Optional for local dev fallback)
FIREBASE_PROJECT_ID=your-project-id
# Single-line JSON service account:
FIREBASE_SERVICE_ACCOUNT=

# AWS S3 Cloud Storage (Stage 3.5 - Optional; defaults to local uploads/ if unset)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_S3_BUCKET=devdocs-ai-storage
```

Start the backend in development mode:
```bash
npm run dev
```
Backend will start on **`http://localhost:5000`**. You can verify with `curl http://localhost:5000/api/health`.

---

### 2. Frontend Setup

In a new terminal window:

```bash
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
```

Edit `frontend/.env` with your Firebase Web configuration:
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
```

Start the frontend development server:
```bash
npm run dev
```
Frontend will be live at **`http://localhost:5173`**.

---

## 🧪 Build & Compilation Verification

To test that both applications compile with zero TypeScript errors:

```bash
# Type-check and build backend
cd backend
npm run build

# Type-check and build frontend
cd ../frontend
npm run build
```

---

## 📡 API Reference

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| `GET` | `/api/health` | No | Health check returning stage and server status |
| `POST` | `/api/auth/signup` | No | Register user (`name`, `email`, `password`) |
| `POST` | `/api/auth/signin` | No | Authenticate user and receive HTTP-only JWT cookie |
| `POST` | `/api/auth/google` | No | Verify Firebase Google ID token and issue JWT session |
| `POST` | `/api/auth/signout`| Yes | Clears session cookie |
| `POST` | `/api/documents/upload` | **Yes** | Upload document (`multipart/form-data`) up to 20MB to S3 or local disk |
| `GET` | `/api/documents` | **Yes** | Fetch all documents uploaded by authenticated user |
| `GET` | `/api/documents/:id` | **Yes** | Fetch single document metadata and extracted content (user-scoped) |
| `GET` | `/api/documents/:id/download-url` | **Yes** | Generate time-limited presigned S3 URL or local streaming link |
| `GET` | `/api/documents/:id/file` | **Yes** | Stream document binary directly with appropriate MIME headers |
| `DELETE`| `/api/documents/:id` | **Yes** | Delete document from MongoDB and physical storage (S3 or local) |

---

## 🗺️ Roadmap & Next Stages

* [x] **Stage 1: TypeScript Migration & Codebase Hardening** (100% Complete)
* [x] **Stage 2: Dual Authentication & User Isolation** (100% Complete)
* [x] **Stage 3: Multi-Format Data Parsing Layer** (100% Complete)
  * Strategy & Factory Pattern (`BaseParser`, `ParserFactory`).
  * `SmartPdfParser`: Ligature cleaning, hyphen repair, and page-level metadata.
  * `MarkdownDocxParser`: Preserving heading hierarchies (`#`, `##`) and tables.
  * `TabularDataParser`: Row-as-Document serialization with metadata hoisting for CSV/Excel.
  * `JsonDataParser`: Schema-agnostic nested entity flattener and streaming `.jsonl`.
* [x] **Stage 3.5: AWS S3 Cloud Storage Integration** (100% Complete)
  * Zero-downtime unified storage abstraction (`IStorageService`).
  * Modular AWS SDK v3 client with IAM least-privilege support.
  * Tenant-isolated object keys (`users/{userId}/documents/{timestamp}-{filename}`).
  * Cryptographically signed presigned URLs for secure client previews.
  * Automatic local disk fallback when AWS credentials are not configured.
* [ ] **Stage 4: Token-Aware Chunking & Dense Embeddings** (Next)
  * Recursive text splitting via `@langchain/textsplitters` with chunk overlap.
  * Embedding generation (OpenAI `text-embedding-3-small` / Gemini Embedding).
* [ ] **Stage 5: Vector Database & Interactive RAG Chat**
  * Vector Database indexing (Pinecone / Qdrant / Chroma).
  * Streaming conversational RAG interface with citation cards.
