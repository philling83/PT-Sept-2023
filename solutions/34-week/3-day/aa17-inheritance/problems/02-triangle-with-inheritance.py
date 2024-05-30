# Build off your RegularPolygon class and create another class called Triangle.
# The Triangle class should have functionality that calculates both the
# perimeter and the area of the triangle. The calculated values for both the
# perimeter and area should be assigned to respective instance properties on the
# Triangle class.

# The area of a triangle can be calculated with Heron's formula:
# √(s(s-a)(s-b)(s-c)), where s is the semi-perimeter of the triangle. The
# semi-perimeter is the perimeter divided by 2. The square root function sqrt()
# can be imported from the built-in math package.

# Write your class here.

from math import sqrt

class RegularPolygon:
    type = 'Polygon'
    def __init__(self, num_sides, length):
        if(num_sides < 3):
            raise Exception('sides must be greater than 3')
        self.num_sides = num_sides
        self.length = length

    def identify_polygon(self):
        poly_types = {
            3: "Triangle",
            4: "Quadrilateral",
            5: "Pentagon",
            6: "Hexagon",
            7: "Heptagon",
            8: "Octagon",
            9: "Nonagon",
            10: "Decagon"
            }

        if(self.num_sides > 10):
            self.type = f'Polygon with {self.num_sides} sides'
            return
        self.type = poly_types[self.num_sides]

    @classmethod
    def polygon_factory(cls, lst_tup):
        # res = []

        # for k, v in lst_tup:
        #     newPoly = RegularPolygon(k, v)
        #     res.append(newPoly)

        # return res
        return[cls(num_sides, length) for num_sides, length in lst_tup]

    @staticmethod
    def get_perimeter(polygon):
        return polygon.num_sides * polygon.length



class Triangle(RegularPolygon):
    def __init__(self, num_sides, length):
        if num_sides != 3:
            raise Exception("A triangle must have exactly three sides")
        super().__init__(num_sides, length)
        self.perimeter = super().get_perimeter(self)
        self.area = self.get_area()

    def get_area(self):
        semi = self.perimeter / 2

        s = semi - self.length

        return sqrt(semi * (s) * (s) * (s))


triangle_a = Triangle(3, 3)
print(triangle_a.perimeter) # 9
print(triangle_a.area) # 3.8971...

triangle_b = Triangle(3, 12)
print(triangle_b.perimeter) # 36
print(triangle_b.area) # 62.3538...

triangle_c = Triangle(4, 12)
# print(triangle_c.perimeter) # Exception: A triangle must have exactly three sides
