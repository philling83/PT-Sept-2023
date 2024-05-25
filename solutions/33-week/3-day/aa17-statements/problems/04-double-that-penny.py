# It's time to practice writing a `while` loop in Python. As you've seen, the
# syntax is similar to JavaScript, except using `:` at the end of the loop
# definition and indentation for the block of code to run with that loop.

# Write a while loop to calculate the total number of pennies
# resulting from each doubling. End the loop when the value is over a million
# dollars.

print("** Doubling Penny **")

# How many times would a penny need to double to generate a million dollars?
count = 0
total = 0

# STEP 2: Write the while loop
while total < 1000000:
    if total == 0:
        total = .01
    total *= 2
    count += 1
print('Double', count, 'times')

# How much money has been generated at that point?
print('${:,}'.format(total))
