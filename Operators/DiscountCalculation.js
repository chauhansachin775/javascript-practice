// This is a program to calculate the discount percentage of an Item.
//In this program we will also round off the discount percentage
//i.e we will round off the floating point number to integer.

const readLine = require("readline-sync");

console.log("you are here to calculate the discount percentage!!!");

console.log("please enter the marked price: ");
let markedPrice = Number(readLine.question());

console.log("please enter the selling price: ");
let sellingPrice = Number(readLine.question());

let discountPercentage = ((markedPrice - sellingPrice) /markedPrice) * 100 ;

let displayDiscount = Math.round(discountPercentage);

console.log("discount percentage is :"+displayDiscount+" %");
