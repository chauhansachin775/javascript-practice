//converting JSON string to a JavaScript Object.

const jsonString = '{"name": "sachin", "id": 101, "address": "gwalior", "salary": 60000}';

let x = JSON.stringify(jsonString);
console.log(x);

console.log(typeof(jsonString));

console.log(jsonString);

const jsObject = JSON.parse(jsonString);

console.log(jsObject.name);
console.log(jsObject.id);
console.log(jsObject.address);
console.log(jsObject.salary);

console.log(jsonString);


console.log();


//When using the JSON.parse() on a JSON derived from an array,
//the method will return a JavaScript array, instead of a JavaScript object.
//example :-

const jsonArray = '["apple", "mango", "banana", "orange", "guava"]'

console.log(typeof(jsonArray));
const jsArray = JSON.parse(jsonArray);
console.log(jsArray[0]);
console.log(jsArray[1]);
console.log(jsArray[2]);
console.log(jsArray[3]);
console.log(jsArray[4]);


console.log();

//parsing JSON Object, and fetching the details.
//example :-

const jsonEmpDetails = {
    "employee_1": {"name": "sachin", "empId": 101}, 
    "employee_2": {"name": "anil", "empId": 102},
    "employee_3": {"name": "vikas", "empId": 103},
    "employee_4": {"name": "gaurav", "empId": 104}
};

//const jsEmpDetails = JSON.parse(jsonEmpDetails);

const jsonStudenDetails = {"student_1": {"name": "atul", "rollNum": 101}};

const ud =                  {"employee": {"name1": "John", "age": 30, "city": "New York"}};
                        

//const jsStudenDetails = JSON.parse(ud);
//console.log(jsStudenDetails);

//console.log(jsStudenDetails.student_1);

const cd = {
    "cars": {
        "Nissan": [
            {"model":"Sentra", "doors":4},
            {"model":"Maxima", "doors":4},
            {"model":"Skyline", "doors":2}
        ],
        "Ford": [
            {"model":"Taurus", "doors":4},
            {"model":"Escort", "doors":4}
        ]
    }
}

 for(let x in cd){
     console.log(JSON.parse(cd));
 }
