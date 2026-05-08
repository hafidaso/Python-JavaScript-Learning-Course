# Python Exercises Documentation

This file contains a documentation for the three Python exercises -  Aba Fusion Academy

---

## Exercise 1: Array Transformation

### Goal

The goal is to create a new array where each element is the sum of:

```text
previous element + current element + next element
```

If the previous or next element does not exist, we use `0`.

### Code

```python
# For each element in the array, we calculate the sum of its previous,
# current, and next values, using 0 when a neighbor does not exist.

def solution(a):
    b = []

    for i in range(len(a)):
        previous_value = a[i - 1] if i > 0 else 0
        current_value = a[i]
        next_value = a[i + 1] if i < len(a) - 1 else 0

        total = previous_value + current_value + next_value
        b.append(total)

    return b


a = [4, 0, 1, -2, 3]
print(solution(a))
```

### Explanation

We use a loop to go through each element of the array.  
For every position, we take the previous value, the current value, and the next value.  
For the first element, there is no previous value, so we use `0`.  
For the last element, there is no next value, so we use `0`.

### Output

```python
[4, 5, -1, 2, 1]
```

---

## Exercise 2: Pattern Matching in a String

### Goal

The goal is to count how many substrings in `source` match the given `pattern`.

In the pattern:

```text
0 = vowel
1 = consonant
```

The vowels are:

```text
a, e, i, o, u, y
```

### Code

```python
# This function counts how many times a pattern of vowels and consonants
# appears in a given source string.

def solution(pattern, source):
    vowels = "aeiouy"
    count = 0

    pattern_length = len(pattern)

    for i in range(len(source) - pattern_length + 1):
        substring = source[i:i + pattern_length]
        match = True

        for j in range(pattern_length):
            if pattern[j] == "0":
                if substring[j] not in vowels:
                    match = False
                    break

            elif pattern[j] == "1":
                if substring[j] in vowels:
                    match = False
                    break

        if match:
            count += 1

    return count


pattern = "01"
source = "banana"

print(solution(pattern, source))
```

### Explanation

We check each substring that has the same length as the pattern.  
If the pattern has `0`, the character must be a vowel.  
If the pattern has `1`, the character must be a consonant.  
When a substring follows the full pattern, we increase the counter.

### Output

```python
2
```

---

## Exercise 3: Sum of Even Numbers in Sub-Arrays

### Goal

The goal is to return the sum of even numbers in each consecutive sub-array of size `k`.

### Code

```python
# This function calculates the sum of even numbers
# in each contiguous sub-array of size k.

def solution(a, k):
    result = []

    for i in range(len(a) - k + 1):
        sub_array = a[i:i + k]
        even_sum = 0

        for number in sub_array:
            if number % 2 == 0:
                even_sum += number

        result.append(even_sum)

    return result


a = [8, 1, 4, 7, 10, 3]
k = 2

print(solution(a, k))
```

### Explanation

We create sub-arrays of size `k`.  
For each sub-array, we check all numbers.  
If a number is even, we add it to the sum.  
Then we add this sum to the result array.

### Output

```python
[8, 4, 4, 10, 10]
```
