// class User {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
// }

// const user1 = new User();
// console.log(user1);

const myName = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('My name is sachin')
        }, 3000);
    })
};

const mySalary = () => {
    return 'Salary is 5000'
}

const myAddress = () => {
    return 'Gwalior'
}

let callMe = async () => {
    let sal = mySalary();
    console.log(sal);
    let add = myAddress();
    console.log(add);
    let name = await myName();
    console.log(name);
}

callMe();