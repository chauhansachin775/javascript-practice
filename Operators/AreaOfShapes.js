
function areaOfrectangle(length, bredth){
    return length * bredth;
}

function areaOfSquare(side){
    return side * side;
}

function areaOfCircle(radius){
    return (3.14159 * radius * radius);
}

function areaOfTriangle(base, height){
    return (base * height) / 2;
}

console.log("area of the rectangle with length 12cm and bredth 6cm is : "+areaOfrectangle(12, 6));
console.log("area of the square with side 8cm is "+areaOfSquare(8));
console.log("area of the circle with the radius 13cm is :"+areaOfCircle(13));
console.log("area of the triangle with base 10cm and height 16cm is: "+areaOfTriangle(10, 16));
