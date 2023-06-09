//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function fav_food(obj) {
    for (let i in obj) {
        console.log(i, obj[i])
    }
}

console.log(fav_food(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name
    this.age = age

    return this
}
// NOTE: I couldn't use arrow key (=>) function because it doesn't work in protype cases becaused I tried countless times and when step by step with python tutor for javascript, 
//so I used function() instead as below

Person.prototype.printInfo = function() {
    console.log(this.name, this.age)
}

Person.prototype.addAge = function(years) {
    this.age += years;
    console.log(this.age)
}


let man = new Person("Brandon", 70)
man.printInfo()
man.addAge(3)
console.log(man)


// =============Exercise #3 ============//
/*

Create a Promised based function that will check a string to determine if it's length is greater than 10.
If the length is greater than ten console log "Big word". 
If the length of the string is less than 10 console log "Small Number*/


function str_len(str) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (str.length > 10) {
                res("Big Word")
            } else {
                rej("Small Word")
            }
        }, 2000)
    })
}
let str_ = str_len("Brandon Atonte")

console.log(str_)