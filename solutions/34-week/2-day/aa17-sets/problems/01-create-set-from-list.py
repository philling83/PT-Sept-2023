# Given a list of items, create a set from the list. Note the differences with
# performing the same action in JavaScript.

# Write your code here.
lst = [1,2,3,4,4,5,6,6,7,8]

set_list = set()

set_list.update(lst)

print(set_list)

# (Hint: Does declaring a new set require any keywords like `new`?)
