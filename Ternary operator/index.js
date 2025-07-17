// Ternary operator is used to shortcut write if lese statements

// Syntax is conditon ? iftruecodethis : elsecodethis ;

// eg 

// let age=window.prompt("Enter you age");

// let message = age>=18 ? "You are an adult" : "You are a minor";

// console.log(message);

let price=200;
let discount= price>=100 ? 5 : 0 ;

console.log(`Final Price is ${price-price*(discount/100)}`);