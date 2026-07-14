from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from model_loader import load_laptop_model

# 1. Initialize FastAPI App
app = FastAPI()

# 2. Enable CORS (Allows React frontend to talk to this API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # React default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Load the model once at startup
model = load_laptop_model()

# 4. Define the Input Data Schema (What the API expects to receive)
class LaptopData(BaseModel):
    brand: str
    spec_rating: float
    processor: str
    CPU: str
    Ram: float
    Ram_type: str
    ROM: float
    ROM_type: str
    GPU: str
    display_size: float
    resolution_width: int
    resolution_height: int
    OS: str
    warranty: str

# 5. Health Check Route
@app.get("/")
def home():
    return {"message": "Laptop Price Prediction API Running"}

# 6. Prediction Route
@app.post("/predict")
def predict_price(data: LaptopData):
    # a. Convert input data to dictionary
    input_dict = data.dict()
    
    # b. Feature Engineering: Calculate total_pixels
    input_dict['total_pixels'] = input_dict['resolution_width'] * input_dict['resolution_height']
    
    # c. Create DataFrame (Model expects a DataFrame with specific column names)
    # Note: 'name' is excluded as per training phase
    df = pd.DataFrame([input_dict])
    
    # d. Perform Prediction
    prediction = model.predict(df)
    
    # e. Return the result
    return {
        "predicted_price": round(float(prediction[0]), 2)
    }

# To run this: uvicorn main:app --reload