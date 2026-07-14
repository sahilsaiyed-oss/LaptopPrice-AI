import pandas as pd
from sklearn.model_selection import train_test_split

# 1. Read the final dataset
print("Loading final_data.csv...")
df = pd.read_csv('dataset/final_data.csv')

# 2. Separate Features (X) and Target (y)
# Target column is 'price'
X = df.drop(columns=['price'])
y = df['price']

# 3. Perform Train-Test Split
# 80% data for training and 20% for testing
# random_state=42 ensures the split is the same every time we run it
print("Splitting data into Training and Testing sets...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 4. Print the shapes to verify
print("\n--- Data Split Summary ---")
print(f"Training Features Shape (X_train): {X_train.shape}")
print(f"Testing Features Shape (X_test):   {X_test.shape}")
print(f"Training Target Shape (y_train):   {y_train.shape}")
print(f"Testing Target Shape (y_test):     {y_test.shape}")
print("Split completed successfully.")