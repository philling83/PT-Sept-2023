from employee import Employee

class Manager(Employee):
  def __init__(self, name, salary, title, manager=None):
    super().__init__(name, salary, title, manager)
    self._employees = []

  def add_employee(self, employee):
    self._employees.append(employee)
    return
  
  def calculate_bonus(self, multiplier):
    return (self._salary + self.total_subsalary()) * multiplier

  def total_subsalary(self):
    total_salary = 0

    for employee in self._employees:
      if isinstance(employee, Manager):
        total_salary += employee._salary + employee.total_subsalary()
      else:
        total_salary += employee._salary

    return total_salary


# __________SAMPLE TEST DATA PHASE 2__________ #

# master_roshi = Manager("Master Roshi", 9000, "Turtle Hermit")
# print("Before: ", vars(master_roshi))

# goku = Employee("Goku", 9002, "Super Saiyan")
# krillin = Employee("Krillin", 5000, "Milkman")
# yamcha = Employee("Yamcha", 6000, "Z Fighter")

# master_roshi.add_employee(goku)
# master_roshi.add_employee(krillin)
# master_roshi.add_employee(yamcha)
# print("After: ", vars(master_roshi))
# print("Employees: ", [employee._name for employee in master_roshi._employees])

# __________SAMPLE TEST DATA PHASE 3__________ #

# master_roshi = Manager("Master Roshi", 9000, "Turtle Hermit")
# print("Before: ", vars(master_roshi))

# goku = Employee("Goku", 9002, "Super Saiyan", master_roshi)
# krillin = Employee("Krillin", 5000, "Milkman", master_roshi)
# yamcha = Employee("Yamcha", 6000, "Z Fighter", master_roshi)

# print("After: ", vars(master_roshi))
# print("Employees: ", [employee._name for employee in master_roshi._employees])

# __________SAMPLE TEST DATA PHASE 4__________ #

# master_mutaito = Manager("Master Mutaito", 10000, "Roshi's Master")
# master_roshi = Manager("Master Roshi", 9000, "Turtle Hermit", master_mutaito)

# goku = Employee("Goku", 9002, "Super Saiyan", master_roshi)
# krillin = Employee("Krillin", 5000, "Milkman", master_roshi)
# yamcha = Employee("Yamcha", 6000, "Z Fighter", master_roshi)

# print(master_mutaito.calculate_bonus(0.5))                        # 19501.0