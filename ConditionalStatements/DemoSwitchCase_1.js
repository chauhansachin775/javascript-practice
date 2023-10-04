//In this program we will demo the working of switch - case statement

let getUserRole = function(userName, userRole) {
    
    switch(userRole) {

        case "Manager" :
            return `${userName} is a Manager, Who assign the projects.`;
            break; // As soon as you implement return statement the break will fade out,
                   // because after the return statement no code will execute.
        case "Tech Lead" :
            return `${userName} is a Tech Lead, Who look after the entire technical developments.`;
        case "Developer" :
            return `${userName} is a Developer, Who writes code to develop the project.`;
        case "QA" :
            return `${userName} is a QA, Who is responsible for the quality assurance.`;
        case "Client" :
            return `${userName}, is a Client, Who is the owner of a project.`;
        default :
            return `${userName} is an invalid user.`
    }
}

import { question } from "readline-sync";

console.log("Enter the user name: ");
let userName = String(question());

console.log("Enter the role: ");
let userRole = String(question());

console.log(getUserRole(userName, userRole));
