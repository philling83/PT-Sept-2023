# Try to explore the difference between comparison operators in JavaScript and
# Python. Mainly, compare variables using `==` and `is` and see how they differ.
# Try using the `not` keyword and the `!` operator as well.

x = 1
y = '1'
list1 = [1, 2]
list2 = [1, 2]


# Use the equality and identity comparison operators to compare:
# 1. x with itself
print(x != x)
print(x is not x)
# 2. x with y
print(x != y)
print(x is not y)
# 3. list1 with list2
print(list1 != list2)
print(list1 is not list2)
