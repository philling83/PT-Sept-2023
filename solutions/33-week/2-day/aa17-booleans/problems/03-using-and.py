# Write a function using the `and` operator that returns the Boolean result of
# the `and` operator being applied to the function's arguments.

# Write your function here.
def And(bool1, bool2):
    return bool1 and bool2

print(And(True, False))    #> False
print(And(True, True))     #> True
print(And(False, True))    #> False
print(And(False, False))   #> False
