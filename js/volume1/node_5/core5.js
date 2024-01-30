let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
let  e  =  1  /  0;
let  f  =  -Infinity;

let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;

let  x  =  9e3;
let  y  =  123e-5;

console.log("a: "+a);  //  ->  10  
console.log("b: "+b);  //  ->  16  
console.log("c: "+c);  //  ->  8  
console.log("d: "+d);  //  ->  2  
console.log("e: "+e);  //  ->  Infinity
console.log("f: "+f);  //  ->  -Infinity
console.log("n: "+n);  //  ->  NaN   
console.log("x: "+x);  //  ->  9000
console.log("y: "+y);  //  ->  0.00123

console.log("a is: "+typeof  a);  //  ->  number
console.log("b is: "+typeof  b);  //  ->  number
console.log("n is: "+typeof  n);  //  ->  number

