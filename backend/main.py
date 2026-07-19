from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware
from jose import jwt, JWTError
from sqlalchemy.orm import Session
import database, auth_utils, schemas
import pandas as pd
from model_loader import load_laptop_model
from fastapi.encoders import jsonable_encoder


app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

model = load_laptop_model()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# Database Dependency
def get_db():
    db = database.SessionLocal()
    try: yield db
    finally: db.close()

# Dependency to protect routes
def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, auth_utils.SECRET_KEY, algorithms=[auth_utils.ALGORITHM])
        return payload.get("sub")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid Token")

@app.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(database.User).filter(database.User.username == user.username).first()
    if db_user: raise HTTPException(status_code=400, detail="Username taken")
    new_user = database.User(username=user.username, hashed_password=auth_utils.hash_password(user.password))
    db.add(new_user)
    db.commit()
    return {"message": "User created successfully"}

@app.post("/login")
def login(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(database.User).filter(database.User.username == user.username).first()
    if not db_user or not auth_utils.verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = auth_utils.create_access_token(data={"sub": db_user.username})
    return {"access_token": token, "token_type": "bearer"}

@app.post("/predict")
def predict(data: schemas.LaptopData, user: str = Depends(get_current_user)):
    print(jsonable_encoder(data))

    try:
        df = pd.DataFrame([data.model_dump()])   # agar Pydantic v2
        # df = pd.DataFrame([data.dict()])       # agar Pydantic v1

        df["total_pixels"] = (
            df["resolution_width"] * df["resolution_height"]
        )

        print(df.columns)
        print(df)

        prediction = model.predict(df)

        return {
            "predicted_price": round(float(prediction[0]),2)
        }

    except Exception as e:
        print(e)
        raise HTTPException(status_code=500,detail=str(e))

@app.get("/dashboard")
def dashboard(user: str = Depends(get_current_user)):
    return {
        "total_predictions": 148,
        "avg_predicted_price": 84231,
        "most_searched_brand": "Dell",
        "active_users": 17
    }


@app.get("/charts")
def charts(user: str = Depends(get_current_user)):
    return {
        "brand_distribution": [
            {"name": "Dell", "value": 45},
            {"name": "HP", "value": 32},
            {"name": "Lenovo", "value": 28},
            {"name": "Asus", "value": 21}
        ],

        "login_per_day": [
            {"day": "Mon", "count": 12},
            {"day": "Tue", "count": 18},
            {"day": "Wed", "count": 25},
            {"day": "Thu", "count": 30},
            {"day": "Fri", "count": 22},
            {"day": "Sat", "count": 14},
            {"day": "Sun", "count": 10}
        ]
    }


@app.get("/logs")
def logs(user: str = Depends(get_current_user)):
    return [
        {
            "username": "sahil",
            "brand": "Dell",
            "predicted_price": 85231
        },
        {
            "username": "rahul",
            "brand": "HP",
            "predicted_price": 65321
        },
        {
            "username": "admin",
            "brand": "Asus",
            "predicted_price": 94221
        }
    ]