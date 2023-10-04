// //**************** for loop **************************/

let num = [23, 45, 56, 88]   //integer array
let i

for(i = 0; i < num.length; i++){
    console.log(num[i])
}


console.log()

//************** for-in loop **************************/

let fruits = ['apple', 'orange', 'grapes']
let x

for(x in fruits){
    console.log(x)
    console.log
    console.log(fruits[x])
}

console.log()

//***************** for-of loop ***********************/

let stdAttribute = ['name', 'rollNum', 'address']
let y

for(y of stdAttribute){
    console.log(y)
}
