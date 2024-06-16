// escaping:
// \n jumps a line. 
// \t tabulates.
// \anyspecialchar lets you use anyspecialchar.
// \u adds an unicode symbol, must add the 4 digits.

Console.WriteLine("Hello\nWorld!\nHello\tWorld!\nHello \"World\"!");
Console.Write("c:\\source\\repos");

Console.WriteLine("Generating invoices for customer \"Contoso Corp\" ...\n");
Console.WriteLine("Invoice: 1021\t\tComplete!");
Console.WriteLine("Invoice: 1022\t\tComplete!");
Console.WriteLine("\nOutput Directory:\t");
Console.Write(@"c:\invoices");

// To generate Japanese invoices:
// Nihon no seikyū-sho o seisei suru ni wa:
Console.Write("\n\n\u65e5\u672c\u306e\u8acb\u6c42\u66f8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\uff1a\n\t");
// User command to run an application
Console.WriteLine(@"c:\invoices\app.exe -j");

//@ lets you chain a literal block of lines in a single string.

Console.WriteLine(@"    c:\source\repos    
        (this is where your code goes)");