#1.Addition Function: Write a function add(a, b) that takes two numbers and returns their sum.

# def add(a, b):
#     return a + b
# print("additions of number is :", add(5, 10))

#2.Subtraction Function: Write a function subtract(a, b) that takes two numbers and returns their difference.

# def subtract(a, b):
#      return a - b

# print("subtraction of number is :", subtract(10, 5))

#3.Multiplication Function: Write a function multiply(a, b) that takes two numbers and returns their product.

# def multiply(a, b):
#     return a * b

# print("multiplication of number is :", multiply(5, 10))

# #4.Division Function: Write a function divide(a, b) that divides two numbers and handles division by zero.

# def divide(a, b):
#     if b == 0:
#         return "Error: Division by zero is not allowed."
#     else:
#         return a / b

# print("division of number is :", divide(10, 5))

#5.Even or Odd: Write a function check_even_odd(n) that checks whether a given number is even or odd.

# def check_even_odd(n):
#     if n % 2 == 0:
#         return "Even number"
#     else:
#         return "Odd number"

# print("The number is :", check_even_odd(5))

#6.Positive, Negative or Zero: Write a function check_number(n) that checks whether a number is positive, negative, or zero.

# def check_number():
#     n = int(input("Enter a number: "))
#     if n > 0:
#         return "Positive number"
#     elif n < 0:
#         return "Negative number"
#     else:
#         return "Zero"

# print("The number is :", check_number())

#7.Square of a Number: Write a function square(n) that returns the square of a given number.

# def square(n):
#     return n * n

# print("The square of the number is :", square(5))

#8.Cube of a Number: Write a function cube(n) that returns the cube of a given number.

# def cube(n):
#     return n * n * n

# print("The cube of the number is :", cube(5))

#9.Find Maximum: Write a function find_max(a, b, c) that returns the largest among three numbers.

# def find_max(a, b, c):
#     if a >= b and a >= c:
#         return a
#     elif b >= a and b >= c:
#         return b
#     else:
#         return c

# print("The maximum number is :", find_max(10, 20, 15))

#10.Find Minimum: Write a function find_min(a, b, c) that returns the smallest among three numbers.

# def find_min(a, b, c):
#     if a <= b and a <= c:
#         return a
#     elif b <= a and b <= c:
#         return b
#     else:
#         return c

# print("The minimum number is :", find_min(10, 20, 15))

#11.Factorial: Write a function factorial(n) that calculates the factorial of a given number.

# def factorial(n):
#     if n < 0:
#         return "Error: Factorial is not defined for negative numbers."
#     elif n == 0 or n == 1:
#         return 1
#     else:
#         result = 1
#         for i in range(2, n + 1):
#             result *= i
#         return result

# print("The factorial of the number is :", factorial(8))

#12.Prime Number: Write a function is_prime(n) that checks whether a given number is prime.

# def is_prime(n):
#     if n <= 1:
#         return False
#     for i in range(2, int(n**0.5) + 1):
#         if n % i == 0:
#             return False
#     return True

# print("The number is prime:", is_prime(4))

#13.Multiplication Table: Write a function table(n) that prints the multiplication table of a given number from 1 to 10.

# def table(n):
#     for i in range(1, 11):
#         print(f"{n} x {i} = {n * i}")

# print("Multiplication table of 5:")
# table(5)

#14.Sum of Natural Numbers: Write a function sum_natural(n) that returns the sum of natural numbers from 1 to n.

# def sum_natural(n):
#     if n < 1:
#         return "Error: Input should be a natural number (greater than or equal to 1)."
#     else:
#         return n * (n + 1) // 2

# print("The sum of natural numbers up to 10 is:", sum_natural(10))

#15.Reverse a String: Write a function reverse_string(s) that returns the reverse of a given string.

# def reverse_string(s):
#     return s[::-1]

# print("The reverse of the string is:", reverse_string("Hello, World!"))

#16.Count Vowels: Write a function count_vowels(s) that counts the number of vowels in a given string.

# def count_vowels(s):
#     vowels = "aeiouAEIOU"
#     count = 0
#     for char in s:
#         if char in vowels:
#             count += 1
#     return count

# print("The number of vowels in the string is:", count_vowels("Hello, World!"))

#17.Palindrome Check: Write a function is_palindrome(s) that checks whether a given string is a palindrome.

# def is_palindrome(s):
#     s = s.lower().replace(" ", "")  # Convert to lowercase and remove spaces
#     return s == s[::-1]

# print("The string is a palindrome:", is_palindrome("A man a plan a canal Panama"))

#18.Calculate Area of Rectangle: Write a function rectangle_area(length, width) that returns the area of a rectangle.

# def rectangle_area(length, width):
#     return length * width

# print("The area of the rectangle is:", rectangle_area(5, 3))

#19.Celsius to Fahrenheit: Write a function celsius_to_fahrenheit(c) that converts Celsius temperature into Fahrenheit.

# def celsius_to_fahrenheit(c):
#     return (c * 9/5) + 32

# print("The temperature in Fahrenheit is:", celsius_to_fahrenheit(25))

#20.Count Digits: Write a function count_digits(n) that counts the total number of digits in a given integer.

def count_digits(n):
    n = abs(n)  # Handle negative numbers
    if n == 0:
        return 1  # Zero has one digit
    count = 0
    while n > 0:
        n //= 10
        count += 1
    return count

print("The number of digits in the number is:", count_digits(1234567))
