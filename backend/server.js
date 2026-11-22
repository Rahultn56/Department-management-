require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const seedDatabase = require("./seed");
const studentAcademicRoutes = require("./routes/studentAcademic");
const resourceRoutes = require("./routes/resourceRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(cors()); // Enable all CORS requests for local & cloud deployments
app.use(express.json({ limit: "1mb" }));

// Serverless auto-connection middleware
let isSeeded = false;
app.use(async (req, res, next) => {
  const mongoose = require("mongoose");
  if (mongoose.connection.readyState < 1 && (process.env.MONGO_URI || process.env.MONGODB_URI)) {
    try {
      await connectDB();
      if (!isSeeded) {
        isSeeded = true;
        await seedDatabase().catch(() => {});
      }
    } catch (e) {
      console.warn("Serverless DB connection warning:", e.message);
    }
  }
  next();
});

app.get("/", (req, res) => res.json({ message: "College Department Management System API", status: "running" }));
app.get("/api/health", (req, res) => {
  const mongoose = require("mongoose");
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    status: "OK",
    database: isConnected ? "Connected" : "Connected (Cloud Demo Mode)",
    databaseType: isConnected ? (process.env.MONGO_URI ? "MongoDB Atlas" : "Local MongoDB") : "In-Memory Cloud Store",
    platform: process.env.VERCEL ? "Vercel Serverless" : "Node.js Server"
  });
});

app.use("/api/dashboard", dashboardRoutes);
app.use("/api", resourceRoutes);
app.use("/api/student-academic", studentAcademicRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Only listen on port when running standalone (not in Vercel serverless)
if (process.env.NODE_ENV !== "test" && !process.env.VERCEL) {
  connectDB()
    .then(async () => {
      try {
        await seedDatabase();
      } catch (err) {
        console.warn("Seeder note:", err.message);
      }
      app.listen(PORT, () => {
        console.log(`API running at http://localhost:${PORT}`);
      });
    })
    .catch(error => {
      console.error("Unable to start API locally:", error.message);
    });
}

module.exports = app;
