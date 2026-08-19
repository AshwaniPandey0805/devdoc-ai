import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    // firebaseUid, passwordHash, role, refreshTokens added in Stage 2 (Auth)
    role: { type: String, enum: ["admin", "member"], default: "member" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
