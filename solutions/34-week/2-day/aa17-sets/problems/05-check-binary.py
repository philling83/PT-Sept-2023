# Given a string, `str`, write a function, `check_binary`, that returns whether
# or not `str` is a valid binary string. While there are many ways to solve
# this, try to implement a solution using a set.

# Write your code here.
def check_binary(str):
    res = set(str)


    return res == {'0', '1'} or res == {'1'} or res == {'0'}

str1 = '1010001010010100101'
str2 = '1010010015010101010'

print(check_binary(str1))       # True
print(check_binary(str2))       # False
