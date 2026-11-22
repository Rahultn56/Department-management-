# 🎓 College Department Management System (MERN Stack)

A comprehensive, full-stack Department Management web application built with **MongoDB**, **Express.js**, **React (Vite)**, and **Node.js**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRahultn56%2FDepartment-management-&env=MONGO_URI&envDescription=MongoDB%20Atlas%20URI%20(optional)&project-name=department-management-system)

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

## ⚡ 1-Click Deploy on Vercel
1. Click the **Deploy with Vercel** button above (or visit [vercel.com/new](https://vercel.com/new) and import `Rahultn56/Department-management-`).
2. Under **Environment Variables**, optionally add:
   - **`MONGO_URI`**: Your MongoDB Atlas connection string *(if left blank, the app runs in demo cloud mode)*.
3. Click **Deploy**.
4. Both your Vite React Frontend and Express Serverless API will deploy together on the same domain with **zero CORS issues**!

---

## 🚀 Quick Start Locally

### Step 1: Start Backend Server
```bash
cd backend
npm install
npm run dev
```
* The backend API runs at: **`http://localhost:5000`**
* Health check: **`http://localhost:5000/api/health`**

### Step 2: Start Frontend Application
In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
* Open **`http://localhost:5173`** in your browser.
