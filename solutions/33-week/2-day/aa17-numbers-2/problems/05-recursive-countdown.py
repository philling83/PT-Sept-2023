# Create a function that recursively prints a countdown from 5 to 1.

# Write your function here.

def recursive_countdown(n):
    if n < 1:
        return
    print(n)
    
    return recursive_countdown(n-1)

recursive_countdown(5) #> 5 4 3 2 1
