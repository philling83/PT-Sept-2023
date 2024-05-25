# Create a function called `vowel_count` that takes in a string and returns a
# count of how many vowels are in the string.

# Write your solution here.

def vowel_count(str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    lowerStr = str.lower()
    vowelCount = 0

    for char in lowerStr:
        if char in vowels:
            vowelCount += 1

    return vowelCount

print(vowel_count("App Academy"))         #> 4
print(vowel_count("Coding Expert"))       #> 4
print(vowel_count("Supreme"))             #> 3
print(vowel_count("Chamber of Secrets"))  #> 5
