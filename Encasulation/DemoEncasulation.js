class Person{

    setPersonDetails(name, age, pId){
        this.name = name
        this.age = age
        this.pId = pId
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age
    }

    getPId(){
        return this.pId
    }

}

let person_1 = new Person()
person_1.setPersonDetails('sachin', 31, 101)

let person_2 = new Person()
person_2.setPersonDetails('anil', 28, 102)


console.log(person_1)
console.log(person_2)

console.log()

console.log(person_1.getName())
console.log(person_1.getAge())
console.log(person_1.getPId())

console.log()

console.log(person_2.getName())
console.log(person_2.getAge())
console.log(person_2.getPId())

