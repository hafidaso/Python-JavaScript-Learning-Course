# For each element in the array, we calculate the sum of its previous,
# current, and next values, using 0 when a neighbor does not exist.

def solution(a):
    b = []
# Loop through each element in the input array
    for i in range(len(a)):
        previous_value = a[i - 1] if i > 0 else 0
        current_value = a[i]
        next_value = a[i + 1] if i < len(a) - 1 else 0
# Calculate the total and append it to the new array
        total = previous_value + current_value + next_value
        b.append(total)

    return b


# Exemple
a = [4, 0, 1, -2, 3]

print(solution(a))