class Employee{


    // Employee(empId, empName){
    //     this.empId = empId
    //     this.empName - empName;
    // }

    constructor(empId, empName){
        this.empId = empId
        this.empName = empName

    }



}

let emp1 = new Employee(9000, 'sachin')

console.log(emp1)
console.log(emp1.empId)
console.log(emp1.empName)
console.log(emp1.Employee)

console.log

let emp2 = new Employee(90); // it will throw no error
console.log(emp2)

emp2.empName = 'anil'

console.log(emp2)