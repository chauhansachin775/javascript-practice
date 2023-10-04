// Truthy and Falsy values in Js

//In JavaScript below values considered as falsy values
//1. undefined
//2. NaN  //Not A Number
//3. ''
//4. null
//5. 0  

//************************************************************************************ */

let user;
console.log(user);

console.log();

//************************************************************************************ */


let num1 = 0;

if (num1) {
    console.log("inside if block")  //if block is not executed because 0 is considered as falsy value. 0 --> false
} else {
    console.log("inside else block")
}

let num2 = 1;

if (num2) {
    console.log("inside if block")  //here, if block is executed because any value except 0 is considered as true. 1,2,etc --> true
} else {
    console.log("inside else block")
}

//****************************************************************************** */

let userName = '';
if (userName) {
    console.log("inside if block")  
} else {
    console.log("inside else block")  //else block is executing because empty string is considered as falsy vale in JS
}

let lastName = "chauhan";
if (lastName) {
    console.log("inside if block") //here, if block will get executed because String is not empty
} else {
    console.log("inside else block")
}

//****************************************************************************** */

let LaptopName = null;

if (LaptopName) {
    console.log("Laptop name is lenovo")
} else {
    console.log("Laptop name is nothing. it has defined as 'null'") //else block will get executed
}

//****************************************************************************** */
//NaN. Not A Number

console.log();

console.log(343 / 0)
console.log(6765.987654 / 0);

console.log();

console.log(-765 / 0);  
console.log(-897654.678422 / 0);

console.log();

console.log(0 / 0);  //NaN

console.log();

console.log(343 / 0.0)
console.log(6765.987654 / 0.0);

console.log();

console.log(-765 / 0.0);  
console.log(-897654.678422 / 0.0);

console.log();

console.log(343 % 0)
console.log(6765.987654 % 0);

console.log();

console.log(-765 % 0);  
console.log(-897654.678422 % 0);
