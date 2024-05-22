# Create a function that returns `True` when `num1` is NOT equal to `num2`;
# otherwise return `False`.

# Write your function here.
def not_equal(num1, num2):
    return num1 != num2


print(not_equal(0, 2))   #>  True
print(not_equal(2, 2))   #>  False
print(not_equal(2, "2")) #>  True
