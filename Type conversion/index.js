// Type conversion - changing a variable into another variable type like string into Number, number into boolean 

// Useful when we input data it is in string format thus req if you wANT TO CONVERT into number 

let age;

age=window.prompt("Enter the age : ");


age= Number(age);
age+=1;

console.log(age, typeof age);

// if nothing is entered and cnonverted into bool then its value is false and if anything is there its value is true

let x="hello";
let y="hello";
let z="hello";

x=Number(x);
y=String(y);
z=Boolean(z);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof zok);