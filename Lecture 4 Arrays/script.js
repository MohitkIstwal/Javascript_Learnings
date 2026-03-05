// Arrays are a data structure that can hold multiple values. They are ordered and indexed, meaning that each value has a specific position in the array.

// Creating an array
let fruits = ["apple", "banana", "cherry"];
// Accessing array elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "cherry"
// Modifying array elements
fruits[1] = "blueberry";
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

// Arrays are mutable, meaning you can change their contents after creation.
fruits.push("date");
console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]

// Looping through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// "apple"
// "blueberry"
// "cherry"
// "date"
// You can also use the for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// "apple"
// "blueberry"
// "cherry"
// "date"

// Practice Problem
// Question - for a given array = [85,97,44,37,76,60] find avg marks of the students
let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
for(let mark of marks){
    totalMarks += mark;
}
let avgMarks = totalMarks / marks.length;
console.log("Average Marks:", avgMarks); // Output: Average Marks: 66.5     

// Question - for given array [250,645,300,900,50] all items have 10% off change the array to show discounted prices
let prices = [250, 645, 300, 900, 50];
for(let i = 0; i < prices.length; i++){
    prices[i] = prices[i] - (prices[i] * 0.10);
}   
console.log("Discounted Prices:", prices); // Output: Discounted Prices: [225, 580.5, 270, 810, 45]

// Array methods
let colors = ["red", "green", "blue"];
colors.push("yellow"); // Adds "yellow" to the end
console.log(colors); // Output: ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element
console.log(colors); // Output: ["red", "green", "blue"]
colors.shift(); // Removes the first element
console.log(colors); // Output: ["green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning
console.log(colors); // Output: ["purple", "green", "blue"]

let index = colors.indexOf("green"); // Finds the index of "green"
console.log(index); // Output: 1

// toString method
let numbers = [1, 2, 3, 4, 5];
let numbersString = numbers.toString();
console.log(numbersString); // Output: "1,2,3,4,5"
console.log(typeof numbersString); // Output: "string"

// Slice method
let slicedColors = colors.slice(0, 2);
console.log(slicedColors); // Output: ["purple", "green"]

// Splice method
colors.splice(1, 1, "orange"); // Removes 1 element at index 1 and adds "orange"
console.log(colors); // Output: ["purple", "orange", "blue"]

// Concat method
let moreColors = ["pink", "cyan"];
let allColors = colors.concat(moreColors);
console.log(allColors); // Output: ["purple", "orange", "blue", "pink", "cyan"]

// Practice Problem
// Array = ["Bllomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"]
// remove first compnay , remove uber and add ola in its place , add amazon at the end
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(companies.indexOf("Uber"), 1, "Ola");
companies.push("Amazon");
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]

// End of Lecture 4