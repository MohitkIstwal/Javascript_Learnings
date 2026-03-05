// so we can directly write code in console of browser
// for example we can alert messages like this
// alert("Hello, World!");

// we use console.log() to print messages to the console
// console.log("Hello, World!");
// console.log("This is my first JavaScript code!");
// console.log("I am learning JS.");

// variables in JS
// these are containers to store data values
// we can declare variables using var, let, or const
// but we will use let and const as var is outdated
// let name = "John";
// const age = 25;

// in JS we dont have to specify the data type of variables
// JS is a dynamically typed language

// difference between let and const
// let allows us to reassign values to the variable
// const does not allow reassignment, it is constant

// for example
let city = "New York";
// let city="Vegas"; // This will cause an error: Identifier 'city' has already been declared
city = " Los Angeles"; // Reassigning value
console.log(city); // Output: Los Angeles  

const country = "USA";
// country = "Canada"; // This will cause an error: Assignment to constant variable.
console.log(country); // Output: USA    

// rules for naming variables
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive (age, Age, and AGE are different variables).
// 4. Variable names cannot be JavaScript reserved words (like let, const, if, else, etc.). 

// examples of valid variable names
let firstName = "Alice";
let $price = 100;
let _age = 30;
let user1 = "Bob";

// data types in JS
// 1. String - represents text, enclosed in single or double quotes
let message = "Hello, World!";  
// 2. Number - represents both integer and floating-point numbers
let score = 95.5;
// 3. Boolean - represents true or false values 
let isActive = true;
// 4. Null - represents an intentional absence of any object value
let data = null;
// 5. Undefined - represents a variable that has been declared but not assigned a value
let result; 
// 6. Object - represents a collection of key-value pairs
let person = { name: "John", age: 30 };
// 7. Array - represents a list of values
let numbers = [1, 2, 3, 4, 5];
// 8. Symbol - represents a unique identifier
let sym = Symbol("id");
// 9. BigInt - represents integers with arbitrary precision
let bigIntNum = 9007199254741991n;
// we can use typeof operator to check the data type of a variable
console.log(typeof message); // Output: string
console.log(typeof score);
console.log(typeof isActive);
console.log(typeof data); // Output: object (this is a known quirk in JS)
console.log(typeof result); // Output: undefined
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object (arrays are a type of object in JS)
console.log(typeof sym); // Output: symbol
console.log(typeof bigIntNum); // Output: bigint  

// primitive vs non-primitive data types
// Primitive data types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Non-primitive data types: Object, Array
// Primitive data types are immutable (cannot be changed), while non-primitive data types are mutable (can be changed)  

const student = {
    name: "Emma",
    age: 22
};
student.age = 23; // Modifying property of the object
student["age"] = 24; // Another way to modify property
console.log(student); // Output: 24

// in objects constants can have their properties modified
// but the object itself cannot be reassigned
// student = { name: "Liam", age: 20 }; // This will cause an error: Assignment to constant variable. 

// scope of let and const
// let and const are block-scoped
// they are only accessible within the block they are defined in
// example:
{
    let blockVar = "I am inside a block";
}   
// console.log(blockVar); // This will cause an error: blockVar is not defined

{
    const blockConst = "I am also inside a block";
}
// console.log(blockConst); // This will cause an error: blockConst is not defined      

