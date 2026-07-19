# 💻 LaptopPrice AI — Used Laptop Price Prediction System

A full-stack, production-grade Machine Learning application that predicts the resale value of used laptops. This system features a professional Admin Dashboard, JWT Authentication, and Real-time Analytics.

---

## 🚀 Overview
This project transitions from a simple ML script to a complete enterprise-level application. It uses a **Linear Regression model** to analyze 14+ laptop specifications and provide accurate price estimates. The system is secured with JWT tokens and features a modern React-based Dashboard.

---

## ✨ Key Features

*   **✅ Advanced ML Pipeline:** From raw data cleaning to a serialized Scikit-Learn pipeline.
*   **✅ Authentication System:** Secure Signup and Login using FastAPI, SQLAlchemy, and Bcrypt hashing.
*   **✅ JWT Security:** Protected API endpoints and frontend routes using JSON Web Tokens and Axios Interceptors.
*   **✅ Admin Dashboard:** Real-time stats showing total predictions, average prices, and active users.
*   **✅ Data Visualization:** Interactive charts built with Recharts for market trend analysis.
*   **✅ Prediction Logs:** Persistent history of recent queries and results.
*   **✅ Responsive UI:** Modern "AI Dashboard" theme with a fixed sidebar and professional grid layout.

---

## 🛠 Tech Stack

### Machine Learning & Data Science
*   **Language:** Python
*   **Libraries:** Pandas, NumPy, Scikit-Learn, Matplotlib
*   **Serialization:** Joblib

### Backend (API)
*   **Framework:** FastAPI Server
*   **Uvicorn Engine**
*   **Database:** SQLite (SQLAlchemy ORM)
*   **Security:** JWT (`python-jose`), Bcrypt (`passlib`)

### Frontend (UI)
*   **Framework:** React.js (Vite)
*   **Routing:** React Router DOM
*   **Charts:** Recharts
*   **API Client:** Axios (with Interceptors)
*   **Styling:** Pure CSS (Modern Grid/Flexbox)

---

## 📁 Project Structure

```text
LaptopPrice-AI/
├── analysis/                 # Initial Dataset Analysis scripts
├── backend/                  # FastAPI Server
│   ├── main.py               # API Routes & Logic
│   ├── database.py           # SQLAlchemy Models & SQLite Config
│   ├── auth_utils.py         # JWT & Hashing helpers
│   ├── model_loader.py       # ML Model Loader
│   └── schemas.py            # Pydantic Data Models
├── dataset/                  # Raw, Cleaned, and Final CSVs
├── frontend/                 # React Dashboard
│   └── src/
│       ├── components/       # Navbar, Sidebar, ResultCard
│       ├── pages/            # Login, Signup, Dashboard, Predict, Charts, Logs
│       ├── services/         # Axios API Interceptor
│       └── styles/           # Modular CSS files
├── ml/                       # ML Development Lifecycle scripts
├── models/                   # Trained .pkl files
└── reports/                  # Project Analysis reports