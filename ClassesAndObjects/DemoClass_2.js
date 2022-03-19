class Car{

    //declaring car properties

    carName
    type
    engine


    //creating constructor for Object initialization

    constructor(carName, type, engine){
        this.carName = carName;
        this.type = type;
        this.engine = engine;

    }

    // getter methods for accessing individual properties

    getCarName(){
        return this.carName;
    }

    getCarType(){
        return this.type;
    }

    getCarEngine(){
        return this.engine;
    }
            
}


let bmw = new Car('x6', 'coupe', '3000cc')

let volkswagon = new Car('polo', 'hachback', '1000cc')


console.log(bmw);
console.log(volkswagon);
console.log(bmw.getCarEngine());
