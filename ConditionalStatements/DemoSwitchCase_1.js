//In this program we will demo the working of switch - case statement

let getUserRole = function(userName, userRole) {
    
    switch(userRole) {

        case "Manager" :
            return `${userName} is a Manager, Who assign the project.`;
            break;
        
        case "Tech Lead" :
            return `${userName} is a Tech Lead, Who look after the entire technical developments.`;
            break;

        case "Developer" :
            return `${userName} is a Developer, Who writes code to develop the project.`;
            break;
        
        case "QA" :
            return `${userName} is a QA, Who is responsible for the quality assurance.`;
            break;
        
        case "Client" :
            return `${userName}, is a Client, Who is the owner of a project.`;

        default :
            return `${userName} is an invalid user.`

    }
}


const readLine = require("readline-sync");

console.log("Enter the user name: ");
let userName = String(readLine.question());

console.log("Enter the role: ");
let userRole = String(readLine.question());

console.log(getUserRole(userName, userRole));
