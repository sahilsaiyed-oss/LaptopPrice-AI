import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Import the preprocessor defined in the previous phase
from preprocessing import preprocessor

# 1. Load the final data
print("Loading final_data.csv for training...")
df = pd.read_csv('dataset/final_data.csv')

# 2. Separate Features (X) and Target (y)
# Target is 'price'
X = df.drop(columns=['price', 'name']) # We drop 'name' as it's too unique for prediction
y = df['price']

# 3. Split the data into Training and Testing sets (80% Train, 20% Test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Create a Pipeline
# This connects our preprocessor (from preprocessing.py) to the Linear Regression model
print("Creating the model pipeline...")
model_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', LinearRegression())
])

# 5. Train the model
print("Training Linear Regression model...")
model_pipeline.fit(X_train, y_train)
print("Training Completed.")

# 6. Make Predictions
predictions = model_pipeline.predict(X_test)

# 7. Evaluate the Model
r2 = r2_score(y_test, predictions)
mae = mean_absolute_error(y_test, predictions)
mse = mean_squared_error(y_test, predictions)
rmse = np.sqrt(mse)

print("\n--- Model Performance Report ---")
print(f"R-squared Score: {r2:.4f}")
print(f"Mean Absolute Error: {mae:.2f}")
print(f"Mean Squared Error: {mse:.2f}")
print(f"Root Mean Squared Error: {rmse:.2f}")

# 8. Show model details
lr_step = model_pipeline.named_steps['regressor']
print(f"\nModel Intercept: {lr_step.intercept_}")
print(f"Model coefficients calculated for {len(lr_step.coef_)} features (after encoding).")