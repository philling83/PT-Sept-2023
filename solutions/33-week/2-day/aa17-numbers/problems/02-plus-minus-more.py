# Now it's time to explore numbers in Python: int and float. Follow the
# directions provided in the starting code. In total, you should add 14 print
# commands to complete this activity.

# DO NOT EDIT - Setup for exploration
# tiny number
int1 = 5
float1 = 5.0
# small number
int2 = 135
float2 = 135.246
# huge number known as `googol`
int3 = 10**100
float3 = 10.0**100

# STEP 1: Print and compare tiny numbers
print('** FIVE **')

# 1A: Print int1
print(int1)

# 1B: Print float1
print(float1)

# 1C: Print equality comparison (==) between int1 and float1
print(int1 == float1)

# STEP 2: Print and compare huge numbers
print('\n** GOOGOL **')

# 2A: Print int3
print(int3)

# 2B: Print float3
print(float3)
# 2C: Print equality comparison (==) between int1 and float3
print(int3 == float3)
# STEP 3: Compare results of integer division in all 4 possible combinations
print('\n** INTEGER DIVISION **')

# 3A: Print int2 divided by int1 (//)
print(int2 // int1) #! both same type output will be int

# 3B: Print float2 divided by float1 (//)
print(float2 // float1) #! both same type output will be float
# 3C: Print float2 divided by int1
print(float2 // int1) #! two different number types, the more complicated one will print so float
# 3D: Print int2 divided by float1
print(int2 // float1)
# STEP 4: Compare results of mod in all 4 possible combinations
print('\n** MOD **')
# Copy/paste 4 statements from STEP 3 and switch operator to mod (from // to %)

# 4A: Print int2 mod int1 (%)
print(int2 % int1) #! both same type output will be int
# 4B: Switch both numbers to float
print(float2 % float1) #! both same type output will be float
# 4C: Float divided by int
print(float2 % int1) #! two different number types, the more complicated one will print so float
# 4D: Int divided by float
print(int2 % float1)
