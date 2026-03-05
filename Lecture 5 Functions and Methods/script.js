// functions in JavaScript

// function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");

// function expression
const farewell = function(name) {
    console.log("Goodbye, " + name + "!");
}
farewell("Bob");

// syntax of function expression
// const functionName = function(parameters) {
//     // function body
// }
// functionName(arguments);
// functionName(arguments);

// arrow function
const add = (a, b) => {
    return a + b;
}   
console.log("Sum:", add(5, 3));

// arrow function with implicit return
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 6));

// arrow function with single parameter
const square = x => x * x;
console.log("Square:", square(7));

// when to use function expressions and arrow functions
// Function expressions are useful when you need to create functions conditionally or pass them as arguments.
// Arrow functions are great for concise syntax and when you want to preserve the 'this' context from the surrounding code.     
// However, avoid using arrow functions as methods in objects, as they do not have their own 'this' context.


// Practice Problems:
// 1. create a function using function keyword that takes stringa as an argument and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels:", countVowels("Hello World"));

// 2. create an arrow function for the same functionality.
const countVowelsArrow = (str) => {
    const vowels = 'aeiouAEIOU';    
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Number of vowels (arrow):", countVowelsArrow("JavaScript is fun"));

// forEach method with functions
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log("Number:", num);
});

// using arrow function with forEach
numbers.forEach(num => console.log("Number (arrow):", num));

// forEach method can be used for arrays but not for strings, objects, or other data types. It is specifically designed for iterating over array elements.

// forEach method is a higher-order function because it takes a function as an argument and applies that function to each element in the array. 

// Question - forEach method for finding the square of each element in the array.
const squares = [];
numbers.forEach(num => squares.push(num * num));
console.log("Squares:", squares);

// Some more Array method
// 1. map method - creates a new array by applying a function to each element of the original array.
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. filter method - creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);  

// 3. reduce method - executes a reducer function on each element of the array, resulting in a single output value.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum using reduce:", sum);  

// Practice Problems
// 1. given array of marks filter out marks of studnet who socred 90 and above.
const marks = [85, 92, 78, 90, 88, 95];
const topScorers = marks.filter(mark => mark >= 90);
console.log("Top Scorers:", topScorers);    

// 2. take n input from user and create an array of first n natural numbers, then find the sum of those numbers using reduce method. also find the product of those numbers using reduce method.
const n = 5;
const naturalNumbers = Array.from({ length: n }, (_, i) => i + 1);
const sumOfNaturalNumbers = naturalNumbers.reduce((acc, curr) => acc + curr, 0);
const productOfNaturalNumbers = naturalNumbers.reduce((acc, curr) => acc * curr, 1);
console.log("Natural Numbers:", naturalNumbers);
console.log("Sum of Natural Numbers:", sumOfNaturalNumbers);
console.log("Product of Natural Numbers:", productOfNaturalNumbers);        

// Thats it for this lecture
