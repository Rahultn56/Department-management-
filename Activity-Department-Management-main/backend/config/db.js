const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/college_department_db";
  
  try {
    console.log(`Connecting to MongoDB at: ${uri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:***@")}`);
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 3000 });
    console.log("MongoDB connected successfully!");
    return;
  } catch (err) {
    console.warn(`Could not connect to configured MongoDB (${err.message}).`);
    console.log("Starting In-Memory MongoDB Server fallback...");
  }

  try {
    const { MongoMemoryServer } = require("mongodb-memory-server");
    const mongod = await MongoMemoryServer.create();
    const memUri = mongod.getUri();
    await mongoose.connect(memUri);
    console.log(`In-Memory MongoDB started and connected successfully! URI: ${memUri}`);
  } catch (memErr) {
    console.error("All MongoDB connection attempts failed:", memErr.message);
  }
}

module.exports = connectDB;
