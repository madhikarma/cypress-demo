// import Car from "./Car"

// VARIABLES

// ARRAYS
console.log("--- ARRAYS ---")

// total = 2
// [0] = oranges
// [1] = apples
var fruitsArray = ["oranges", "apples"]
console.log(fruitsArray)
console.log(typeof(fruitsArray))
console.log(fruitsArray.length)

var firstFruit = fruitsArray[1]
console.log(firstFruit)
console.log(Array.isArray(fruitsArray))

// STRINGS
var fruit = "banana"
console.log(fruit)
console.log(typeof(fruit))

// this kind of works but gets chars
var firstFruit = fruit[0]
console.log(fruit.length)

// NUMBERS
var total = 100
console.log(total)
console.log(typeof(total))

// this wont work as its not an array
var firstFruit = total[0]
console.log(total.length)

// CONTROL STATEMENTS - IF

if (fruitsArray.length > 0) {
    console.log("Fruits array is not empty")
} else {
    console.log("Fruits array is empty")
}

// CONTROL STATEMENTS / LOOPS - FOR LOOP

for (var index = 0; index < fruitsArray.length; index++) {
    console.log(index)
    var fruit = fruitsArray[index]
    console.log(fruit)
}
console.log("exit loop")

// var orangeObject = { name: "orange", type: "citrus" }
// var appleObject = { name: "apple", type: "unknown" }
var humanObject1 = { name: "Bob", gender: "male" }
var humanObject2 = { name: "Alice", gender: "female" }
console.log(typeof(humanObject1))
console.log(typeof(humanObject2))

console.log(humanObject1)
console.log(humanObject1.name)
console.log(humanObject1.gender)

// Array of objects
var humanObjects = [ humanObject1, humanObject2 ]
console.log(humanObjects)

for (var index = 0; index < humanObjects.length; index++) {
    console.log(index)
    var human = humanObjects[index]
    console.log(human)
}

var token =  {
    "access_token": "",
    "expires_in": 100000,
    "token_type": "Bearer",
    "scope": "read write",
    "refresh_token": ""
}
console.log(token)

// Class is a template e.g. in this case a car. It groups properties (data / variables) and functions (compared to JS objects)
class Car  {

    constructor(name, type, gearType) {
        this.name = name
        this.type = type
        this.gearType = gearType
    }

    getDescription() {
        return "name: " + this.name + " - " + "type: " + this.type + " - " + "gearType: " + this.gearType
    }
}

// Here we create an instance (object) that has Car as its type
var myCar1 = new Car("BMW", "suv", "automatic")
console.log(myCar1)

console.log(myCar1.name)
console.log(myCar1.type)
console.log(myCar1.gearType)

console.log(myCar1.getDescription())

// inheritance, subclassing i.e. OOP
class MuscleCar extends Car {

    // overrriden parent constructor
    constructor(name, type, gearType, nitro) {
        // call parent / super contructor first
        super(name, type, gearType)

        // handle  custom properties for this constructor / class
        this.nitro = nitro
    }

    getDescription() {
        return super.getDescription() + " - " + "nitro:" + this.nitro 
    }
}

// Here we create an instance (object) that has Car as its type
var myCar2 = new MuscleCar("BMW", "some muscle car", "automatic", true)
console.log(myCar2)

console.log(myCar2.name)
console.log(myCar2.type)
console.log(myCar2.gearType)
console.log(myCar2.nitro)
console.log(myCar2.getDescription())