# This function calculates the sum of even numbers in each contiguous sub-array of size k

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


# New example
a = [8, 1, 4, 7, 10, 3]
k = 2

print(solution(a, k))