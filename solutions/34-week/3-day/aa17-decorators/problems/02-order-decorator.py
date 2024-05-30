# Implement a decorator function called `order_decorator` that will be used to
# `print` the values 1, 2, 3, 4 in order while the callback is in the middle of
# two print statements. The decorator function should take another function
# argument as a callback, implement an inner wrapper function, and finally
# return the wrapper function object.

# Implement the inner wrapper function with the following:
# - Takes in a variable argument
# - A `print` statement of the integer 1
# - Initializes a variable of that calls the `middle` callback function with the
#   argument passed into the wrapper
# - A `print` statement of the integer 3
# - Returns the variable of the callback function

# Finally, be sure to decorate `middle` function using the decorator syntax.

# Write your function here.

def order_decorator(func):
    def inner(var):
        print(1)
        res = func(var)
        print(3)
        return res

    return inner

@order_decorator
def middle(num):
    print(num)
    return num * num

print(middle(2)) #> 1 2 3 4

#! without syntactic sugar
# mid = order_decorator(middle)
# print(mid(2))
