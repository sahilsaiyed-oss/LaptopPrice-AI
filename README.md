💻 Used Laptop Price Prediction System (AI Dashboard)
A full-stack, production-grade Machine Learning application that predicts the resale value of used laptops. This system features a professional Admin Dashboard, JWT Authentication, and Real-time Analytics.
🚀 Overview
This project transition from a simple ML script to a complete Enterprise-level application. It uses a Linear Regression model to analyze 14+ laptop specifications and provide price estimates. The system is secured with JWT tokens and features a modern React-based Dashboard.
✨ Key Features
✅ Advanced ML Pipeline: From raw data cleaning to a serialized Scikit-Learn pipeline.
✅ Authentication System: Secure Signup and Login using FastAPI, SQLAlchemy, and Bcrypt hashing.
✅ JWT Security: Protected API endpoints and frontend routes using JSON Web Tokens and Axios Interceptors.
✅ Admin Dashboard: Real-time stats showing total predictions, average prices, and active users.
✅ Data Visualization: Interactive charts built with Recharts for market trend analysis.
✅ Prediction Logs: Persistent history of recent queries and results.
✅ Responsive UI: Modern "AI Dashboard" theme with a fixed sidebar and professional grid layout.
🛠️ Tech Stack
Machine Learning & Data Science
Language: Python
Libraries: Pandas, NumPy, Scikit-Learn, Matplotlib
Serialization: Joblib
Backend (API)
Framework: FastAPI
Server: Uvicorn
Database: SQLite (SQLAlchemy ORM)
Security: JWT (python-jose), Bcrypt (passlib)
Frontend (UI)
Framework: React.js (Vite)
Routing: React Router DOM
Charts: Recharts
API Client: Axios (with Interceptors)
Styling: Pure CSS (Modern Grid/Flexbox)
📂 Project Structure
code
Text
LaptopPrice-AI/
├── analysis/               # Initial Dataset Analysis scripts
├── backend/                # FastAPI Server
│   ├── main.py             # API Routes & Logic
│   ├── database.py         # SQLAlchemy Models & SQLite Config
│   ├── auth_utils.py       # JWT & Hashing helpers
│   ├── model_loader.py     # ML Model Loader
│   └── schemas.py          # Pydantic Data Models
├── dataset/                # Raw, Cleaned, and Final CSVs
├── frontend/               # React Dashboard
│   ├── src/
│   │   ├── components/     # Navbar, Sidebar, ResultCard
│   │   ├── pages/          # Login, Signup, Dashboard, Predict, Charts
│   │   ├── services/       # Axios API Interceptor
│   │   └── styles/         # Modular CSS files
├── ml/                     # ML Development Lifecycle scripts
├── models/                 # Trained .pkl files
└── reports/                # Project Analysis reports
📈 Machine Learning Pipeline
Analysis: Deep dive into data types, missing values, and correlations.
Cleaning: Dropping irrelevant features and handling duplicates.
EDA: Visualizing price distributions and brand impacts.
Feature Engineering: Extracting numerical values from strings (RAM/ROM) and creating total_pixels.
Preprocessing: Robust scaling and One-Hot encoding using ColumnTransformer.
Training: Linear Regression model optimized for laptop price trends.
⚙️ Installation & Setup
1. Clone the Project
code
Bash
git clone https://github.com/sahilsaiyed-oss/LaptopPrice-AI.git
cd LaptopPrice-AI
2. Backend Setup
code
Bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Backend runs on: http://127.0.0.1:8000
3. Frontend Setup
code
Bash
cd ../frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173
🔒 Security Implementation
Password Hashing: Uses bcrypt to salt and hash user passwords before saving to SQLite.
Route Guards: React ProtectedRoute component prevents access to the dashboard without a valid token.
Axios Interceptors: Automatically attaches the Authorization: Bearer <token> header to all ML and Dashboard requests.
📊 Sample Prediction Result
Feature	Value
Brand	Dell
RAM	16 GB
Processor	Intel Core i7
Storage	1 TB SSD
Prediction	₹94,221
👨‍💻 Author
Sahil Saiyed
Computer Engineering Student
GitHub | LinkedIn
📝 License
This project is part of an Internship program. Feel free to use it for educational purposes.