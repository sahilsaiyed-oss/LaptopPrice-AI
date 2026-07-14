# Laptop Price Prediction System

A Machine Learning based web application that predicts the estimated price of a used laptop based on its specifications.

This project is built using Python, Scikit-Learn, FastAPI and React.js.

---

## Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-Learn
- Joblib

### Backend
- FastAPI
- Uvicorn

### Frontend
- React.js
- Axios
- CSS

---

# Project Workflow

Dataset
↓

Data Cleaning

↓

Exploratory Data Analysis (EDA)

↓

Feature Engineering

↓

Data Preprocessing

↓

Train-Test Split

↓

Linear Regression Model

↓

Pipeline

↓

Model Saved (.pkl)

↓

FastAPI Backend

↓

React Frontend

↓

Laptop Price Prediction

---

# Project Structure

```
LaptopPrice-AI/

analysis/
    analytics.py

backend/
    main.py
    model_loader.py
    requirements.txt

dataset/
    data.csv
    cleaned_data.csv
    final_data.csv

frontend/
    src/
    public/

ml/
    data_cleaning.py
    eda.py
    feature_engineering.py
    preprocessing.py
    train_test_split.py
    model_training.py
    save_model.py
    predict.py

models/
    laptop_price_model.pkl

reports/
```

---

# Features

- Dataset Analysis
- Data Cleaning
- Exploratory Data Analysis
- Feature Engineering
- Data Preprocessing
- Train-Test Split
- Linear Regression Model
- Model Pipeline
- Model Saving
- FastAPI REST API
- React Frontend
- Real-time Laptop Price Prediction

---

# Machine Learning Pipeline

## Phase 1 - Dataset Analysis

The dataset is analyzed to understand:

- Number of rows
- Number of columns
- Data types
- Missing values
- Duplicate values
- Numerical features
- Categorical features

File:

```
analysis/analytics.py
```

---

## Phase 2 - Data Cleaning

Performed:

- Removed unnecessary columns
- Checked missing values
- Checked duplicate rows
- Saved cleaned dataset

File:

```
ml/data_cleaning.py
```

---

## Phase 3 - Exploratory Data Analysis

Generated graphs:

- Price Distribution
- Brand vs Price
- Warranty vs Price
- Correlation Heatmap

File:

```
ml/eda.py
```

---

## Phase 4 - Feature Engineering

Created additional features for better prediction.

Example:

```
total_pixels =
resolution_width × resolution_height
```

File:

```
ml/feature_engineering.py
```

---

## Phase 5 - Data Preprocessing

Performed:

- Feature Selection
- Standard Scaling
- One Hot Encoding
- Column Transformer

File:

```
ml/preprocessing.py
```

---

## Phase 6 - Train Test Split

Dataset split into:

- Training Data
- Testing Data

File:

```
ml/train_test_split.py
```

---

## Phase 7 - Model Training

Algorithm Used:

```
Linear Regression
```

Model trained using Scikit-Learn Pipeline.

File:

```
ml/model_training.py
```

---

## Phase 8 - Model Saving

The trained model is saved using Joblib.

Generated file:

```
models/laptop_price_model.pkl
```

---

## Phase 9 - Backend

FastAPI is used for serving the Machine Learning model.

Endpoints

GET /

Returns API status.

POST /predict

Accepts laptop specifications and returns predicted laptop price.

Files

```
backend/main.py

backend/model_loader.py
```

---

## Phase 10 - Frontend

React.js frontend allows the user to:

- Enter laptop specifications
- Send data to FastAPI
- Receive prediction
- Display estimated laptop price

---

# Sample Prediction

Input

Brand

HP

Processor

Intel Core i5

RAM

16 GB

Storage

512 GB SSD

GPU

Intel Iris Xe

Display

15.6 inch

Operating System

Windows 11

Warranty

1 Year

Specification Rating

82

Output

```
Estimated Laptop Price

₹85031
```

---

# How to Run the Project

## Clone Repository

```
git clone https://github.com/YOUR_USERNAME/LaptopPrice-AI.git

cd LaptopPrice-AI
```

---

## Install Python Libraries

```
pip install pandas numpy matplotlib scikit-learn fastapi uvicorn joblib
```

---

## Backend

```
cd backend

uvicorn main:app --reload
```

Runs on

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

## Frontend

Open another terminal

```
cd frontend

npm install

npm install axios

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# Model Used

- Linear Regression

---

# Future Improvements

- Random Forest Regression
- XGBoost
- Better UI
- Model Accuracy Improvement
- Docker Deployment
- Cloud Deployment
- User Authentication
- Database Integration

---

# Author

Sahil Saiyed

Computer Engineering Student

Python | Machine Learning | FastAPI | React.js