# Welcome, this will be a simple calculator that will be able to do the 4 basic math operations.

import sys

num1 = float(input("Enter your first number: "))
num2 = float(input("Enter your second number: "))
operand = input("Enter your desired operand (+, -, *, /): ")


if operand == "+":
    operation = num1+num2
elif operand == "-":
    operation = num1-num2
elif operand == "*":
    operation = num1*num2
elif operand == "/":
    if num2 == 0:
        print("Dividing by 0 is not possible.")
        sys.exit()
    else:
        operation = num1/num2

print("The result is: "+str(operation))