//JS supports two types of data types
//1. Primitive data types
//2. Referenced data types

//There are 5 Primitive data types in JS
//1.String
//2. Number
//3. Boolean
//4. Undefined
//5. Null

let empName = 'sachin';
let num = 100;
let decision = true;
let role = undefined;
let object = null;

console.log(empName);
console.log(num)
console.log(decision);
console.log(role);
console.log(object);


console.log();

//manipulation of data

empName = 'anil';
num = 200;
decision = false;
role = 'civil engg';
object = 'caterpillar'

console.log(empName);
console.log(num)
console.log(decision);
console.log(role);
console.log(object);

console.log();

//There are 3 Referenced data types in JS
//1. Objects
//2. Arrays
//3. Functions

//creating an object in JS

let person = {} // this is called an undefined object


//this is a simple syntax to create an object in JS with attributes.

let user = {
    userName : 'aman',
    userId : 101,
    userMachine : 'Mac',
    userSalary : '1000'
};

//to print the user properties we just need to pass the object name itself.

console.log(user);

console.log();

//we can also print any individual property of an object using dot[.] notation

console.log(user.userName);
console.log(user.userSalary);

console.log();

//we can also print/ manipulate objct property using bracket [] notation.

user['userId'] = 201;
user['userMachine'] = 'windows';

console.log(user['userId']);        //using bracket notation
console.log(user['userMachine']);   //using bracket notation 
console.log(user.userName);         //using dot[.] notation


//2. Arrays in JS
//In other programming languages like- Java, C++, C Arrays can accept homogeneous data types.
//Arrays are already dynamic in JS, we can declare multipletypes of data into an Array.

let arr = ['anuj', '102', 'gwalior', true];
console.log(arr);

console.log();

//Js gives us different methods to manipulate an Array

// 'push' method to add/push a new element at the end of an Array

arr.push('working remote');
console.log(arr);

//'pop' method to remove an element at the end of an Array
//It is a no arg method
arr.pop();
console.log(arr);

//'shift' method to delete the first element from an Array
//it is a no agr method
arr.shift();
console.log(arr);


//'unshift' method to add an element at the start point of an Array
arr.unshift('karan');
console.log(arr);

//'delete' to delete a particular element from an array
// syntax --> delete arrayName[index]
delete arr[1];
console.log(arr);

//to add an element at a particular index into an Array
arr[1] = 501;
console.log(arr);

//'splice' method to perform add/ delete operation into an Array

arr.splice(1,1); //it will remove one element fron first index, i.e arr[1] element itself. 
console.log(arr);
arr.splice(0,2); // it will remove two element fron the zeroth index including zero index element.
console.log(arr);

//adding new elements into and deleting an element from an Array at the same time using 'splice' method
arr.splice(0,1, 'akash', 'anil' );
console.log(arr);

console.log();

//more examples to showcase features of 'splice' method

macUsers = ['sachin', 'anil', 'aman', 'akash', 'rahul', 'ashu']
console.log(macUsers);

macUsers.splice(2,2,'rohan', 'sunny');
console.log(macUsers);





console.log();


//JS supports dynamic typing.
//which means we can assign different types of data to a single variable

let value = 'urgent';
console.log(value);

//now we can assign different type of data to the 'value' variable. JS gives us this functionality

value = 300;
console.log(value);



