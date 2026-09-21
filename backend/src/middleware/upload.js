import multer from "multer";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve("uploads");

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".txt",
  ".md",
  ".markdown",
  ".csv",
  ".xlsx",
  ".xls",
  ".docx",
  ".doc",
];

const ALLOWED_MIME_TYPES = [
  // PDF
  "application/pdf",
  // Plain text & Markdown
  "text/plain",
  "text/markdown",
  "text/x-markdown",
  // CSV
  "text/csv",
  "application/csv",
  "text/x-csv",
  "text/comma-separated-values",
  // Excel
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-excel", // .xls and sometimes .csv
  // Word
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/msword", // .doc
];

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

/**
 * Configure storage settings for incoming files.
 * Saves files locally and generates unique filenames to prevent collisions.
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),

  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

/**
 * Filter function to allow or reject files based on their extension and MIME type.
 * Supports PDF, TXT, MD, CSV, Excel (.xlsx, .xls), and Word (.docx, .doc).
 */
function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  const isExtAllowed = ALLOWED_EXTENSIONS.includes(ext);
  const isMimeAllowed = ALLOWED_MIME_TYPES.includes(file.mimetype);

  if (isExtAllowed && (isMimeAllowed || file.mimetype === "application/octet-stream")) {
    cb(null, true);
  } else {
    cb(
      new Error(
        `Unsupported file type (${file.mimetype || "unknown"}) or extension (${ext || "unknown"}). Allowed formats: PDF, TXT, MD, CSV, Excel (.xlsx, .xls), Word (.docx, .doc)`
      ),
      false
    );
  }
}

/**
 * Configured Multer middleware instance to export for routing.
 * - Restricts storage to our defined disk settings
 * - Filters out unsupported files
 * - Enforces a maximum file size limit of 20MB
 */
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 },
});

