// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) { // 0 means disconnected
    try {
      // new connection if none exists
      await mongoose.connect(url);
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      throw new Error("MongoDB connection error");
    }
  }

  return mongoose.connection;
};

export default connectDB;