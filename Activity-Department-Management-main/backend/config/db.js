const mongoose = require("mongoose");

let isConnecting = false;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  if (isConnecting) return;
  isConnecting = true;

  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (uri) {
    try {
      console.log(`Connecting to MongoDB Atlas: ${uri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:***@")}`);
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
      console.log("MongoDB connected successfully!");
      isConnecting = false;
      return;
    } catch (err) {
      console.warn(`Could not connect to MongoDB (${err.message})`);
      isConnecting = false;
    }
  }

  // If in Vercel serverless environment, do not attempt MongoMemoryServer
  if (process.env.VERCEL) {
    console.log("Running in Vercel Serverless environment. Set MONGO_URI in Vercel project settings to connect to MongoDB Atlas.");
    isConnecting = false;
    return;
  }

  // Local fallback
  try {
    const localUri = "mongodb://127.0.0.1:27017/college_department_db";
    await mongoose.connect(localUri, { serverSelectionTimeoutMS: 2000 });
    console.log("Connected to local MongoDB");
    isConnecting = false;
    return;
  } catch {}

  try {
    const { MongoMemoryServer } = require("mongodb-memory-server");
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(mongod.getUri());
    console.log("Connected to In-Memory MongoDB!");
    isConnecting = false;
  } catch (memErr) {
    console.error("All MongoDB connection attempts failed:", memErr.message);
    isConnecting = false;
  }
}

module.exports = connectDB;
