//go to live server < inspect < console, to see the result
console.log(1738, typeof 1738)
console.log(17.38, typeof 17.38)
console.log('a', typeof 'a')
console.log("abcd", typeof "abcd")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)

function a(){       //go to console and call a using a()
    return 1;
}

console.log(a, typeof a)        //in JS function can be treated as variable and datatype of function is function
console.log(a(), typeof a())   

let b = 1       //in JS we can let any variable without specifying datatype as in C we write int b = 1
console.log(b)
console.log(b())    //runtime error ; b is not a function
//if an error is faced then further code is not executed in the same js fiel whereas if there are two js files link to one html page and if one is stuck on error then it will stop executing further but the second js file will be executed 

