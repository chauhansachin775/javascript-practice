class Car{

    setCarName(carName){
        this.carName = carName
    }

    getCarName(){
        return this.carName
    }

    startEngine(){
        console.log('engine started for: '+this.carName)
    }

    stopEngine(){
        console.log('engine stoped for: '+this.carName)
    }
    
    
}

class Toyota extends Car{

    topSpeed(topSpeed){
        console.log('the top speed of '+this.carName+'is: '+topSpeed)
    }

    serviceDuration(){
        console.log(`service duration of Toyota ${this.getCarName()} is every 15000 KMS`)
    }
}

let myCar = new Toyota()

myCar.setCarName('camry')
console.log(myCar.getCarName())
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed(200)
myCar.serviceDuration()


