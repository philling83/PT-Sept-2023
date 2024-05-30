# Python does not, by default, do automatic typecasting when "adding" a string
# and a number together. For example, print("1" + 2) will raise a TypeError.
# However, we can override the magic method __add__ in a class to allow for this
# functionality.

# Implement a class called StrNumeric with the following:

# 1. A constructor method that takes a parameter called value and initializes an
#    instance property called val. We will be typecasting this value as an int
#    later on, so we need to ensure that the typecasting will be possible. Use
#    the built-in function isinstance to check if the value passed in is a str
#    and the built-in str.isnumeric() method to ensure that all characters in
#    the string value are numeric. If the value is a string, but has non-numeric
#    characters, raise an Exception with the message "String value can have only
#    numeric characters.". Otherwise, set the instance property to this value.

# 2. An implementation of the __add__ magic method. This method will take in
#    self (as does every instance method) along with another parameter called
#    thing_2. This method should cast both self.val and thing_2 as ints and
#    return their sum.

# Write your class here.

class StrNumeric:
    def __init__(self, value):
        if not isinstance(value, str) or not value.isnumeric():
            raise Exception("String value can have only numeric characters.")

        self.val = value

    def __add__(self, thing_2):
        return int(self.val) + int(thing_2)


str_1 = StrNumeric("1")
print(str_1 + 2) # 3

str_44 = StrNumeric("44")
print(str_44 + 6) # 50

num_44 = 44
print(num_44 + 6) # 50

not_numeric = StrNumeric("1.2") # Exception: String value can have only numeric characters.
