# 🎓 College Department Management System (MERN Stack)

A comprehensive, full-stack Department Management web application built with **MongoDB**, **Express.js**, **React (Vite)**, and **Node.js**.

Imported from [sujanit/department_manage](https://github.com/sujanit/department_manage) and enhanced for **Rahul's GitHub** with automated database seeding, in-memory MongoDB auto-fallback, and clean full-stack architecture.

---

## 🌟 Key Features & Modules
1. **Interactive Dashboard**: Real-time counter metrics for all 10 academic department modules with recent activity feeds.
2. **Departments Management**: Create, view, update, and manage academic departments and programs.
3. **Student Directory & Profiles**: Complete student records with academic performance, GPA, and skill assessments.
4. **Faculty & Staff Management**: Faculty directory with designations, qualifications, and department affiliations.
5. **Course Catalog**: Course codes, credits, semesters, and curriculum details.
6. **Staff Course Allocation**: Map faculty members to specific academic courses.
7. **Student Course Enrollment**: Track student course registrations and semester loads.
8. **Attendance Tracking System**: Subject-wise and daily attendance management with percentage calculations.
9. **Assessments & Examination Marks**: Record internal assessments, exam marks, and grade distributions.
10. **Notice Board & Circulars**: Broadcast department announcements, notices, and schedules.

---

## 📂 Project Architecture

```
Department-management-/
├── backend/                  # Node.js & Express.js REST API
│   ├── config/               # MongoDB connection (with in-memory auto-fallback)
│   ├── controllers/          # Resource CRUD controllers
│   ├── middleware/           # Error handling & request validation
│   ├── models/               # 12 Mongoose Schemas (Student, Staff, Course, Attendance, etc.)
│   ├── routes/               # API routes (/api/dashboard, /api/student-academic, etc.)
│   ├── seed.js               # Automatic database seeder with realistic sample data
│   ├── server.js             # Express server entry point (Port 5000)
│   └── package.json
│
├── frontend/                 # React 18 + Vite Single Page Application
│   ├── src/
│   │   ├── components/       # Sidebar, Topbar, Navigation
│   │   ├── pages/            # Dashboard, DepartmentDetail, ModulePage
│   │   ├── config/           # Module route and navigation config
│   │   ├── services/         # Axios API service
│   │   ├── styles.css        # Responsive modern admin UI
│   │   └── App.jsx           # Main routing & state layout
│   └── package.json
│
└── Activity-Department-Management-main/  # Preserved original folder structure
```

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local service or MongoDB Atlas cloud URI; automatically falls back to in-memory MongoDB if not running locally)

---

### Step 1: Start Backend Server

```bash
cd backend
npm install
npm run dev
```
* The backend server starts at **`http://localhost:5000`**.
* Automatically seeds initial sample data on first run.
* Health check: **`http://localhost:5000/api/health`**

---

### Step 2: Start Frontend Application

Open a second terminal window:

```bash
cd frontend
npm install
npm run dev
```
* Vite will launch the application at **`http://localhost:5173`**.
* Open your browser and navigate to `http://localhost:5173` to use the Department Management System!

---

## 🗄️ MongoDB Configuration

In `backend/.env` (or create one using `.env.example`):
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/college_department_db
CLIENT_URL=http://localhost:5173
```

> **Cloud MongoDB Atlas:** Replace `MONGO_URI` with your cloud connection string:
> `MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/college_department_db?retryWrites=true&w=majority`
