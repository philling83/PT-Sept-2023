# RegEx is a powerful tool that can be used to pattern match and validate
# values. In Python, the built in `re` module is used to work with regular
# expressions. See the docs at https://docs.python.org/3/library/re.html for a
# quick intro into how to use the module.

# Write a function, `valid_zip_code` that accepts a string and checks to see if
# it's a valid U.S. zip code. A valid U.S. zip code follows the following rules:
# - Mandatory 5 digits
#   - Ranging from 0-9
# - Optional 4 digits for area granularity
#   - Ranging from 0-9
# - Mandatory 5 and optional 4 separated by a hyphen
#   - Hyphen not present if optional 4 isn't present

# If the zip code matches, return the zip code. If not, return an error text message.

import re

# Write your solution here.
def valid_zip_code(zip):
    pattern = "\d{5}(-\d{4})?$"
    is_valid = re.search(pattern, zip)
    if is_valid:
        return zip
    else:
        return "The zip code you entered is invalid"




zip1 = '47243'
zip2 = '23128-'
zip3 = '01237-1238'
zip4 = '91374-31'
zip5 = '1321-9883'
zip6 = '6320'

print(valid_zip_code(zip1))     # '47243'
print(valid_zip_code(zip2))     # "The zip code you entered is invalid"
print(valid_zip_code(zip3))     # '01237-1238'
print(valid_zip_code(zip4))     # "The zip code you entered is invalid"
print(valid_zip_code(zip5))     # "The zip code you entered is invalid"
print(valid_zip_code(zip6))     # "The zip code you entered is invalid"
