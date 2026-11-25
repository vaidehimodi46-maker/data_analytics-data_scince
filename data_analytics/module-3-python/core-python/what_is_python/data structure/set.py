# A set is used to store multiple elements in a single variable
# A set is unordered (elements have no fixed position)
# A set provides mutable elements (elements can be added or removed)
# A set does not allow duplicate values
# A set is defined using curly brackets {}
# A set can store different data types together
# A set does not support indexing
# A set does not support slicing
# A set can also be created using set() constructor
# A set cannot store mutable elements like list or dictionary

#methods of set
# add()=Add one element
# update()=Add multiple elements
# remove()=Remove an element (error if absent)
# discard()=Remove an element (no error if absent)
# pop()=Remove an arbitrary element
# clear()=Remove all elements
# copy()=Copy a set
# union()=Combine two sets
# intersection()=Find common elements
# difference()=Find different elements

#List: Allows duplicate values.



#Tuple: Allows duplicate values but cannot be changed.



#Set: Does not allow duplicate values and has no indexing.

#Create a set
num= {1, 2, 3, 4, 5}
print(num)
print(type(num))

# Set with duplicate values
numbers = {10, 20, 10, 30, 20, 40}
print(numbers)


# Set with different data types
student = {1, "brijesh", 35, 75.5, True}
print(student)
print(type(student))


# Set using constructor
student = set(("brijesh", "rajesh", "jay"))
print(student)
print(type(student))


# Empty set
student = set()
print(student)
print(type(student))


# Iterate a set
student = {"brijesh", "rajesh", "jay"}

for i in student:
    print(i)
    print(type(i))


# Add element in set
student = {"brijesh", "rajesh", "jay"}
student.add("twinkle")
print(student)


# Add multiple elements using update()
student.update(["noorie", "kavish"])
print(student)


# Remove element using remove()
student.remove("jay")
print(student)


# Remove element using discard()
student.discard("rajesh")
print(student)


# Remove random element using pop()
student.pop()
print(student)


# Remove all elements
student.clear()
print(student)


# Find length of set
numbers = {10, 20, 30, 40}
res = len(numbers)
print(res)


# Copy set
res = numbers.copy()
print(res)


# Check element exists
print(20 in numbers)


# Check element does not exist
print(50 not in numbers)


# Union of two sets
a = {10, 20, 30}
b = {30, 40, 50}
res = a.union(b)
print(res)


# Intersection of two sets
a = {10, 20, 30}
b = {30, 40, 50}
res = a.intersection(b)
print(res)


# Difference of two sets
a = {10, 20, 30}
b = {30, 40, 50}
res = a.difference(b)
print(res)

