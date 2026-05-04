# Day 1 Exercises

## Overview
This folder contains the foundational exercises for Day 1, covering the basics of variables, conditional statements, arrays, functions, and error correction in both JavaScript and Python.

---

## Exercise 1: Personal Introduction with Variables

### Description
Create a program that declares variables for name, age, city, and desired field, then displays a personalized greeting message.

### Approach
- **Variables**: Declared four variables (`nom`, `age`, `ville`, `domaine`) to store personal information
- **String Interpolation**: Used template literals in JavaScript and f-strings in Python to embed variables directly into the output string
- **Output**: Used `console.log()` in JavaScript and `print()` in Python to display the greeting

### Why This Approach?
This exercise teaches the fundamentals of variable declaration and string manipulation. Using string interpolation makes the code more readable and maintainable compared to string concatenation. It demonstrates how different languages handle dynamic string creation in their own idiomatic way.


---

## Exercise 2: Conditional Statements (JavaScript) & Loop with Sum (Python)

### JavaScript - Exercise 2: Skill Level Based on Score

**Description**: Evaluate a score and display the appropriate skill level.

**Approach**
- **Variable**: Store a score value (75)
- **Conditional Logic**: Use if-else if-else structure to check score ranges
- **Ranges**: 
  - score < 50: "Débutant" (Beginner)
  - 50 ≤ score < 75: "Intermédiaire" (Intermediate)
  - score ≥ 75: "Avancé" (Advanced)

**Why This Approach?**
Conditional statements are fundamental for making decisions in code. This exercise demonstrates the if-else if-else pattern, which is cleaner than nested ifs and handles multiple conditions clearly. The ordered conditions ensure that each score maps to exactly one level.

### Python - Exercise 2: Print Numbers and Calculate Sum

**Description**: Print numbers from 1 to 10 and calculate their total sum.

**Approach**
- **Loop**: Use `for` loop with `range(1, 11)` to iterate from 1 to 10
- **Accumulator**: Initialize `somme = 0` and add each number to it in each iteration
- **Output**: Print each number and the final sum

**Why This Approach?**
This exercise teaches the fundamentals of loops and accumulators. The `range()` function is the Pythonic way to generate sequences. Using an accumulator variable demonstrates a common pattern for collecting results over multiple iterations.

---

## Exercise 3: Arrays and Loops

### JavaScript - Exercise 3: Student Names with Loop

**Description**: Create an array of student names and greet each student.

**Approach**
- **Array**: Declare an array `etudiants` with five student names
- **Loop**: Use `for...of` loop to iterate through each element
- **Output**: Concatenate "Bienvenue " with each student's name using the `+` operator

**Why This Approach?**
The `for...of` loop is ideal for iterating over array values when you don't need the index. It's more readable than traditional `for` loops and less error-prone. This approach emphasizes that arrays are collections of items that can be processed uniformly.

### Python - Exercise 3: Student Names with Loop

**Description**: Create a list of student names and greet each one.

**Approach**
- **List**: Declare a list `students` with student names
- **Loop**: Use `for...in` loop (Pythonic syntax) to iterate through each name
- **Output**: Print a greeting with each student's name using string concatenation

**Why This Approach?**
Python's `for...in` syntax directly iterates over list elements, which is the most Pythonic and readable approach. This demonstrates the language's emphasis on simplicity and clarity.

---

## Exercise 4: Functions and Calculations

### Description
Create a function `calculerTotal(prix, quantite)` that calculates and returns the total price to pay.

### Approach
- **Function Declaration**: Define a function that accepts two parameters
- **Calculation**: Multiply `prix` × `quantite` to get the total
- **Return Statement**: Return the calculated result

### Why This Approach?
Functions encapsulate reusable logic and make code modular. By parameterizing the price and quantity, this function can be called multiple times with different values. This teaches the concept of abstracting repeated calculations into reusable units.


---

## Exercise 5: Debugging and Error Correction

### Description
Correct the buggy code that attempts to print array elements.

### Original (Buggy) Code
```javascript
let notes=[12,15,18]; 
for let i=0; i<notes.length; i++ { 
    console.log(note[i]); 
}
```

### Issues Identified and Fixed
1. **Missing parentheses**: `for let` → `for (let` - loop syntax requires parentheses
2. **Wrong variable name**: `note[i]` → `notes[i]` - array name was misspelled

### Corrected Code
```javascript
let notes = [12, 15, 18];

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}
```

### Why This Approach?
Debugging teaches students to:
- Recognize common syntax errors
- Understand that variable names must match exactly
- Use the array length property for safe iteration
- Add proper formatting for readability


---

## How to Run

### JavaScript
```bash
node exercise_1.js
node exercise_2.js
node exercise_3.js
node exercise_4.js
node exercise_5.js
```

### Python
```bash
python exercise_1.py
python exercise_2.py
python exercise_3.py
```
