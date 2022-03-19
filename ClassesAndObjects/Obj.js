class Laptop{

    //Laptop class costructor 
    constructor (company, price, modelName, ramSize, processor, battrySize, screenSize){
        this.company = company;
        this.price = price;
        this.modelName = modelName;
        this.ramSize = ramSize;
        this.processor = processor;
        this.battrySize = battrySize;
        this.screenSize = screenSize;
    }
    
    // getAllLaptops(){
    // }
}

function createLaptop(l1){
    console.log("please give a name to the laptop: ");
    let laptopName = String(readLine.question());
    laptopName = new Laptop(l1[0], l1[1], l1[2], l1[3], l1[4], l1[5], l1[6]);
    console.log("you have created a laoptop.");
    return laptopName;
    //console.log()
}

// function to initialize the objects
function newLaptopRegistration(){

    console.log("enter company name: ");
    let company = String(readLine.question());

    console.log("enter price: ")
    let price = Number(readLine.question());

    console.log("enter model name: ")
    let modelName = String(readLine.question());

    console.log("enter RAM size: ")
    let ramSize = String(readLine.question());

    console.log("enter Processor Name: ")
    let processor = String(readLine.question());

    console.log("enter battry size: ")
    let battrySize = String(readLine.question());
    
    console.log("enter screen size: ")
    let screenSize = String(readLine.question());

    let laptop = [company, price, modelName, ramSize, processor, battrySize, screenSize];

    //obj creation
    let allLaptop = [];

    
    
    allLaptop = createLaptop(laptop);
    
    for(i = 0; i <= 20; i++){
        
    }
    
    console.log(allLaptop);
    // console.log("laptop details: ");
    // console.log();
   
    // console.log(modelName);  // to display the objects

    console.log("do yo want to register a new laptop: Y/N: ");   
    
    let decision = String(readLine.question());

    if(decision ==='y' || decision === 'Y'){
    
        newLaptopRegistration(); //reursion
    }else{
        console.log("Thank you.!!")
    }

    // let counts;
    // for(counts of allLaptop){
    //     console.log(counts)
    // }
} 

//program inception

const readLine = require("readline-sync");

console.log("do yo want to register a new laptop: Y/N")

let decision = String(readLine.question());

if(decision ==='y' || decision === 'Y'){
     newLaptopRegistration();
}else{
    console.log("Thank you.!!")
}
