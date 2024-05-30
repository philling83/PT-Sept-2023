# Implement a class called Quadrilateral with a constructor method that
# initializes two instance properties: length and width.

# Implement a second class called Square that inherits from Quadrilateral.

# Create a constructor method in the `Square` class that initializes two
# instance properties `length` and `width` -- only if the two values passed into
# the constructor are equal.

# If the two values are not equal, raise an Exception with the message "A square
# must have an equal length and width."

# If the values are equal, use the super() function to initialize the same two
# instance properties from the Quadrilateral class's constructor method.

# Write your class here.

class Quadrilateral:
    def __init__(self, length, width):
        self.length = length
        self.width = width

class Square(Quadrilateral):
    def __init__(self, length, width):
        if length == width:
            super().__init__(length, width)
        else:
            raise Exception('A square must have an equal length and width.')



quad = Quadrilateral(20, 10)
print(f"{quad.length}, {quad.width}") # 20, 10

square = Square(10, 10)
print(f"{square.length}, {square.width}") # 10, 10

not_square = Square(5, 10) # Exception: A square must have an equal length and width.
