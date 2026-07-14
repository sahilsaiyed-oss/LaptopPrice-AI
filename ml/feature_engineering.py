import pandas as pd

# 1. Read the cleaned dataset
print("Loading cleaned_data.csv...")
df = pd.read_csv('dataset/cleaned_data.csv')

# 2. Extract Numerical value from 'Ram' (e.g., "8 GB" -> 8)
# We use str.extract to grab the first set of numbers found in the text
print("Extracting numerical values from Ram...")
df['Ram'] = df['Ram'].str.extract('(\d+)').astype(float)

# 3. Extract Numerical value from 'ROM' (e.g., "512 GB" -> 512)
print("Extracting numerical values from ROM...")
df['ROM'] = df['ROM'].str.extract('(\d+)').astype(float)

# 4. Create the new feature: total_pixels
# Formula: resolution_width * resolution_height
print("Creating new feature: total_pixels...")
df['total_pixels'] = df['resolution_width'] * df['resolution_height']

# 5. Save the dataset as final_data.csv
print("Saving the final dataset...")
df.to_csv('dataset/final_data.csv', index=False)

print("Success! Final data saved with extracted Ram/ROM and total_pixels.")