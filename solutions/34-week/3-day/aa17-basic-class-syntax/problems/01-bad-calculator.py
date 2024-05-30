# Implement a class called `BadCalculator` that contains:

# 1. A constructor that takes in two values and initializes two instance
#    properties: num1 and num2

# 2. An instance method called change_nums that accepts two values and changes
#    the values of the instance properties to those values.

# 3. An instance method called mult_nums that returns the value of applying the
#    arithmetic operator * to the two instance properties.

# 4. An instance method called div_nums that returns the value of applying / to
#    the two instances properties. It should divide the first number by the
#    second, and return a string explaining that it cannot perform this
#    operation if it is asked to divide by zero.

# 5. A __repr__ method that returns the string:
#   "<Bad Calculator - can only do {num1}*{num2} and {num1}/{num2}>"

# Declare your class here
class BadCalculator:
    def __init__(self, num1, num2):
        self.num1 = num1
        self.num2 = num2

    def change_nums(self, val1, val2):
        self.num1 = val1
        self.num2 = val2

    def mult_nums(self):
        return self.num1 * self.num2

    def div_nums(self):
        if self.num2 == 0:
            return "Sorry, I cannot divide by zero"

        return self.num1 / self.num2

    def __repr__(self):
        return f'Bad Calculator - can only do {self.num1} * {self.num2} and {self.num1} / {self.num2}'


pair_1 = BadCalculator(15, 3)
print(pair_1) # <Bad Calculator - can only do 15*3 and 15/3>

print(pair_1.mult_nums()) # 45
print(pair_1.div_nums()) # 5.0

pair_1.change_nums(4, 0)
print(pair_1) # <Bad Calculator - can only do 4*0 and 4/0>

print(pair_1.mult_nums()) # 0
print(pair_1.div_nums()) # Sorry, I cannot divide by zero
