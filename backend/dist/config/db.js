import mongoose from "mongoose";
export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(`MongoDB connection error: ${err.message}`);
        process.exit(1);
    }
}
