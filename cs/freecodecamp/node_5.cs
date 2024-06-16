// concatenation and interpolation on C Sharp.
// interpolation is done by entering $ before the string and using {} each time you intend to enter a variable of any kind.

var greeting = "Hi";
var firstName = "Nullb";
var easterEgg = 3;

string message = greeting + " " + firstName + easterEgg + "!";
Console.WriteLine(message);

message = $"{greeting} {firstName}{easterEgg}!";
Console.WriteLine(message);

// it can be used with a literal chain too.

string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");

string projectName = "ACME";
string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";

Console.WriteLine($@"View English output:
  c:\Exercise\{projectName}\data.txt"+"\n");
Console.Write($@"{russianMessage}:
  c:\Exercise\{projectName}\ru-RU\data.txt");