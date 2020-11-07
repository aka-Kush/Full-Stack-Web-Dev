//Different datatypes
let a = 10;
console.log(a, typeof a);   //used to print anything

let b = 3.45;               
console.log(b, typeof b);   

let c = 'a';
console.log(c, typeof c);

let d = 'abcd';
console.log(d, typeof d);

let e = [1,2,3,4,5];         //array
console.log(e, typeof e);

let f = [1,2,3.5,'hello'];   
console.log(f, typeof f);

//defining functions two types:
//1  //Function Declaration   //Hoisting Works ; refer to Lec5.2.3.1
function add(first_num, second_num){
    console.log(first_num + second_num);
}
add(5,5);

//2  //Function expression   //Hoisting doesn't works  
let minus = function(first, second){
    console.log(first - second);
}
minus(5,4);

//Declaring Variables ; Three methods
// g = 20;         //global scope
// var h = 30;     //Function scope
// let i = 50;     //Block scope

//example for scope of different declarations:
function fun(){
    let g = 5;
    if(g===5){
        b = 3;                  //outside func value of b = 3.45        
        let a = 123;            //outside func value of a = 10
        c = 'b';                //outside func value of c = 'b'
        console.log("INSIDE", b);
        console.log("INSIDE", a);
        console.log("INSIDE", c);
    }
    console.log("OUTSIDE", b);      //value remains same (Global scope)
    console.log("OUTSIDE", a);      //value is changes (Function scope)
    console.log("OUTSIDE", c);      //value remains same (Block scope)
}
console.log(fun());

//Array
let arr = ['Mango' , 'Guava' , 'Orange' , 'Apple'];
console.log(arr);

//iterate over array
for (let i=0; i<5; i++){
    console.log(arr[i]);
}
//stuff you can do with array ; array properties
//arr[0];                //find element at 0 index
// arr.length;          //find out the length of the array
// arr.push('Banana');  //add element to the last of the array
// arr.pop();           //remove and return last element
// arr.indexOf('Guava');  //find the index of some element
// arr.shift('Mango');  //remove element from the front of array
//arr.unshift('Kiwi');  //adds element to the front

//example of using if else loop with array
if(arr[0]=='Orange'){                   //if element at 0 index is orange then print this
    console.log("Orange");
}
else{
    console.log('No it is', arr[0]);    //else print this
}

//Note: '='in JavaScript is used for assigning values to a variable
// '==' in JavaScript is used for comparing two variables, but it ignores the datatype of variable
// '===' is used for comparing two variables, but this operator also checks datatype and compares two values



//Object oriented programming in Javascript 
//JS allows to create objects without defining the class

// go to console and type bird   // , at the end is the identifier which is mandatory for defining more than one properties
//First Way of creating JS object - JSON(JavaScript Object Notation)
var bird = {            //bird with some properties defined
    x:100,              //location of bird ; x co-ordinate
    y:20,               //location of bird ; y co-ordinate
    color:'blue',       //color of bird
    eggs:['one','two','three'],     //array of bird's eggs

    //now in order to find the co-ordinates of flying in the function:
    //we can't do this : 
    // fly:function(){
    //     console.log("Bird is flying",x,y);      this won't work as whenever there are some prop inside the object and we want to use those we have to use 'this' keyword 
    // }

    //this will work
    fly:function(){
        console.log('Bird is flying at co-ordinates',this.x,",",this.y)   //variable assigned to a function that prints bird is flying with co-ordinates using 'this' keyword
    }

}   

//how to call a function of object
bird.fly();

// to access or change the properties of the object we can easily write 
// bird.x               //access x co-ordinate property
// bird.x = 120;        //update x co-ordinate property


//iterate over birds eggs
//using for loop
for(let i=0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}
//using for each loop
bird.eggs.forEach(function(idx,val){      //for every element in 'bird.eggs' array, we will call an un-named function which will get 2 things i.e. indices and values
    console.log(idx,val);
});


//Another way of creating JS object
//creating a class for different fruit objects
function fruit(taste,color){        //two properties of fruit: taste and color
    this.color = color;
    this.taste = taste;
}

//new keyword
let mango = new fruit('sweet' , 'yellow');      //now mango will be treated as a fruit with properties sweet and yellow
let orange = new fruit('sour' , 'orange');

//object and its properties can be accessed like this:
//mango
// orange.color;
// mango.taste;


//New Way of creating object - Class Keyword (Introduced in ECMAScript 2015) - CLass Declaration
class Fruit_class{
    constructor(taste,color){
        this.color = color;
        this.taste = taste;
    }
};
let kiwi = new Fruit_class('sour','green');

//both are non-hoisted
//Class Expression
let Fruit_class2 = class{
    constructor(taste,color){       //we add properties in constructor
        this.taste = taste;
        this.color = color;
    }
}
let kiwi2 = new Fruit_class2('sour','green');


