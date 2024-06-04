phrase = "The \"Yeti\" is a legendary animal"
reminder = phrase + " and the \\ symbol is called backslash.\n"
REMINDER = reminder.upper()
pointer_number = 41
pointed_letters = "\\ SYMBOL"

print(REMINDER)
print("It's "+str((REMINDER.isupper()))+" that the previous sentence is uppercased.\n\nBy the way, the sentence feaures a length of "+str(len(REMINDER))+".")
print("The position number "+str(pointer_number)+" points to "+REMINDER[pointer_number]+" in the sentence.")
print(pointed_letters+" is located at position number "+str(REMINDER.index(pointed_letters))+" in the sentence.")
print("\n")
print(phrase.replace("Yeti", "Unicorn")+".")