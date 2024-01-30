let boolean1 = true;
let number1 = 99;
let bigInt1 = 99n;
let string1 = "Hi";

let boolean2 = Boolean(true);
let number2 = Number(99);
let bigInt2 = BigInt(99);
let string2 = String("Hi");

let undefined1 = undefined;

//Proof the types of variables 

console.log(`${boolean1} is a ${typeof boolean1}.`);
console.log(`${boolean2} is a ${typeof boolean2}.`);
console.log(`${number1} is a ${typeof number1}.`);
console.log(`${number2} is a ${typeof number2}.`);
console.log(`${bigInt1} is a ${typeof bigInt1}.`);
console.log(`${bigInt2} is a ${typeof bigInt2}.`);
console.log(`${string1} is a ${typeof string1}.`);
console.log(`${string2} is a ${typeof string2}.`);
console.log(`${undefined1} is a ${typeof undefined1}.`);

//Convert and proof the variables

let convertion = String("1234");
console.log(`${convertion} is a ${typeof convertion}.`);
console.log(`${Number(convertion)} is a ${typeof Number(convertion)}.`);
console.log(`${BigInt(Number(convertion))} is a ${typeof BigInt(Number(convertion))}.`);
console.log(`${Boolean (BigInt(Number(convertion)))} is a ${typeof Boolean (BigInt(Number(convertion)))}.`);

//Proof the sum of variables

console.log(`${boolean1+boolean2} is a ${typeof(boolean1+boolean2)}`);
console.log(`${number1+number2} is a ${typeof (number1+number2)}`);
console.log(`${bigInt1+bigInt2} is a ${typeof (bigInt1+bigInt2)}`);
console.log(`${string1+string2} is a ${typeof (string1+string2)}`);
console.log(`${undefined1+undefined1} is a ${typeof (undefined1+undefined1)}`);

//Proof the sum of different values (convert)

console.log(`${boolean1+number2} is a ${typeof(boolean1+number2)}`);
console.log(`${BigInt(number1)+bigInt2} is a ${typeof (BigInt(number1)+bigInt2)}`);
console.log(`${bigInt1+BigInt(number2)} is a ${typeof (bigInt1+BigInt(number2))}`);
console.log(`${string1+undefined1} is a ${typeof (string1+undefined1)}`);
console.log(`${undefined1+boolean2} is a ${typeof (undefined1+boolean2)}`);

//Get 43 without removing quotations

const str = 42 + "1";
const str43 = 42 + Number("1"); //42 + + "1" also works

console.log("str is "+str);
console.log("str43 is "+str43); 