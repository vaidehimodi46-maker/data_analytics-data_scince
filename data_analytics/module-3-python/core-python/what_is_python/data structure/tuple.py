# A tuple is used to store multiple elements in a single variable
# A tuple is ordered (elements have index numbers)
# A tuple provides immutable elements (elements cannot be changed)
# A tuple allows duplicate values
# A tuple is defined using round brackets ()
# A tuple can store any data types (int, float, string, etc.)
# A tuple can store different data types together
# A tuple index starts from 0
# A tuple can also be created using tuple() constructor
# A tuple with one element requires a comma (,)

#methods of tuple
# count() = Count elements.
# index() = Find element position.

#Create a tuple
# student = ("vaidehi", "tanvi", "noorie", "khushali")
# print(student)
# print(type(student))
# print(student[0])
# print(student[1])

#Tuple with different data types
# student = (1, "vaidehi", 20, 75.5, True)
# print(student)
# print(type(student))

#Tuple using constructor
# student = tuple(("vaidehi", "tanvi", "khushi"))
# print(student)
# print(type(student))

#Single element tuple
# number = (10,)
# print(number)
# print(type(number))

#Iterate a tuple
# student = ("vaidehi", "tanvi", "noorie", "khushali")
# for i in student:
#     print(i)

#Tuple methods
# student = ("vaidehi", "tanvi", "noorie", "khushali", "tanvi")
# #Count elements
# res = student.count("tanvi")
# print(res)
# #Find element position
# res = student.index("khushali")
# print(res)

#Find length of tuple
# number = (10, 20, 30, 40)
# res = len(number)
# print(res)

#Access tuple using index
# student = ("vaidehi", "tanvi", "noorie", "khushali")
# print(student[0])
# print(student[-1])
# print(student[2])

#Join two tuples
# tuple1 = ("a", "b", "c")
# tuple2 = (1, 2, 3)
# tuple3 = tuple1 + tuple2
# print(tuple3)

#Repeat a tuple
# number = (10, 20, 30)
# res = number * 3
# print(res)

#Convert tuple into list
student = ("vaidehi", "tanvi", "noorie", "khushali")
student_list = list(student)
print(student_list)
print(type(student_list))


