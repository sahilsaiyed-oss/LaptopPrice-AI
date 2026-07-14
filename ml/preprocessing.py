import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

# 1. Load the final data
df = pd.read_csv('dataset/final_data.csv')

# 2. Define the columns based on your actual dataset
# Numerical: These columns contain numbers we can scale
numerical_cols = [
    'spec_rating', 
    'Ram', 
    'ROM', 
    'display_size', 
    'resolution_width', 
    'resolution_height', 
    'total_pixels'
]

# Categorical: These columns contain text labels we need to encode
categorical_cols = [
    'brand', 
    'processor', 
    'CPU', 
    'Ram_type', 
    'ROM_type', 
    'GPU', 
    'OS', 
    'warranty'
]

# 3. Create the Preprocessing Pipeline object
# We use StandardScaler for numbers and OneHotEncoder for text
print("Building the ColumnTransformer...")

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numerical_cols),
        ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), categorical_cols)
    ]
)

print("Preprocessing object is ready.")
# We do not transform here, we just define the object for the training phase