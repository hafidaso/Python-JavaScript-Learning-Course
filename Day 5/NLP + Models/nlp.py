from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# 1 Sample data
texts = [
    "I love this course",
    "This course is amazing",
    "I am happy",
    "I hate this course",
    "This course is bad",
    "I am sad"
]

# 2 Corresponding labels (positive or negative sentiment)
labels = [
    "positive",
    "positive",
    "positive",
    "negative",
    "negative",
     "negative"
]

# 3 Converting text to numbers
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

print("Vocabulary:")
print(vectorizer.get_feature_names_out())

print("Numerical representation:")
print(X.toarray())

# 4 Creating the model
model = MultinomialNB()

# 5 Model training
model.fit(X, labels)

# 6) Testing a new sentence
new_text = ["I love this lesson"]

# 7) Converting the new sentence using the same method
new_text_vector = vectorizer.transform(new_text)

# 8) prediction
prediction = model.predict(new_text_vector)

print("Prediction:", prediction[0])
