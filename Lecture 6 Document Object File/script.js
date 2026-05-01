// why we create different files for html css and js
// we create different files for html css and js to keep our code organized and maintainable. 
// it also allows us to reuse our css and js code across multiple html files without having to copy and paste the code. 
// it also makes it easier to debug our code as we can easily identify which file is causing the issue. 
// how to link css and js files to html file
// to link a css file to an html file, we use the <link> tag in the head section of the html file. 
// the rel attribute specifies the relationship between the current document and the linked document.
// the href attribute specifies the location of the linked document.
// example: <link rel="stylesheet" href="style.css">
// to link a js file to an html file, we use the <script> tag in the body section of the html file. 
// the src attribute specifies the location of the linked document.
// example: <script src="script.js"></script>

// what is window object?
// the window object is the global object in javascript that represents the browser window. 
// it is the top-level object in the javascript hierarchy and all other objects are properties of the window object. 
// it provides methods and properties to interact with the browser window, such as opening new windows, displaying alerts, and accessing the document object. 
// example: window.alert("Hello World!");

// what is document object model?
// the document object model (DOM) is a programming interface for web documents. 
// it represents the structure of a web page as a tree of objects, where each object corresponds to an element in the HTML document. 
// it allows developers to manipulate the content and structure of a web page using javascript. 
// example: document.getElementById("myElement").innerHTML = "Hello World!";

// dom manipulation
// dom manipulation refers to the process of using javascript to change the content and structure of a web page. 
// it allows developers to create dynamic and interactive web pages by modifying the DOM tree.

// selecting elements
// to select an element in the DOM, we can use various methods provided by the document object. 
// some common methods for selecting elements include:
// - document.getElementById("id"): selects an element by its ID
// - document.getElementsByClassName("class"): selects elements by their class
// - document.getElementsByTagName("tag"): selects elements by their tag name   

// example of selecting elements:
// <div id="myElement" class="myClass">Hello World!</div>
// <script>
//   // select element by ID
//   var elementById = document.getElementById("myElement");
//   console.log(elementById); // <div id="myElement" class="myClass">Hello World!</div>

//   // select elements by class
//   var elementsByClass = document.getElementsByClassName("myClass");
//   console.log(elementsByClass); // HTMLCollection [div.myClass]  

//   // select elements by tag name
//   var elementsByTag = document.getElementsByTagName("div");
//   console.log(elementsByTag); // HTMLCollection [div#myElement.myClass]
// </script>

// querySelector and querySelectorAll
// the querySelector and querySelectorAll methods are used to select elements in the DOM using CSS selectors. 
// the querySelector method returns the first element that matches the specified selector, while the querySelectorAll method returns a NodeList of all elements that match the specified selector.

// example of using querySelector and querySelectorAll:
// <div class="myClass">Hello World!</div>
// <div class="myClass">Hello Again!</div>

// <script>
//   // select the first element with class "myClass"
//   var firstElement = document.querySelector(".myClass");
//   console.log(firstElement); // <div class="myClass">Hello World!</div>

//   // select all elements with class "myClass"
//   var allElements = document.querySelectorAll(".myClass");
//   console.log(allElements); // NodeList [div.myClass, div.myClass]
// </script>

