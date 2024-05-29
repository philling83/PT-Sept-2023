# Given two strings, write a function, `remove_repeats` that returns a set of
# the uncommon characters from both strings. Do NOT use the `^` operator.

# Write your code here.
def remove_repeats(str1, str2):
    all = set(str1 + str2)
    common = set(str1) & set(str2)
    res = set()

    for char in all:
        if char not in common:
            res.add(char)

    return res

str1 = 'aloha'
str2 = 'bonjour'

print(remove_repeats(str1, str2))    # {'r', 'a', 'l', 'h', 'n', 'b', 'j', 'u'}
