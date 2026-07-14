# EDA (Exploratory Data Analysis)

import pandas as pd
import matplotlib.pyplot as plt

# Load cleaned dataset
print("Loading cleaned dataset...")
df = pd.read_csv("dataset/cleaned_data.csv")
print("Dataset loaded successfully.")

# -----------------------------
# Price Distribution
# -----------------------------
plt.figure(figsize=(8,5))
plt.hist(df["price"], bins=20, edgecolor="black")
plt.title("Price Distribution")
plt.xlabel("Price")
plt.ylabel("Count")
plt.savefig("reports/price_distribution.png")
plt.show()

# -----------------------------
# Brand vs Price
# -----------------------------
brand_price = df.groupby("brand")["price"].mean()

plt.figure(figsize=(10,5))
brand_price.plot(kind="bar")
plt.title("Average Price by Brand")
plt.xlabel("Brand")
plt.ylabel("Average Price")
plt.savefig("reports/brand_vs_price.png")
plt.show()

# -----------------------------
# RAM vs Price
# -----------------------------
ram_price = df.groupby("Ram")["price"].mean()

plt.figure(figsize=(8,5))
ram_price.plot(kind="bar")
plt.title("RAM vs Price")
plt.xlabel("RAM")
plt.ylabel("Average Price")
plt.savefig("reports/ram_vs_price.png")
plt.show()

# -----------------------------
# Warranty vs Price
# -----------------------------
plt.figure(figsize=(8,5))
df.boxplot(column="price", by="warranty")
plt.title("Warranty vs Price")
plt.suptitle("")
plt.xlabel("Warranty")
plt.ylabel("Price")
plt.savefig("reports/warranty_vs_price.png")
plt.show()

# -----------------------------
# Correlation Heatmap
# -----------------------------
numeric_df = df.select_dtypes(include=["int64","float64"])

corr = numeric_df.corr()

plt.figure(figsize=(8,6))
plt.imshow(corr, cmap="coolwarm")
plt.colorbar()
plt.xticks(range(len(corr.columns)), corr.columns, rotation=90)
plt.yticks(range(len(corr.columns)), corr.columns)
plt.title("Correlation Heatmap")
plt.tight_layout()
plt.savefig("reports/correlation_heatmap.png")
plt.show()

print("EDA Completed Successfully.")