import pandas as pd
import numpy as np

# 1. Load the dataset
file_path = "dataset/data.csv"
try:
    df = pd.read_csv(file_path)
except FileNotFoundError:
    print(f"Error: The file at {file_path} was not found.")
    exit()

# 2. Shape, Rows, and Columns
shape = df.shape
rows = shape[0]
cols = shape[1]

print("--- 2. Dataset Dimensions ---")
print(f"Shape: {shape}")
print(f"Number of Rows: {rows}")
print(f"Number of Columns: {cols}\n")

# 3. Column Names and Data Types
print("--- 3. Column Information ---")
print(df.dtypes)
print("\n")

# 4. First and Last 5 Rows
print("--- 4. Data Preview ---")
print("First 5 Rows:")
print(df.head())
print("\nLast 5 Rows:")
print(df.tail())
print("\n")

# 5. Missing Values and Duplicates
print("--- 5. Data Integrity Check ---")
missing_values = df.isnull().sum()
duplicate_count = df.duplicated().sum()

print("Missing Values per Column:")
print(missing_values[missing_values > 0] if missing_values.sum() > 0 else "No missing values found.")
print(f"\nTotal Duplicate Rows: {duplicate_count}\n")

# 6. Summary Statistics
print("--- 6. Summary Statistics ---")
print(df.describe(include='all'))
print("\n")

# 7. Identify Target and Feature Types
# Identifying target (Assuming 'Price' is in the name based on common datasets)
target_col = [col for col in df.columns if 'price' in col.lower()]
numerical_features = df.select_dtypes(include=[np.number]).columns.tolist()
categorical_features = df.select_dtypes(include=['object', 'category']).columns.tolist()

if target_col:
    target = target_col[0]
    if target in numerical_features: numerical_features.remove(target)
    if target in categorical_features: categorical_features.remove(target)
else:
    target = "Unknown (Please ensure a 'Price' column exists)"

print("--- 7. Feature Identification ---")
print(f"Target Column: {target}")
print(f"Numerical Features: {numerical_features}")
print(f"Categorical Features: {categorical_features}\n")

# 8. Detection of Problematic Columns
print("--- 8. Data Quality Detection ---")

# High Missing Values (> 50%)
high_missing = df.columns[df.isnull().mean() > 0.5].tolist()

# Unique IDs (Columns where every value is unique and they are categorical/object)
potential_ids = [col for col in df.columns if df[col].nunique() == rows]

# Inconsistent Values (Numerical columns loaded as objects)
inconsistent = [col for col in categorical_features if any(char.isdigit() for char in str(df[col].iloc[0]))]

print(f"Columns with >50% missing values: {high_missing}")
print(f"Potential ID columns (to be removed): {potential_ids}")
print(f"Inconsistent/Mixed Type columns: {inconsistent}")