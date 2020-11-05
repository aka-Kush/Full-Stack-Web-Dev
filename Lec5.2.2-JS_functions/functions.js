//function can be defined using the following syntax:
function alpha() {
    return "A"
}
console.log(alpha())


//another way of defining function
//the problem of using let for defining function is if you call function before defining it, it will throw Reference error ; whereas in case of function() it is completely fine
let gamma = function() {
    return "C"
}
console.log(gamma)    //it will print function code
console.log(gamma())  //it will print what gamma function returns


//JS follows a 2pass way i.e. interpreter will first go through the code and store all the function definitions and then second time will actually execute the code
//therefore if we call a function and define it later, it is totally fine
//This is called Hositing: It will act like all the function definition has been moved to the top of your code but actually the definition is just stored in the memory
//interpreter will execute and store all function/variable declaration in the memory whereas everything else like console.log is stored in a queue and at the end of the code this queue is executed
console.log(print_a())
function print_a() {
    return 'a'
}


function area(height, width) {
    return height * width
}
console.log('area(4,3)', area(4,3))
//console.log(area(4))  //giving one argument will give an internal error, it will not execute ; it will say 'not a number' (NaN)

//in order to make this execute with one argument, we can use POLYMORPHISM
//The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. 

function new_area(length, width){
    if(!width){
        return length * length  //area of square
    }
    return length * width       //area of rectangle
}
console.log('new_area(4,3)', new_area(4,3))
console.log('new_area(4)', new_area(4))


//we can use let or var to declare variables but let is preferred as var is an old way
