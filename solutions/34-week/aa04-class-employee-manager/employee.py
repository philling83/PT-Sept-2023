class Employee:
  def __init__(self, name, salary, title, manager=None):
    self._name = name
    self._salary = salary
    self._title = title
    if manager:
      manager.add_employee(self)
    self._manager = manager

  def calculate_bonus(self, multiplier):
    bonus = self._salary * multiplier

    return bonus

# __________SAMPLE TEST DATA PHASE 1__________ #

# goku = Employee("Goku", 9001, "Super Saiyan")
# print(vars(goku))                                 # prints instance properties

# __________SAMPLE TEST DATA PHASE 4__________ #

# goku = Employee("Goku", 9001, "Super Saiyan")
# print(goku.calculate_bonus(0.5))                  # 4500.5