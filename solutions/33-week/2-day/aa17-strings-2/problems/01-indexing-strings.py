# Create a function called `index_string` that takes a string as an argument and
# returns that string from the index of 3 to the end of the string.

# Write your function here.
def index_string(str):
    return str[3:]

#! indexing [index:] everything after the 3rd index
#! indexing [1: 4] everything after 1st index up to but not including 4th index

print(index_string("Alchemy"))     #> hemy
print(index_string("Ridiculous"))  #> iculous
print(index_string("Serendipity")) #> endipity
