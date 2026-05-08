# This function counts how many times a pattern of vowels and consonants appears in a given source string
# The pattern is represented as a string of "0"s and "1"s, where "0" represents a vowel and "1" represents a consonant
# The function iterates through the source string

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


# Example 1
pattern = "01"
source = "banana"

print(solution(pattern, source))

# Example 2
pattern = "10"
source = "hello"

print(solution(pattern, source))