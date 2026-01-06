# PROJECT LIVE LINK - https://jan-2026-jobify-5.onrender.com

# Jobify – MERN Stack Job Tracking Application

Jobify is a full-stack MERN application that helps users manage and track job applications.  
Users can add jobs, update their status, view statistics, and manage their profile.

This project was built to practice real-world full-stack development using React, Node.js, Express, and MongoDB.

---

## Features

- User authentication (Register / Login)
- Role-based access (Admin & User)
- Create, update, delete job applications
- Track job status (Pending, Interview, Declined)
- Statistics dashboard with charts
- Profile update with avatar upload (Cloudinary)
- Responsive UI

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- React Query
- Recharts
- Styled Components

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- Cloudinary (Image Upload)

---

## Environment Variables

Create a `.env` file in the root folder and add:

```env
PORT=5100
MONGO_URL=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret

---

## Installation & Setup

# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both client and server
cd ..
npm run dev


