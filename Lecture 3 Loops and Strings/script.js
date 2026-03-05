// Loops in JavaScript

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}   
// While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}   
// Do-While Loop
let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
} while (k < 5);

// advantage of do while over while is that it will execute at least once even if the condition is false initially.

// for of Loop (for iterating over iterable objects like arrays and strings)
// similar to auto in c++ eg for(auto element:array)
const array = ['a', 'b', 'c'];
for (const element of array) {
    console.log("For Of Loop element: " + element);
}   
const str = "hello";
for (const char of str) {
    console.log("For Of Loop character: " + char);
}

// for in Loop (for iterating over object properties)
const obj = {name: "Alice", age: 25, city: "Wonderland"};
for (const key in obj) {
    console.log("For In Loop key: " + key + ", value: " + obj[key]);
}   

// for in loop gives keys of the object whereas for of loop gives values of iterable objects like arrays and strings.

// Practice Problems

// 1. Print all even numbers from 0 to 100

for ( let num=0;num<=100;num+=2){
    console.log(num);
}


// 2. create a game where user has to guess a number between 1 to 100 until he guesses it right
// floor to round down, random to generate random number
// random function generates number between 0 and 1 so we multiply it by 100 and add 1 to make it between 1 and 100

// const targetNumber = Math.floor(Math.random() * 100) + 1;
// let guessedNumber = null;
// while (guessedNumber !== targetNumber) {
//     // parseInt to convert string input to integer
//     // prompt to take input from user
//     guessedNumber = parseInt(prompt("Guess a number between 1 and 100:"));  
//     if (guessedNumber < targetNumber) {
//         console.log("Too low! Try again.");
//     } else if (guessedNumber > targetNumber) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Congratulations! You guessed the number " + targetNumber);
//         break;
//     }
// }

// Strings in JavaScript

const sampleString = "Hello, JavaScript!";  
// Length of string
console.log("Length of string: " + sampleString.length);
// Accessing characters
console.log("First character: " + sampleString[0]);
console.log("Last character: " + sampleString[sampleString.length - 1]);    

// Template Literals
const name = "John";
const greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting);

// why we use template literals over normal strings?
// 1. Easier to read and write
// 2. Support for multi-line strings
// 3. Ability to embed expressions directly 
// example:
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// escape characters
const stringWithQuotes = "He said, \"JavaScript is awesome!\"";
console.log(stringWithQuotes);  
const stringWithNewLine = "Hello,\nJavaScript!";
console.log(stringWithNewLine); 
const stringWithTab = "Hello,\tJavaScript!";
console.log(stringWithTab);
const stringWithBackslash = "This is a backslash: \\";
console.log(stringWithBackslash);

// length of esacpe characters is counted as 1
console.log("Length of stringWithQuotes: " + stringWithQuotes.length); // counts \" as 1 character  
console.log("Length of stringWithNewLine: " + stringWithNewLine.length); // counts \n as 1 character

// String Methods
// strings are immutable in JavaScript, so string methods return new strings rather than modifying the original string.

const testString = "  Hello, World! JavaScript is great.  ";
// toUpperCase and toLowerCase
console.log(testString.toUpperCase());
console.log(testString.toLowerCase());
// trim
console.log(testString.trim()); // removes whitespace from both ends
// slice
console.log(testString.slice(7, 12)); // "World"
// replace
console.log(testString.replace("World", "Universe"));
// concat
console.log(testString.concat(" Let's learn more about strings."));
// charAt
console.log(testString.charAt(7)); // "W"

// Practice Problems

// input full name and create username by adding @ at the start and ending with fullname length
// here in length we are counting space as well because it is also a character in the string and we are not removing it before calculating length. if we want to remove space then we can use replace method to remove space before calculating length.
// fix it
const fullName = "Mohit Kumar";
const userName = "@" + fullName.replace(" ", "").toLowerCase() + fullName.replace(" ", "").length;
console.log("Generated username: " + userName);


   