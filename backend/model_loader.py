import joblib
import os

# Define the path to the saved model
MODEL_PATH = os.path.join("..", "models", "laptop_price_model.pkl")

def load_laptop_model():
    """Loads the trained model pipeline from the models folder."""
    try:
        model = joblib.load(MODEL_PATH)
        print("--- Model Loaded Successfully ---")
        return model
    except Exception as e:
        print(f"Error loading model: {e}")
        return None