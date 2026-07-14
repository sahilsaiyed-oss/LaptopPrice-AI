import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
from preprocessing import preprocessor

# 1. Prepare and Train the model one last time
print("Preparing model for saving...")
df = pd.read_csv('dataset/final_data.csv')
X = df.drop(columns=['price'])
y = df['price']

# Define the full pipeline
full_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', LinearRegression())
])

# Fit the model on the entire dataset for better production performance
full_pipeline.fit(X, y)

# 2. Save the complete pipeline using joblib
# This saves both the preprocessing steps and the trained model
print("Saving the model to 'models/laptop_price_model.pkl'...")
joblib.dump(full_pipeline, 'models/laptop_price_model.pkl')

print("Model Saved Successfully!")