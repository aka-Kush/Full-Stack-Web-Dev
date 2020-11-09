//declaring array
let e = [1,2,3,4,5];         //array
console.log(e, typeof e);

let f = [1,2,3.5,'hello', false];   //heterogenous array
console.log(f, typeof f);

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