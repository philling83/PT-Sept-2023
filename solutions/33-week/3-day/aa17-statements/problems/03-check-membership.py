# You are a bouncer at a club and you have a list of approved guests. Write a
# function `check_membership` that accepts the approved guests list `guest_list`
# and a name `guest_name` as arguments, and checks if the `guest_name` is on the
# list.

# Write your solution here.
def check_membership(guest_name, guest_list):
    return guest_name in guest_list

guest_list = ["George", "Anthony", "Susan", "Tiffany"]
print(check_membership("Sally", guest_list))        # False
print(check_membership("Anthony", guest_list))      # True
