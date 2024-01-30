let roseAmount = 70;
let lilyAmount = 50;
let tulipAmount = 120;
const roseUnitPrice = 8;
const lilyUnitPrice = 10;
const tulipUnitPrice = 2;
let roseValue = roseAmount*roseUnitPrice;
let lilyValue = lilyAmount*lilyUnitPrice;
let tulipValue = tulipAmount*tulipUnitPrice;
let total = roseValue+lilyValue+tulipValue 

console.log("Unit Prices: Rose: "+roseUnitPrice+" Lily: "+lilyUnitPrice+" Tulip: "+tulipUnitPrice);
console.log("Amounts: Rose: "+roseAmount+" Lily: "+lilyAmount+" Tulip: "+tulipAmount);
console.log("Values: Rose: "+roseValue+" Lily: "+lilyValue+" Tulip: "+tulipValue);
console.log("Total: "+total);

roseAmount=roseAmount-20;
lilyAmount=lilyAmount-20;

console.log("Amounts after reduction: Rose: "+roseAmount+" Lily: "+lilyAmount+" Tulip: "+tulipAmount);