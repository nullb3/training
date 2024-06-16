// See https://aka.ms/new-console-template for more information

Random dice = new Random();

int rolld6 = dice.Next(1, 6);
int rolld12 = dice.Next(1, 12);
int rolld20 = dice.Next(1, 20);

Console.WriteLine($"D6 rolls: {rolld6}");
Console.WriteLine($"D12 rolls: {rolld12}");
Console.WriteLine($"D20 rolls: {rolld20}");