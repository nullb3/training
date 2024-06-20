string[] myStrings = new string[2] { "I like pizza. I like roast chicken. I like salad", "I like all three of the menu choices" };
int periodLocation;
string trim;
string currentString;

foreach(string myString in myStrings){
    
    currentString = myString;
    periodLocation = currentString.IndexOf(".");

    while(periodLocation != -1){
        // first sentence is the string value to the left of the period location
        trim = currentString.Remove(periodLocation);

        // the remainder of currentString is the string value to the right of the location
        currentString = currentString.Substring(periodLocation + 1);

        // remove any leading white-space from myString
        currentString = currentString.TrimStart();

        // update the comma location and increment the counter
        periodLocation = currentString.IndexOf(".");

        Console.WriteLine(trim);   
    }

    trim = currentString.Trim();
    Console.WriteLine(trim);
    
}
