// example of a object containing properties and methods
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name); // this refers to the current object (person)
    }
};

// Prototype example
// what is a prototype? A prototype is an object that is associated with every function and object in JavaScript. It allows you to add properties and methods to objects created from a constructor function.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// example use of .__proto__ to add a method to the Person prototype
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

// if object and prototype have the same property, the object property will take precedence over the prototype property
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 35);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob

// classes in JavaScript
// a class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have.
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let person3 = new PersonClass("Charlie", 40);
person3.greet(); // Hello, my name is Charlie

// when classes are used?
// Classes are used when you want to create multiple objects that share the same properties and methods. They provide a clear and concise way to define the structure of your objects and promote code reusability. Classes are particularly useful in object-oriented programming, where you can create complex data structures and behaviors by defining classes and creating instances of those classes.

// what is constructor? A constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object. In JavaScript, the constructor method is defined using the "constructor" keyword within a class. When you create an instance of a class, the constructor method is automatically called, allowing you to set up the initial state of the object.


// inheritance in JavaScript
// Inheritance is a fundamental concept in object-oriented programming that allows a new class (called a subclass or child class) to inherit properties and methods from an existing class (called a superclass or parent class). This promotes code reusability and establishes a natural hierarchical relationship between classes.

// example of inheritance using classes in JavaScript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {        console.log(this.name + " makes a noise.");
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " barks.");
    }
}

// method overriding is when a subclass provides a specific implementation of a method that is already defined in its superclass. In the example above, the Dog class overrides the speak method of the Animal class to provide a more specific behavior for dogs. When we create an instance of the Dog class and call the speak method, it will use the overridden version defined in the Dog class instead of the one in the Animal class.

let dog = new Dog("Rex");
dog.speak(); // Rex barks.

// super keyword is used to call the constructor of the parent class and to access the methods of the parent class. In the example above, we can use super to call the constructor of the Animal class from the Dog class, allowing us to initialize the name property for the Dog instance. We can also use super to call the speak method of the Animal class if we want to include its behavior in addition to the overridden behavior in the Dog class.

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        super.speak(); // Call the parent class speak method
        console.log(this.name + " is a " + this.breed + ".");
    }
}


// practice problems
// 1. you are creating a website for you collge. create a class user with 2 propwerties name and email. it laos has a method viewdata() thte allows user to view website data.
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }   
    viewData() {
        console.log("Name: " + this.name);
        console.log("Email: " + this.email);
    }
}

let user1 = new User("Alice", "alice@example.com");
user1.viewData();   

// 2. create a new class admin which inherit from user . add a new method called editdata to admin.
class Admin extends User {
    editData() {
        console.log(this.name + " can edit data.");
    }
}

let admin1 = new Admin("Bob", "bob@example.com");
admin1.viewData();
admin1.editData();

// error handling in classes
// you can use try-catch blocks to handle errors in classes. For example, you can throw an error if a required property is missing when creating an instance of a class.
class User {
    constructor(name, email) {
        if (!name || !email) {
            throw new Error("Name and email are required.");
        }
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Name: " + this.name);
        console.log("Email: " + this.email);
    }
}