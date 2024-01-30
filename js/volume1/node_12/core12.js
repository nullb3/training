// This is the internal script for window prompts on Twelve, asking the user to input 3 different measurements form a box, and printing a result from that.

let width = window.prompt("What is the width of the box?");
width = width ? width : "";
let length = window.prompt("What is the length of the box?");
length = length ? length : "";
let height = window.prompt("What is the height of the box?");
height = height ? height : "";

window.alert(`The dimensions of the box are W: ${width} L: ${length} H: ${height}, for a total volume of ${width*length*height}.`);