# Day 2 - Full.py Documentation

## Overview
`Full.py` is a simple interactive Python script that combines three small console exercises into one file:

1. Student information display
2. Simple invoice calculation with VAT
3. Percentage calculation

The script uses basic Python input/output, type conversion, arithmetic operations, and formatted console printing.

## What the Script Uses

### 1) User input
The script asks the user to enter values from the keyboard using `input()`.

### 2) Type conversion
Some values are converted to numbers so calculations can be performed:
- `int()` for whole numbers such as age and quantity
- `float()` for decimal values such as price, VAT, and scores

### 3) Arithmetic operations
The script performs basic calculations:
- Multiplication
- Addition
- Division
- Percentage calculation

### 4) Console output
The results are displayed using `print()`.

## Sections in `Full.py`

### Student Information
The script collects:
- Last name
- First name
- Age
- Class

Then it prints a small student profile.

### Invoice Calculation
The script collects:
- Product price
- Quantity
- VAT rate

It then calculates:
- `total_ht` = price × quantity
- `montant_tva` = total_ht × VAT / 100
- `total_ttc` = total_ht + montant_tva

### Percentage Calculation
The script collects:
- Obtained score
- Total score

It then calculates:
- `pourcentage = (score / total) * 100`

## Variables Used
- `nom_etudiant`
- `prenom_etudiant`
- `age_etudiant`
- `classe`
- `prix`
- `quantite`
- `tva`
- `total_ht`
- `montant_tva`
- `total_ttc`
- `score`
- `total`
- `pourcentage`

## How to Run
From the `Day 2` folder:

```bash
python3 Full.py
```

## Notes
- The script is designed for beginners.
- It demonstrates how to collect input, convert data types, and perform simple calculations in Python.
- The file name `Full.py` indicates that it combines multiple exercises into one complete script.
