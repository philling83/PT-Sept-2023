# In this practice, you will be overriding built-in magic methods to iterate
# over a linked list. You will see a very simple Node & LinkedList class in the
# REPL.

# Implement another class called LinkedListIterator that uses the magic methods
# __init__, __iter__, and __next__ to allow for iteration over an instance of
# the LinkedList class with a for loop:

# - __init__ should initialize an instance property that keeps track of the
#   current node.
# - __iter__ must return an interator object, in other words an object that
#   implements __next__.
# - __next__ should return the value of the current node and then move the
#   current node to the next node in the linked list. If the current node is
#   None, raise the built-in `StopIteration` exception to stop iterating.

# We are iterating over the LinkedList class itself, so this class will also
# need a __iter__ method that returns an iterator object. Do not modify the
# `Node` class.

# Write your class here.


class Node:
    def __init__(self, value):
        self._value = value
        self._next = None

    def __repr__(self):
        return f'Node value {self._value}'

class LinkedList:
    def __init__(self):
        self._head = None
        self._tail = None
        self._length = 0

    def __iter__(self):
        return LinkListIterator(self._head)

    def add(self, value):
        new_node = Node(value)

        if self._head is None:
            self._head = new_node
        else:
            self._tail._next = new_node

        self._tail = new_node
        self._length += 1
        return self

class LinkListIterator:
    def __init__(self, currentNode):
        self._currentNode = currentNode

    def __iter__(self):
        return self

    def __next__(self):
        if not self._currentNode:
            raise StopIteration

        current = self._currentNode
        self._currentNode = self._currentNode._next

        return current


linked_list = LinkedList()
linked_list.add('node 1')
linked_list.add('node 2')
linked_list.add('node 3')
linked_list.add('node 4')
linked_list.add('node 5')

# this loop should print "Current node: node x" five times
# for each node in the linked list
for i in linked_list:
    print(f"Current node: {i}")
