import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import documentRoutes from "./routes/documentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// --- Core middleware ---
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// --- Health check ---
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", stage: 2 });
});

// --- Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/users", userRoutes);

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// --- Global error handler ---
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  const status = err.status || (err.name === "MulterError" ? 400 : 500);
  res.status(status).json({ error: err.message || "Something went wrong" });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
