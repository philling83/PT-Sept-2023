# There is a single operator in Python, capable of providing the remainder of a
# division operation. Two numbers are passed as parameters. The first parameter
# divided by the second parameter will have a remainder, possibly zero. Return
# that value.  You should be able to do this with one line in the body of your
# function.

# Write your function here.

def remainder(n1, n2):
    return n1 % n2

print(remainder(1, 3))  #> 1
print(remainder(3, 4))  #> 3
print(remainder(5, 5))  #> 0
print(remainder(7, 2))  #> 1
