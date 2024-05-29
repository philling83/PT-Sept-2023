# It's time to put your knowledge of lists, tuples and dictionaries together. In
# this exercise, you will complete the basic statistics calculations for
# - Minimum
# - Maximum
# - Mean
# - Median
# - Mode

# Follow the instructions in the code comments. Be sure to test your work by
# running your code!

# You will likely need to look at the Python documentation to complete this
# activity. https://docs.python.org/3/library/stdtypes.html#mapping-types-dict
# (Search 'dictionary', go to 'Built-in Types', scroll down to 'Mapping Types -
# dict'.)

# After Step 1, you should see this in the terminal:
# - ('min', 'max', 'mean', 'median', 'mode')
# - (1, 9, 5.0, None, None)
# - (12, 99, 43.666666666666664, None, None)

# In Step 2, the expected median values are 5 and 35.5. Median is the middle
# element. When the list has an odd length it's as easy as taking the value at
# the middle index on the sorted list. When the length is even, it's the average
# of the two numbers closest to the middle.

# In Step 3, the expected mode values are 1 and 23. Mode is the element which is
# most repeated.

# BONUS A is really whatever you want to do. It is recommended that you add
# fringe cases (e.g. a list of a single number like zero or all numbers are the
# same).

# BONUS B is to revisit the mode function and return nothing if more than one
# number is repeated the most number of times (like sample1). When successful,
# this would result in (1, 9, 5.0, 5, None) for the first call to analyze.

# STEP 1: Complete analyze function to return 5 values:
#    - minimum
#    - maximum
#    - mean (a.k.a. average)
#    - median (center point)
#    - mode (most repeated)
def analyze(nums):
    res = {}
    res['max'] = max(nums)
    res['min'] = min(nums)
    res['avg'] = sum(nums)/len(nums)
    res['median'] = median(nums)

    return

# STEP 2: Complete median function to return center number
#         WITHOUT using built-in function
def median(nums):
    lst = sorted(list(nums))
    midIndex = len(list) // 2

    if lst % 2 == 1:
        return lst[midIndex]

    return lst[midIndex] + lst[midIndex - 1] / 2

# STEP 3: Complete mode function to return most-repeated number
#         WITHOUT using built-in function
# BONUS B: Catch special case where more than one value repeats the most
def mode(nums):
    lstNums = list(nums)
    num_dict = {}

    for num in lstNums:
        if num not in num_dict:
            num_dict[num] = 1
        else:
            num_dict[num] += 1

    max = 0
    res = ''

    print(num_dict)
    for key in num_dict:
        if num_dict[key] > max:
            max = num_dict[key]
            print('max', max)
            res = key
            # print('key', key)

    # print('key', res)
    return res

# DO NOT EDIT - sample data for checking your work
sample1 = 1,2,3,4,5,6,7,8,9
sample2 = [37,45,23,65,75,34,23,23,23,65,12,99]

print(mode(sample2))
# print(('min', 'max', 'mean', 'median', 'mode'))
# print(analyze(sample1))
# print(analyze(sample2))

# BONUS A: Print more samples as you see fit
