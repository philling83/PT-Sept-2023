# Given a list of `Cat` objects (dictionaries representing cats), write a
# function `cat_verify` that uses the `all()` built-in function to determine if
# all cats are the same breed. Then use `any()` to determine if any of them are
# up for adoption. Return the result as a tuple.

# The `breed` represents the cat's breed, and `adopted` represents whether the
# cat bas been adopted already or not.

cat_list = [
    {
        "name": "Lenny",
        "breed": "Ragdoll",
        "adopted": False
    },
    {
        "name": "Roger",
        "breed": "Siamese",
        "adopted": False
    },
    {
        "name": "Katya",
        "breed": "Persian",
        "adopted": True
    }
]

# Write your code here.
def cat_verify(cats):
    cat_breed = all(map(lambda cat: cat['breed'] == cats[0]['breed'], cats))

    adopt_cat = any([cat['adopted'] for cat in cats])

    return (cat_breed, adopt_cat)

print(cat_verify(cat_list))    # False
