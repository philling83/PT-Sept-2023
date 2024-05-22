# Create a function called `is_prime` that takes in a number and a variable that
# equates to 2. The function should return True/False if the number is a prime
# number. Bonus: Try to do this recursively.

# Write your solution here.
# understand
# input integer
# output boolean whether or not integer is a prime number or not

# plan

# base case / edge case is when int is < 2

# recursive step is to check if the current number is divisible by any numbers leading up to it

#

def is_prime(n, div = 2):
    if n < 2:
        return False

    if n == 2:
        return True

    if div == n:
        return True

    if n % div == 0:
        # print(n, div)
        # print('what')
        return False

    return is_prime(n, div + 1)



print(is_prime(1))  #> False
print(is_prime(2))  #> True
print(is_prime(3))  #> True
print(is_prime(5))  #> True
print(is_prime(9))  #> False
print(is_prime(15)) #> False
