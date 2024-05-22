#! Create a function that returns whether or not the string is a Palindrome.

#! Write your function here.
#! slice arr method str[start:stop:step]
def is_palindrome(str):
    # print(str[-1:0:-1])
    # print(str[::-1])
    return str[::-1] == str
print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False
