# Create a function that uses DeMorgan's Law to get the expected `True`/`False`
# statement.
#! not(a and b) -> not a or not b
# Write your function here.
def de_morgans_law(val1, val2):
    return not(val1 and val2)

print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False #! integers when paired with not / or it evaluates truthy values so not 2 would be false and not 0 would be true
print(de_morgans_law(2, 0)) # True
