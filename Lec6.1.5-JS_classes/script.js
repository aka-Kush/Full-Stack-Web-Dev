/*
 * JS classes introduced in ECMAScript2015, are primarily syntactical sugar over JS's existing prototype-based inheritance
 * The class does not introduce a new object-oriented inheritance model to JS
 * In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer.
*/

//syntax
class person{
    constructor(name, age){     //constructor is used to define initial properties for the new object that will be creating through this class
        this.name = name;       //'this' is a keyword used for reference to the object that is executing this peice of code ; this points at runtime ; it is dynamic
        this.age = age;     //age property to an empty object (for now)
    }
}

let person2 = new person('John', 22);       //new keyword is used to create a new object of that class

console.log(person);
console.log(person2);
console.log(typeof person);     //it comes out to be function as there is not class datatype
console.log(typeof person2);    //object

console.log(person2.__proto__ == person.prototype);     //true ; person2.__proto__ will inherit from person.prototype
console.log(person2.__proto__.__proto__ == Object.prototype);     //true ; person2.__proto__.__proto__ will inherit from Object.prototype


//creating function inside class
class agecheck{
    constructor(age){
        this.age == age;
    }
    isAdult(){                      //syntax for a function inside a class
        return this.age >= 18;      //this function and constructor is stored in agecheck.prototype
    }
}

let person3 = new agecheck(15);
let person4 = new agecheck(22);
console.log(person3.age);
console.log(person3.isAdult());     //false as age is 15
console.log(person4.isAdult());     //true as age is 22

