# Now it's time to have some fun with strings. The starting code includes 6 steps
# for you take to practice what you've learned about strings in Python.

# DO NOT EDIT - Example of a multiline string
print('''
Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

It even includes blank lines. :)
''')

# STEP 1: Write your own print statement on multiple lines
print('''
    MULTI LINE

    STRING
''')

# DO NOT EDIT
print('***BEFORE***')

# STEP 2: Copy the original multiline print and make it show
# without blank lines at the beginning and the end
print('''Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

It even includes blank lines. :)''')

# DO NOT EDIT
print('***AFTER***')
print()

# STEP 3: Uncomment the following print command and fix the error
print('What\'s up, doc?')


# STEP 4: Uncomment the following print command and fix the error
print('The poet used "day" to mean "life".')


# STEP 5: Uncomment the following print command and fix the error
# print('The bunny said, "Let's go to the library."')


# DO NOT EDIT - Sample debug for an equality operation
num = 5
str = "5"
print('num {0}, str {1}, equal? {2}'.format(num, str, num==str))

# STEP 6: Rewrite the print above in an alternate way using f' on the string
print(f'num {num}, str{str}, equal? {num == str}')
