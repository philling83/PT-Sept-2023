# Implement a decorator function called chain_decorator that will be used to
# chain function calls. The decorator function should take another function
# argument as a callback, implement two inner wrapper functions, and finally
# return the wrapper function object in each respective wrapper function.

# Implement the inner wrapper function with the following:
# - Takes a variable number of positional and keyword arguments
# - Initializes a variable that calls the callback function with arguments
#   passed to the wrapper
# - Returns the variable multiplied by itself.

# Implement another inner wrapper function with the following:
# - Takes a variable number of positional and keyword arguments
# - Initializes a variable that calls the callback function with arguments
#   passed to the wrapper
# - Returns the variable multiplied by 3

# Finally, be sure to decorate num function using the decorator syntax.

def chain_decorator(func):
    def inner1(*args, **kwargs):
        print('first inner', *args, **kwargs)
        res = func(*args, **kwargs)
        print('first inner res', res)
        return res * res
    return inner1

def multi_decorator(func):
    def inner_multi(*args, **kwargs):
        print('multi inner', *args)
        res = func(*args, **kwargs)
        print('multi inner res', res)
        return res * 3
    return inner_multi

@chain_decorator
@multi_decorator
def num(a, b):
    print('decorated func', a,b)
    return a + b

print(num(5, 2))  #> 441
# print(num(8, 2))  #> 900
# print(num(4, 9))  #> 1521
