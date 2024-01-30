// Write a calculator that can use sum, sub, mul, div. It will ask for 2 numberS and a character.

let number1 = Number(prompt("Please, type your first number", 0));
let number2 = Number(prompt("Please, type your second number", 0));
let operand = String(prompt("Please, type your desired operand: +, -, * or /."));
let type = String();
let result = Number();

if (operand == "+"){
    type = "sum";
    result = number1+number2;
}else if (operand == "-"){
    type = "difference";
    result = number1-number2;
}else if (operand == "*"){
    type = "multiplication";
    result = number1*number2;
}else if (operand == "/"){
    type = "division";
    result = number1/number2;
}else{
    alert(`Wrong operand detected, restart the calculator.`); // TO DO, ASK FOR ANOTHER OPERAND FROM THE ENABLED ONES.
}

alert(`The desired operation is a ${type} and the result is ${result}.`);