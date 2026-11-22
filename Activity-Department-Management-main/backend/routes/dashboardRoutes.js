const express = require("express");
const mongoose = require("mongoose");
const resources = require("../config/resources");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const counts = {};
      await Promise.all(Object.entries(resources).map(async ([key, value]) => {
        counts[key] = await value.model.countDocuments();
      }));
      const recent = await Promise.all(
        ["students", "staff", "courses", "notices"].map(async key => ({
          key,
          items: await resources[key].model.find().sort({ createdAt: -1 }).limit(4).lean()
        }))
      );
      return res.json({ counts, recent, totalRecords: Object.values(counts).reduce((a, b) => a + b, 0) });
    }

    // Serverless Fallback Demo Counts if MongoDB Atlas is not yet connected
    const fallbackCounts = {
      departments: 4,
      students: 24,
      staff: 12,
      courses: 16,
      courseAllocations: 12,
      enrollments: 48,
      attendance: 120,
      subjectAttendance: 96,
      assessments: 32,
      studentSkills: 28,
      academicProfiles: 24,
      notices: 6
    };
    res.json({
      counts: fallbackCounts,
      recent: [
        { key: "students", items: [{ name: "Rahul Sharma", rollNumber: "24IT089", department: "Information Technology" }] },
        { key: "staff", items: [{ name: "Dr. K. Senthil", designation: "Professor & HOD", department: "Information Technology" }] },
        { key: "courses", items: [{ courseName: "Full Stack Web Development", courseCode: "IT301", credits: 4 }] },
        { key: "notices", items: [{ title: "Department Assessment Schedule", date: "2026-11-25" }] }
      ],
      totalRecords: Object.values(fallbackCounts).reduce((a, b) => a + b, 0)
    });
  } catch (error) { next(error); }
});

module.exports = router;
