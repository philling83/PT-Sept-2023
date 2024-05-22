# Create a function that returns the index of a given letter in the string.

# Write your function here.
def index_of(str,char):

    return str.lower().index(char)
#! will throw an error if the substring is not found, so you need normalize the string into lower case.
print(index_of("Arm", "a"))  #> 0
print(index_of("Pie", "e"))  #> 2
print(index_of("Lucid", "i"))  #> 3
print(index_of("Obvious","u"))  #> 5
