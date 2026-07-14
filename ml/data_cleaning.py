import pandas as pd

# 1. Read the dataset
# We are reading the raw data collected in the first phase
print("Step 1: Loading the dataset...")
df = pd.read_csv('dataset/data.csv')
print("Data loaded successfully.")

# 2. Remove unnecessary columns
# 'Unnamed' columns are usually index columns from CSV files that we don't need
print("\nStep 2: Removing unnecessary columns...")
cols_to_remove = ['Unnamed: 0', 'Unnamed: 0.1']

# We use errors='ignore' so the code doesn't crash if the columns are already missing
df = df.drop(columns=cols_to_remove, errors='ignore')
print(f"Columns {cols_to_remove} have been removed.")

# 3. Check datatypes
print("\nStep 3: Checking data types of all columns:")
print(df.dtypes)

# 4. Verify missing values
print("\nStep 4: Checking for missing values...")
missing_data = df.isnull().sum()
print("Missing values in each column:")
print(missing_data)

# 5. Verify duplicate rows
print("\nStep 5: Checking for duplicate rows...")
duplicate_count = df.duplicated().sum()
print(f"Total number of duplicate rows found: {duplicate_count}")

# If there were duplicates, we would handle them here, 
# but for now, we are just verifying.

# 6. Save the cleaned dataset
print("\nStep 6: Saving the cleaned data...")
df.to_csv('dataset/cleaned_data.csv', index=False)
print("Success! Cleaned dataset saved as 'dataset/cleaned_data.csv'.")