# Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

# Write your function here.

def long_burp(num):
    return 'Bu'+ 'r'*num + 'p'

print(long_burp(3))  #> "Burrrp"
print(long_burp(5))  #> "Burrrrrp"
print(long_burp(9))  #> "Burrrrrrrrrp"
