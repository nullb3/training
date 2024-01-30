// This string of code outputs a Bingo result whenever the number registered is more than 90 but less than 110 (Conditional). Else, it will output a Miss.

let number = prompt("Enter the number!", 0);

if (number > 90 && number < 110){
    alert("Bingo!");
}else{
    alert("Miss.");
};

// This string of code outputs a Bingo result whenever the number registered is more than 90 but less than 110 (Ternary). Else, it will output a Miss.

let number2 = prompt("Enter the number!", 0);

let msg = (number2 > 90 && number2) < 110 ? ("Bingo!") : ("Miss.");
alert(msg);

// Write a calculator that can use sum, sub, mul, div. It will ask for 2 number and a character.