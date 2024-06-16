// C# handles operations in many ways, the writeline will temporaly, literally convert anything that's not an int into one.

string firstName = "Bob";
int widgetsSold = 7;
Console.WriteLine(firstName + " sold " + widgetsSold + " widgets.");

// The 7 is added to the string chain.
Console.WriteLine(firstName + " sold " + widgetsSold + 7 + " widgets.");

// C# will overcharge the operand inside that will deduce the desired operation, this will output the int 14 inside the string chain.
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");

int sum = 7 + 5;
int difference = 7 - 5;
int product = 7 * 5;
int quotient = 7 / 5;

Console.WriteLine("Sum: " + sum);
Console.WriteLine("Difference: " + difference);
Console.WriteLine("Product: " + product);
Console.WriteLine("Quotient: " + quotient);

// For the proper quotient to be output, it needs to be handled decimally, which requires the data type and AT LEAST 1 NUMBER WITH THE DECIMAL TREAT. 
decimal decimalQuotient = 7m / 5;
Console.WriteLine($"Decimal quotient: {decimalQuotient}");

// Data types can be temporally converted into other ones:
int first = 7;
int second = 5;
decimal quotient = (decimal)first / (decimal)second;
Console.WriteLine(quotient);

// Interpolation allows for operations too.
Console.WriteLine($"Modulus of 200 / 5 : {200 % 5}");
Console.WriteLine($"Modulus of 7 / 5 : {7 % 5}");

int value = 0;     // value is now 0.
value = value + 5; // value is now 5.
value += 5;        // due +=, value is now 10.
value--;           // due --, value is now 9.
value++;           // due ++, value is now 10.
value -= 5;        // due -=, value is now 5.
value *= 5;        // due +=, value is now 25.
value /= 5;        // due +=, value is now 5.
Console.WriteLine("Value equals: " + value);

int value2 = 1;
value2++;
Console.WriteLine("First: " + value2);
Console.WriteLine($"Second: {value2++}"); // THE INCREMENT COMES AFTER PRINTING IT
Console.WriteLine("Third: " + value2);
Console.WriteLine("Fourth: " + (++value2)); // THE INCREMENT COMES BEFORE PRINTING IT

int fahrenheit = 94;
float celcius = (fahrenheit - 32) * 5/9f;
Console.WriteLine("Current Celcius temperature is "+celcius);

int result = 3 + 1 * 5 / 2; 
Console.WriteLine(result); //C# follows PEMDAS and will literally NOT round to satisfy the int type.