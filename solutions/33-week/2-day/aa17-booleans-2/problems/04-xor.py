# Create a function that returns the `xor` result of two values.

# Are the results a bit confusing when integer values are passed in? You can
# learn more about Python's bitwise operators in the python wiki.
# https://wiki.python.org/moin/BitwiseOperators

# Write your function here.
#! xor operators on integers will convert them into bits / binary
#! so when it compares them it will compare them bit by bit
#! 101 ^ 011 = 110
#! it will look at the 2 different set of bits in each digit place
#! so it will compare 1 to 0 therefore it will resolve to 1 (true)
#! then it will compare 0 to 1 and resolve to 1 (true)
#! finally it will compare 1 to 1 which will resolve to 0 (false)
#! setting the exclusive or, its true for one but not the other.


def xor(val1, val2):
    return val1 ^ val2

print(xor(False, False))   #>  False
print(xor(True, False))   #>  True
print(xor(True, True)) #>  False
print(xor(5, 3))  #> 6
print(xor(8, 4))  #> 12
print(xor(2, 2))  #> 0
print(xor(1, 2))  #> 3
print(xor(4, 4))  #> 0
