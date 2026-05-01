// sync in javascript
// what is synchronous and asychronous in javascript

// synchronous code
// console.log("Hello");
// console.log("World");

// asynchronous code
// setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// console.log("World");

// due to synchronous code, we can not do some task in background and we have to wait for the task to complete before moving to the next task
// for example, if we want to fetch data from an API, we have to wait for the response before moving to the next task

// what is callback in javascript
// a callback is a function that is passed as an argument to another function and is executed after the completion of that function
// for example, if we want to fetch data from an API, we can pass a callback function that will be executed after the response is received  
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 1000);
// }
// fetchData((data) => {
//   console.log(data);
// });

// callback hell is a situation where we have multiple nested callbacks, which makes the code difficult to read and maintain
// for example, if we want to fetch data from an API and then process the data, we can have multiple nested callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}
function processData(data, callback) {
  setTimeout(() => {
    const processedData = { ...data, processed: true };
    callback(processedData);
  }, 1000); 
}
fetchData((data) => {
  processData(data, (processedData) => {
    console.log(processedData);
  });
}); 

// promises are a way to handle asynchronous code in a more elegant way and avoid callback hell
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// a promise can be in one of three states: pending, fulfilled, or rejected 
// for example, if we want to fetch data from an API, we can return a promise that will be resolved with the response
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });   

// promises can be chained to avoid callback hell
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = { ...data, processed: true };
      resolve(processedData);
    }, 1000);
  });
}   
fetchData()
  .then((data) => {
    return processData(data);   
    })
    .then((processedData) => {
        console.log(processedData); 
    })
    .catch((error) => {
        console.error(error);
    });


// Async/await is a syntactic sugar over promises that allows us to write asynchronous code in a synchronous manner
// async/await makes the code more readable and easier to maintain
// for example, if we want to fetch data from an API and then process the data, we can use async/await to write the code in a synchronous manner

async function main() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    console.log(processedData);
  } catch (error) {
    console.error(error);
  }
}
main();

// await pauses the execution of the function until the promise is resolved or rejected, which allows us to write asynchronous code in a synchronous manner
// async/await is built on top of promises, so we can use all the features of promises with async/await

// IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after it is defined
// IIFE is used to create a new scope and avoid polluting the global scope
// for example, if we want to fetch data from an API and then process the data, we can use an IIFE to write the code in a synchronous manner  
(async function () {
  try {
    const data = await fetchData(); 
    const processedData = await processData(data);
    console.log(processedData);
  } catch (error) {
    console.error(error);
  }
})();