// comments in JavaScript
// very similar to c++ in this lecture only strictly equal concept was new to me and ternary was good to know

// single line comment  
/*
  multi line comment
*/
//console.log("Hello, World!");

// operators in JavaScript

// arithmetic operators
let a = 10;
let b = 5;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication  
let quotient = a / b; // division
let remainder = a % b; // modulus
let increment = ++a; // increment
let decrement = --b; // decrement   
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Increment:", increment);
console.log("Decrement:", decrement);

// here increment and decremnet are unary operators

// assignment operators
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
console.log("Value of x after assignment operations:", x);  

// comparison operators
let p = 10;
let q = 5;
console.log("p == q:", p == q); // equal to
console.log("p != q:", p != q); // not equal to
console.log("p === q:", p === q); // strict equal to
console.log("p !== q:", p !== q); // strict not equal to
console.log("p > q:", p > q); // greater than
console.log("p < q:", p < q); // less than
console.log("p >= q:", p >= q); // greater than or equal to
console.log("p <= q:", p <= q); // less than or equal to    

// logical operators
let isTrue = true;
let isFalse = false;
console.log("isTrue && isFalse:", isTrue && isFalse); // logical AND
console.log("isTrue || isFalse:", isTrue || isFalse); // logical OR
console.log("!isTrue:", !isTrue); // logical NOT

// conditional statements
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
// if-else if-else ladder
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// ternary operator 
// syntax: condition ? expression1 : expression2
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", result); 

// Practice questions

// input a number and check if it is divisible by 5 and 11
// to input a number, we can use prompt in browser environment

// let num = parseInt(prompt("Enter a number:"));  

// if (num % 5 === 0 && num % 11 === 0) {
//     console.log(num + " is divisible by both 5 and 11.");
// } else {
//     console.log(num + " is not divisible by both 5 and 11.");
// }

// 2nd ques - write a code which can give grades to students according to their scores
// let studentScore = 79; // example score

// if (studentScore >= 80) {   
//     console.log("Grade: A");
// } else if (studentScore >= 70) {
//     console.log("Grade: B");
// } else if (studentScore >= 60) {
//     console.log("Grade: C");
// } else if (studentScore >= 50) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }




