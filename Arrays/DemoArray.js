// //******************** Array Demo*****************/

// let arr = ['sachin', 10, 20, 'orange', true]
// let i

// for(i in arr){
//     console.log(arr[i])
// }

// //******************* Array Demo */

// let laptopOEM = ['dell', 'lenovo', 'hp', 'apple']
// console.log(laptopOEM)

// // another wa to declare an Array

// let cars = new Array('jeep', 'ford', 'tata')
// console.log(cars)
// console.log(cars.length)

// // insertion and deletion

// let cars_1 = new Array('jeep', 'ford', 'tata')
// console.log(cars_1)
// cars_1.push('honda')

// console.log(cars_1)

// cars_1.pop()
// console.log(cars_1)

// cars_1.shift()
// console.log(cars_1)

// cars_1.unshift('force')
// console.log(cars_1)

//const readLine = require(readline-sync);
const readLine = require("readline-sync");


let emp = [];

console.log("enter empName: ")
emp[0] = String(readLine.question());

console.log("enter empId: ")
emp[1] = Number(readLine.question());

console.log("enter empSalary: ")
emp[2] = Number(readLine.question());

console.log(emp);





