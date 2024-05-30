# Implement a class called RegularPolygon with the following:

# 1. A constructor method that initializes two instance properties: the number
#    of sides for the polygon and the length of each side. If the number of
#    sides is less than 3, raise an Exception with the message "A polygon must
#    have at least 3 sides."

# 2. </li><li>A class variable called type set to an inital value of "Polygon"

# 3. An instance method called identify_polygon that identifies the type of a
#    polygon based on its number of sides. This method should set the type class
#    variable for this instance to the identified type based on the logic in the
#    starter repl.

# 4. A class method called polygon_factory that is a factory function for
#    creating instances of the class. This method should take a list of tuples
#    as an argument, where each tuple contains the (num_sides, length) for each
#    RegularPolygon instance to be created. The method should return a list of
#    all the class instances created.

# 5. A static method called get_perimeter that calculates and returns the
#    perimeter of a polygon. This method should take an instance of the
#    `RegularPolygon` class and return the calculated perimeter. (The perimeter
#    of a regular polygon is the product of the number of sides multiplied by
#    the length of each side.)

# Polygons
# 3 sides - Triangle
# 4 sides - Quadrilateral
# 5 sides - Pentagon
# 6 sides - Hexagon
# 7 sides - Heptagon
# 8 sides - Octagon
# 9 sides - Nonagon
# 10 sides - Decagon
# Greater than 10 sides - Polygon with n sides

class RegularPolygon:

    type = "Polygon"

    def __init__(self, num_sides, length):
        if num_sides < 3:
            raise Exception('sides cannot be less than 3')
        self.num_sides = num_sides
        self.length = length

    def identify_polygon(self):
        poly_types ={
            3: "Triangle",
            4: "Quadrilateral",
            5: "Pentagon",
            6: "Hexagon",
            7: "Heptagon",
            8: "Octagon",
            9: "Nonagon",
            10: "Decagon"
        }
        if self.num_sides > 10:
            self.type = f'Polygon with {self.num_sides} sides'
            return
        self.type = poly_types[self.num_sides]

    @classmethod
    def polygon_factory(cls, lst_tup):
        return[cls(num_sides, length) for num_sides, length in lst_tup]

    @staticmethod
    def get_perimeter(polygon):
        return polygon.num_sides * polygon.length

pentagon = RegularPolygon(5, 5)
octagon = RegularPolygon(8, 10)
dodecagon = RegularPolygon(12, 1)

print(f"{pentagon.num_sides} sides of length {pentagon.length}") # 5 sides of length 5
print(f"{octagon.num_sides} sides of length {octagon.length}") # 8 sides of length 10
print(f"{dodecagon.num_sides} sides of length {dodecagon.length}") # 12 sides of length 1

pentagon.identify_polygon()
octagon.identify_polygon()
dodecagon.identify_polygon()

print(pentagon.type) # Pentagon
print(octagon.type) # Octagon
print(dodecagon.type) # Polygon with 12 sides

print(RegularPolygon.get_perimeter(pentagon)) # 25
print(RegularPolygon.get_perimeter(octagon)) # 80
print(RegularPolygon.get_perimeter(dodecagon)) # 12

print(RegularPolygon.polygon_factory([(5, 5), (3, 2), (8, 10)])) # prints a list of 3 RegularPolygon objects

# not_a_polygon = RegularPolygon(2, 5) # Exception: A polygon must have at least 3 sides.
