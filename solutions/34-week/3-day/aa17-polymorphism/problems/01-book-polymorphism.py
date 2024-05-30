# Implement a class called `Book` with the following:

# 1. A constructor that takes 3 parameters and initializes three instance
#    properties: title, author, and year.

# 2. An instance method called description that returns the following formatted
#    string: "{title} is written by {author} and was published in {year}.".

# Implement a second class called NonfictionBook that inherits from the Book
# class and implements the following methods:

# 1. A constructor that takes 4 parameters and uses super() to reuse the Book
#    class constructor method to initialize the instance properties title,
#    author, and year. The constructor should also initialize a fourth instance
#    property called `subject`.

# 2. An instance method called description that will override the parent class
#    Book's method of the same name. For the NonfictionBook class, this method
#    should return the following formatted string: "{title} is written by
#    {author} and was published in {year}. It is a nonfiction book about
#    {subject}."

# Write your class here.

class Book:
    def __init__(self, title, author, year):
        self.title = title
        self.author = author
        self.year = year

    def description(self):
        return f'{self.title} is written by {self.author} and was published in {self.year}'


class NonfictionBook(Book):
    def __init__(self, title, author, year, subject):
        super().__init__(title, author, year)
        self.subject = subject

    def description(self):
        return f'{self.title} is written by {self.author} and was published in {self.year}. It is a nonfiction book about {self.subject}'

book = Book("Alice in Wonderland", "Lewis Carroll", 1865)
print(book.description()) # Alice in Wonderland is written by Lewis Carroll and was published in 1865.

nonfiction = NonfictionBook("Cosmos", "Carl Sagan", 1980, "cosmic evolution and human civilization")
print(nonfiction.description()) # Cosmos is written by Carl Sagan and was published in 1980. It is a nonfiction book about cosmic evolution and human civilization.
