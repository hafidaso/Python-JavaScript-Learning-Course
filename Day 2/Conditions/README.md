# README - Explanation of Key Python Choices

## Overview

This README explains the main parts of the Python code used in the student exercise.

The goal is not only to write code, but also to understand why each part was used.

The code uses:

- A dictionary to store student information
- A `for` loop to display dictionary data
- A `classification` variable to store the student level
- A loop to calculate an average
- A `while` menu to let the user choose actions

---

## 1. Why did we use this code?

```python
for key, value in student.items():
	print(key, ":", value)
```

We used this because `student` is a dictionary.

Example:

```python
student = {
	"name": "Sara",
	"first_name": "Ali",
	"age": 20,
	"class": "Python",
	"grade": 15
}
```

A dictionary stores information using pairs:

`key : value`

For example:

- `name  : Sara`
- `age   : 20`
- `grade : 15`

The method `.items()` allows us to get both the key and the value at the same time.

So this code:

```python
for key, value in student.items():
	print(key, ":", value)
```

means:

For each item inside the student dictionary, take the key and the value, then print them.

The output will look like this:

```text
name : Sara
first_name : Ali
age : 20
class : Python
grade : 15
```

Why is this useful?

Without the loop, we would need to write many `print()` lines:

```python
print("Name:", student["name"])
print("First name:", student["first_name"])
print("Age:", student["age"])
print("Class:", student["class"])
print("Grade:", student["grade"])
```

Using the loop is shorter, cleaner, and easier to update.

## 2. Why did we use `classification`?

Example:

```python
classification = "Insufficient grade"
```

We used `classification` because we wanted to store the result of the student's grade analysis.

For example:

```python
if student["grade"] < 10:
	classification = "Insufficient grade"
elif student["grade"] < 12:
	classification = "Passable"
elif student["grade"] < 14:
	classification = "Fairly good"
elif student["grade"] < 16:
	classification = "Good"
else:
	classification = "Very good"
```

Here, `classification` is a variable that keeps the final result.

For example, if the grade is 15, then:

```python
classification = "Good"
```

Why not just print the result directly?

We could write:

```python
if student["grade"] < 10:
	print("Insufficient grade")
else:
	print("Valid grade")
```

This is correct, but it only displays the result immediately.

Using a variable is more useful because we can reuse the result later.

For example:

```python
print("Classification:", classification)
```

Or inside the menu:

```python
elif choice == "2":
	print("Classification:", classification)
```

So `classification` is used to save the result, not just display it once.

## 3. Why did we use `nombre_notes`?

```python
nombre_notes = int(input("How many grades do you want to enter? "))
```

We used `nombre_notes` to ask the user how many grades they want to enter.

For example, if the user enters:

```text
3
```

Then the program knows that it must ask for 3 grades.

This value is important because it controls how many times the loop will run.

## 4. Why did we use `somme = 0`?

```python
somme = 0
```

We used `somme = 0` because we need a starting value before adding grades.

At the beginning, the total is zero because no grade has been entered yet.

Example:

```python
somme = 0

# first grade
somme = 0 + 15
somme = 15

# second grade
somme = 15 + 12
somme = 27

# third grade
somme = 27 + 18
somme = 45
```

So `somme` is used to collect the total of all grades.

## 5. Why did we use this loop?

```python
for i in range(1, nombre_notes + 1):
```

We used this loop because we want to ask the user to enter several grades.

The number of repetitions depends on `nombre_notes`.

Example:

```python
nombre_notes = 3
```

Then:

```python
range(1, nombre_notes + 1)
```

becomes:

```python
range(1, 4)
```

and it gives:

```text
1
2
3
```

So the loop runs 3 times.

Why `nombre_notes + 1`?

Because in Python, `range()` stops before the last number.

For example:

```python
range(1, 4)
```

gives:

```text
1
2
3
```

It does not include 4.

So if we want the loop to reach 3, we need to write 4.

That is why we write:

```python
nombre_notes + 1
```

## 6. Why did we use `str(i)`?

```python
note = float(input("Enter grade number " + str(i) + ": "))
```

We used `str(i)` because `i` is a number, but the message inside `input()` is text.

Python cannot directly join text and numbers using `+`.

This would cause an error:

```python
"Enter grade number " + i
```

Because `i` is an integer.

So we convert `i` to text:

```python
str(i)
```

Then the message becomes:

```text
Enter grade number 1:
Enter grade number 2:
Enter grade number 3:
```

A cleaner version is:

```python
note = float(input(f"Enter grade number {i}: "))
```

This is called an f-string.

## 7. Why did we use this line?

```python
somme = somme + note
```

We used this line to add each new grade to the total.

Example:

```python
somme = 0
note = 15
somme = somme + note
# somme = 15

# next grade is 12
somme = 15 + 12
# somme = 27
```

This is how we accumulate values inside a loop.

A shorter version is:

```python
somme += note
```

Both mean the same thing.

## 8. Why did we calculate the average like this?

```python
moyenne = somme / nombre_notes
```

We used this formula because an average is calculated by dividing the total by the number of values.

Example:

- Grades: 15, 12, 18
- Sum: 45
- Number of grades: 3
- Average: 45 / 3 = 15

So in Python:

```python
moyenne = somme / nombre_notes
```

## 9. Why did we use `if choix == "1"`?

```python
if choix == "1":
```

We used this inside the menu to check what the user selected.

Example:

```python
choix = input("Choose an option: ")
```

If the user enters:

```text
1
```

Then this condition checks:

Is the user's choice equal to `"1"`?

If yes, the program executes the code under this condition.

Example:

```python
if choix == "1":
	print("Display student information")
```

Why `"1"` and not `1`?

Because `input()` always returns text.

So when the user types `1`, Python receives it as:

```text
"1"
```

not as:

```text
1
```

That is why we compare with:

```text
"1"
```

## 10. Why did we repeat the average calculation inside the menu?

Inside the menu, we have this part:

```python
elif choix == "3":
	nombre_notes = int(input("How many grades do you want to enter? "))
	somme = 0

	for i in range(1, nombre_notes + 1):
		note = float(input("Enter grade number " + str(i) + ": "))
		somme = somme + note

	moyenne = somme / nombre_notes
	print("The average is:", moyenne)
```

We repeated the average calculation because option 3 in the menu allows the user to calculate a new average.

The menu gives the user several choices:

1. Display student information
2. Display classification
3. Calculate a new average
4. Quit

So when the user chooses:

```text
3
```

The program asks for grades again and calculates a new average.

This makes the program interactive.

## 11. General Logic of the Program

The program follows this logic:

1. Ask the user for a valid grade.
2. Store student information in a dictionary.
3. Classify the student based on the grade.
4. Calculate an average using a loop.
5. Show a menu.
6. Let the user choose what to display or calculate.
7. Repeat the menu until the user chooses to quit.

## Summary

| Code | Why we used it |
| --- | --- |
| `student.items()` | To loop through dictionary keys and values |
| `key, value` | To separate each dictionary item into its name and its value |
| `classification` | To store the result of the grade analysis |
| `nombre_notes` | To know how many grades the user wants to enter |
| `somme = 0` | To start the total before adding grades |
| `for i in range(1, nombre_notes + 1)` | To repeat the grade input the correct number of times |
| `str(i)` | To convert the loop number into text |
| `somme = somme + note` | To add each grade to the total |
| `moyenne = somme / nombre_notes` | To calculate the average |
| `if choix == "1"` | To check the user's menu choice |
| `while choix != "4"` | To keep the menu running until the user quits |
