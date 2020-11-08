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

let f = [1,2,3.5,'hello', false];   //heterogenous array
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

//using for let loop on an array
for(let val of arr){
    console.log(val);       //it gets the values inside the array
}

//using for in loop on an array
for(let index in arr){
    console.log(index);    //it will output the indices of the array ; iterating over indices
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


//Strings
let str = "this is a string";       //double or single quote can be used
console.log(str);

//if we use single quote then escape sequence can be used to avoid string ending
// let string = 'this is shivansh's string       //unexpected ending
let string = 'this is shivansh\'s string'        // '\' is escape character here
console.log(string);

//backticks `` can be used to create templates ; it is new so won't work with very old browsers

let person = 'Eminem'
let crush = `i love ${person}'s new album`;    //dollar sign and curly braces are used and variable is passed inside curly braces
console.log(crush);

//line breaks for long string
let long_string = 'this is \
a very \
long string'
console.log(long_string);

// \n for new lines with line break
let break_string = 'this is\n\
a string'
console.log(break_string);

//searching for string
let s = 'this is some data';
let key = 'is';
console.log(s.indexOf(key));        //it will print the index of that word
//now this will give 2 as 'is' is present in 'this' ; now in order to find occurence of is after this, we can use another parameter for starting search
console.log(s.indexOf(key, 3));     //it will search the word after index 3
console.log(s.indexOf('have'));       //it will give index as -1 which means it is not present in the string
console.log(s.lastIndexOf('me'));     //it will give us the last index of the word  

//slice and substring
let mainStr = 'this is a string';    //slice keywords is used to slice and get the character or array of character which are present inside the given paramter index
console.log(mainStr.slice(2,6));      //here 'is i' will be the output as it is occuring b/w 2,6 indices where 2 is inclusive and 6 is exclusive
console.log(mainStr.substring(2,6));  //substring also gives the same output as slice
//There is a slight difference between slice and substring.. We can give negative indices to slice in order to start slicing from the last but it is not possible in substring
console.log(mainStr.slice(-5,-4));    //note slicing is always from left to right even in the case of negative indices ; -4 inclusive and -5 exclusive
console.log(mainStr.substring(-5,-4));   //no output
//substr
let shortstr = 'this is a short string';    //substr takes 2 arguments where first argument is start position and second argument is the length ; substr also takes negative arguments
console.log(shortstr.substr(3,6));    //here 3=start index  6=length of the output string