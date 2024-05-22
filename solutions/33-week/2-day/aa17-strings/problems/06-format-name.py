# Create a function that takes in two values, a first name, `first` and a last
# name, `last`. Your function should return the statement "Hi, my name is
# _______ _______" with the first name and last name values in the the
# statement.

# Write your function here.
def format_name(first, last):
    return f"Hi, my name is {first} {last}"

print(format_name("Alex", "Ambrose"))  #> Hi, my name is Alex Ambrose
print(format_name("Amy", "Mayer"))     #> Hi, my name is Amy Mayer
print(format_name("Rick", "Morty"))    #> Hi, my name is Rick Morty
