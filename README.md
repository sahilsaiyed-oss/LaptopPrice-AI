# 💻 LaptopPrice AI — Used Laptop Price Prediction System

A full-stack, production-grade Machine Learning application that predicts the resale value of used laptops. This system combines a trained ML model with a secure FastAPI backend and a modern React AI Dashboard featuring authentication, analytics, and prediction history.

---

# 🚀 Overview

LaptopPrice AI transforms a traditional Machine Learning prediction script into a complete enterprise-style application.

The system uses a **Machine Learning regression pipeline** to analyze 14+ laptop specifications and estimate the expected resale price of a used laptop.

It includes:

- 🤖 Machine Learning Prediction Engine
- 🔐 JWT-based Authentication
- 👨‍💻 User Management System
- 📊 Interactive Analytics Dashboard
- 📈 Market Trend Visualization
- 📝 Prediction History Logs
- ⚡ Full-stack React + FastAPI Architecture

---

# ✨ Key Features

## 🤖 Machine Learning System

- Complete ML lifecycle from data analysis to deployment
- Automated preprocessing pipeline
- Feature engineering on laptop specifications
- Price prediction using trained Scikit-Learn model
- Serialized model deployment using Joblib

---

## 🔐 Authentication & Security

- Secure Signup and Login system
- Password hashing using Bcrypt
- JWT token-based authentication
- Protected backend API routes
- Protected frontend dashboard routes
- Axios interceptor for automatic token handling

---

## 📊 Admin Dashboard

- Total prediction count
- Average predicted laptop price
- Active user statistics
- Recent prediction activities
- AI-based analytics interface

---

## 📈 Data Visualization

- Interactive charts using Recharts
- Laptop price trend analysis
- Brand-wise market insights
- Prediction analytics

---

## 📝 Prediction Logs

- Stores previous prediction requests
- Displays recent user activity
- Tracks laptop specifications and predicted prices

---

## 🎨 Modern Responsive UI

- AI dashboard-inspired design
- Fixed sidebar navigation
- Responsive grid layout
- Clean professional interface
- Modular CSS architecture

---

# 🛠️ Tech Stack

## 🤖 Machine Learning & Data Science

| Technology | Purpose |
|------------|---------|
| Python | Core programming language |
| Pandas | Data processing |
| NumPy | Numerical computation |
| Scikit-Learn | ML model development |
| Matplotlib | Data visualization |
| Joblib | Model serialization |

---

# ⚙️ Backend Development

| Technology | Purpose |
|------------|---------|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| SQLAlchemy | Database ORM |
| SQLite | Database |
| Pydantic | Data validation |
| Python-Jose | JWT authentication |
| Passlib + Bcrypt | Password security |

---

# 🎨 Frontend Development

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| Vite | Development environment |
| React Router DOM | Client-side routing |
| Axios | API communication |
| Recharts | Data visualization |
| CSS3 | Modern UI styling |

---

# 📂 Project Structure

```text
LaptopPrice-AI/
│
├── analysis/                   
│   └── Dataset analysis scripts
│
├── backend/                    
│   ├── main.py                 
│   ├── database.py             
│   ├── auth_utils.py           
│   ├── model_loader.py         
│   └── schemas.py              
│
├── dataset/                    
│   ├── raw datasets
│   ├── cleaned datasets
│   └── final datasets
│
├── frontend/                   
│   └── src/
│       ├── components/
│       │   ├── Navbar
│       │   ├── Sidebar
│       │   └── ResultCard
│       │
│       ├── pages/
│       │   ├── Login
│       │   ├── Signup
│       │   ├── Dashboard
│       │   ├── Prediction
│       │   ├── Charts
│       │   └── Logs
│       │
│       ├── services/
│       │   └── Axios API configuration
│       │
│       └── styles/
│           └── CSS modules
│
├── ml/
│   └── Machine Learning development scripts
│
├── models/
│   └── Trained ML model files (.pkl)
│
└── reports/
    └── Project analysis reports
```

---

# 📈 Machine Learning Pipeline

## 1. Data Analysis

Performed detailed analysis of:

- Dataset structure
- Data types
- Missing values
- Duplicate records
- Feature relationships

---

## 2. Data Cleaning

Steps performed:

- Removed unnecessary columns
- Handled duplicate entries
- Fixed inconsistent values
- Prepared dataset for training

---

## 3. Exploratory Data Analysis (EDA)

Visual analysis including:

- Laptop price distribution
- Brand comparison
- RAM and storage impact
- Processor performance analysis

---

## 4. Feature Engineering

Created meaningful features:

- Extracted RAM values
- Extracted Storage capacity
- Converted processor information
- Generated numerical features

---

## 5. Model Training

Implemented:

- Data preprocessing pipeline
- Numerical feature scaling
- One-Hot Encoding for categorical features
- ColumnTransformer pipeline
- Regression model training

---

## 6. Model Deployment

- Exported trained model using Joblib
- Loaded model dynamically through FastAPI
- Integrated ML prediction API

---

# 🔒 Security Implementation

## Password Protection

User passwords are never stored directly.

Implementation:

```
Password
    ↓
Bcrypt Hashing
    ↓
Secure Database Storage
```

---

## JWT Authentication

Flow:

```
User Login
     ↓
Credential Verification
     ↓
JWT Token Generation
     ↓
Protected API Access
```

---

## Route Protection

Frontend uses:

- ProtectedRoute component
- Token validation
- Unauthorized access prevention

---

## Axios Interceptor

Automatically attaches:

```
Authorization: Bearer <token>
```

to secure API requests.

---

# 📊 Sample Prediction Result

| Feature | Value |
|---------|-------|
| Brand | Dell |
| RAM | 16 GB |
| Processor | Intel Core i7 |
| Storage | 1 TB SSD |
| Predicted Price | ₹94,221 |

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/sahilsaiyed-oss/LaptopPrice-AI.git

cd LaptopPrice-AI
```

---

# Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

---

# Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

# 🔗 API Documentation

FastAPI automatically provides interactive API documentation.

Swagger UI:

```
http://localhost:8000/docs
```

---

# 🚀 Future Improvements

- Deep Learning based price prediction
- Real-time laptop market price scraping
- Cloud deployment using AWS/Azure
- Advanced recommendation system
- More ML models comparison
- AI chatbot assistant for laptop buying advice

---

# 👨‍💻 Author

## Sahil Saiyed

Computer Engineering Student

GitHub:
https://github.com/sahilsaiyed-oss

LinkedIn:
https://linkedin.com

---

# 📝 License

This project is developed as part of an Internship Program.

Free to use for educational and learning purposes.