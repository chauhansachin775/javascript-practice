//This is a function to return the round off integer value of any flotaing point number.

function roundOff(num){
    
    let reminder = num % 1;
    let roundOff = num - reminder;
    return roundOff;
}

//here we are calling the roundOff() function
//and it is returning us the integer value.
 
console.log(roundOff(678543.890546));