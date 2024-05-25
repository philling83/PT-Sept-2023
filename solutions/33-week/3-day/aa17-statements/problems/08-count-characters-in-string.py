# Create a function that takes two strings as arguments and returns the number
# of times the first string (the single character) is found in the second
# string.

# Write your function here.

def char_count(char, str):
    return str.count(char)

print(char_count("a", "App Academy"))         #> 1
print(char_count("c", "Chamber of Secrets"))  #> 1
print(char_count("b", "big fat bubble"))      #> 4
