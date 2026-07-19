from pydantic import BaseModel

# -----------------------------
# User Authentication Schemas
# -----------------------------

class UserCreate(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


# -----------------------------
# Laptop Prediction Schema
# -----------------------------

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