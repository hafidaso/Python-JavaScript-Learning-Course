
# Using scikit-learn for linear regression

import numpy as np
from sklearn.linear_model import LinearRegression

# Data
X = np.array([22, 25, 28, 32, 35, 40]).reshape(-1, 1)
Y = np.array([3.5, 4.2, 5.0, 6.5, 7.8, 9.5])

# Create the model
model = LinearRegression()

# Train the model
model.fit(X, Y)

# Get model parameters
a = model.coef_[0]
b = model.intercept_

print("Coefficient a:", a)
print("Intercept b:", b)

# Prediction example
temperature = np.array([[30]])
predicted_price = model.predict(temperature)

print("Predicted price for 30°C:", predicted_price[0])