import joblib
import pandas as pd

# 1. Load the saved model pipeline
# This pipeline includes both the preprocessor and the regressor
print("Loading the Laptop Price Prediction Model...")
try:
    model = joblib.load('models/laptop_price_model.pkl')
    print("Model loaded successfully.\n")
except:
    print("Error: Model file not found in 'models/' folder.")
    exit()

# 2. Collect input from the user for every feature
print("--- Enter Laptop Details for Price Prediction ---")

# Categorical Inputs
brand = input("Brand (e.g., HP, Dell, Lenovo): ")
processor = input("Processor (e.g., Intel Core i5, AMD Ryzen 7): ")
cpu = input("CPU Details (e.g., Core i5 12th Gen): ")
ram_type = input("RAM Type (e.g., DDR4, LPDDR5): ")
rom_type = input("ROM Type (e.g., SSD, HDD): ")
gpu = input("GPU (e.g., NVIDIA GeForce, Intel Integrated): ")
os = input("Operating System (e.g., Windows 11, macOS): ")
warranty = input("Warranty (e.g., 1 year, No warranty): ")

# Numerical Inputs
spec_rating = float(input("Spec Rating (e.g., 60, 85.5): "))
ram = float(input("RAM Capacity in GB (e.g., 8, 16): "))
rom = float(input("ROM Capacity in GB (e.g., 256, 512): "))
display_size = float(input("Display Size in inches (e.g., 14, 15.6): "))
res_width = int(input("Resolution Width (e.g., 1920): "))
res_height = int(input("Resolution Height (e.g., 1080): "))

# 3. Perform Feature Engineering
# Calculate total_pixels just like we did in Phase 4
total_pixels = res_width * res_height

# 4. Create the input DataFrame
# NOTE: We exclude 'price' (target) and 'name' (dropped during training)
# The column names must match final_data.csv exactly
input_data = pd.DataFrame({
    'brand': [brand],
    'spec_rating': [spec_rating],
    'processor': [processor],
    'CPU': [cpu],
    'Ram': [ram],
    'Ram_type': [ram_type],
    'ROM': [rom],
    'ROM_type': [rom_type],
    'GPU': [gpu],
    'display_size': [display_size],
    'resolution_width': [res_width],
    'resolution_height': [res_height],
    'OS': [os],
    'warranty': [warranty],
    'total_pixels': [total_pixels]
})

# 5. Make the prediction
print("\nProcessing data and predicting price...")

# The model pipeline will automatically handle scaling and encoding
predicted_price = model.predict(input_data)

# 6. Display the result
print("==================================================")
print(f"THE ESTIMATED LAPTOP PRICE IS: ₹ {predicted_price[0]:.2f}")
print("==================================================")