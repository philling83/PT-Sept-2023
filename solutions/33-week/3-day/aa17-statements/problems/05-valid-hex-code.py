# Create a function that determines whether a string is a valid hex code.

# A hex code must begin with a pound key # and is exactly 6 characters in
# length. Each character must be a digit from 0-9 or an alphabetic character
# from A-F. All alphabetic characters may be uppercase or lowercase.

# Write your function here.

# start "#"
# hex string has exactly 6 characters
# each char either a digit from 0-9 or a character a-f

def is_valid_hex_code(hex):
    postHash = hex[1:]
    validLetters = ['a', 'b', 'c', 'd', 'd', 'e', 'f']

    if not hex.startswith('#'):
        return False

    if not postHash.isalnum() or len(postHash) != 6:
        return False

    for char in postHash:
        if not char.isnumeric() and not char.lower() in validLetters:
            return False

    return True

print(is_valid_hex_code("#CD5C5C"))  #> True
print(is_valid_hex_code("#EAECEE"))  #> True
print(is_valid_hex_code("#eaecee"))  #> True

print(is_valid_hex_code("#CD5C58C"))
# Prints False
# Length exceeds 6

print(is_valid_hex_code("#CD5C5Z"))
# Prints False
# Not all alphabetic characters in A-F

print(is_valid_hex_code("#CD5C&C"))
# Prints false
# Contains unacceptable character

print(is_valid_hex_code("CD5C5C"))
# Prints False
# Missing #
