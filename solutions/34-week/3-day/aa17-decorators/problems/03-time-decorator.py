# Implement a decorator function called `timer` that will be used to time
# function calls. The decorator function should take another function argument
# as a callback, implement an inner wrapper function, and finally return the
# wrapper function object.

# Implement the inner wrapper function with the following:
# - Takes a variable number of positional and keyword arguments
# - Initializes a variable called `before_time` with the current time. To get
#   the current time, you will need to import the `datetime` object from the
#   built-in `datetime` package. The `datetime.now()` function returns the
#   current local date and time.
# - Calls the callback function with arguments passed to the wrapper
# - Initializes a variable called `after_time` with the current time. Use the
#   same `datetime.now()` function here as well.
# - Returns `after_time - before_time`

# Finally, be sure to decorate `greet_me` and `sum_of_two` with `timer` using
# the decorator syntax.

# Write your function here.
# from datetime import datetime

from datetime import datetime

def timer(func):
    def inner(*args, **kwargs):

        before_time = datetime.now()
        print(func(*args, **kwargs))
        after_time = datetime.now()

        return after_time - before_time

    return inner


@timer
def greet_me(name):
    return f"hello {name}"
@timer
def sum_of_two(sum1, sum2):
    return sum1 + sum2

print(greet_me("Penelope")) # approximately 0:00:00.000006
print(sum_of_two(13, 7)) # approximately 0:00:00.000002
