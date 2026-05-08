# Python & JavaScript Learning Course

**ABA Fusion** | 2 Weeks

A small learning repository containing daily exercises from a Python and JavaScript course. The project starts with core language basics, then moves into Python fundamentals, data manipulation, graphs, and simple machine learning / NLP examples.

## Overview

The repository is organized by day. Each folder groups exercises around one topic so the progression is easy to follow:

| Day | Focus | Main files |
| --- | --- | --- |
| Day 1 | Python and JavaScript fundamentals | `exercise_1.py`, `exercise_2.py`, `exercise_3.py`, `exercise_1.js`, `exercise_2.js`, `exercise_3.js`, `exercise_4.js`, `exercise_5.js` |
| Day 2 | Basic Python input/output and conditions | `Day 2/Basic/Ex1.py`, `Ex2.py`, `Ex3.py`, `Full.py`, `Day 2/Conditions/Ex1.py` |
| Day 3 | Data structures and CSV processing | `Day 3/Function - data sctructure/Ex1.py`, `notes_eleves.csv`, `notes_eleves_final.csv` |
| Day 4 | Graphs and linear regression | `Graph.py`, `Liner.py` |
| Day 5 | Algorithm exercises and NLP | `Ex1.py`, `Ex2.py`, `Ex3.py`, `NLP + Models/nlp.py` |

## What’s Inside

### Day 1
Foundational exercises in both Python and JavaScript, including variables, conditionals, loops, arrays, functions, and a small debugging exercise.

### Day 2
Beginner Python scripts covering user input, formatting, conditional logic, and a combined interactive exercise in `Full.py`.

### Day 3
A pandas and NumPy workflow that loads student data, handles missing values, computes averages, adds and removes rows and columns, and exports a cleaned CSV file.

### Day 4
Two small examples: one builds an undirected graph from user/page events, and the other fits a linear regression model with scikit-learn.

### Day 5
Three algorithmic Python exercises plus a text classification example using `CountVectorizer` and `MultinomialNB`.

## Running the Exercises

From the relevant folder, run the file with Python or Node.js depending on the script type:

```bash
# Python examples
python3 "Day 2/Basic/Full.py"
python3 "Day 3/Function - data sctructure/Ex1.py"
python3 "Day 4/Graph.py"
python3 "Day 5/Ex1.py"

# JavaScript examples
node "Day 1/exercise_1.js"
node "Day 1/exercise_2.js"
```

Some scripts create output files in place, such as `Day 3/Function - data sctructure/notes_eleves.csv` and `notes_eleves_final.csv`.

## Notes

- The repository is a learning archive, so several files are intentionally simple and exploratory.
- A few folder names reflect the original course naming, including `Function - data sctructure` and `NLP + Models`.
- `Day 1/exercise_4.js` is marked as not completed in the original course notes.
