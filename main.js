// # Car factory

// Create a constructor function that can be used to create objects.
function Factory(make, model, year, type = "car") {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
}


// The objects your factory creates should all have a "type" property that always has the value "car".

// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

// Use your function to create 10 different cars. Store all of them inside a "garage" array.

let car1 = new Factory("Audi", "A3", "2010");
let car2 = new Factory("BMW", "A3", "2010");
let car3 = new Factory("VW", "A3", "2010");
let car4 = new Factory("Benz", "A3", "2010");
let car5 = new Factory("Toyota", "A3", "2010");
let car6 = new Factory("Skoda", "A3", "2010");
let car7 = new Factory("Voxhol", "A3", "2010");
let car8 = new Factory("Mini", "A3", "2010");
let car9 = new Factory("gini", "A3", "2010");
let car10 = new Factory("Rari", "A3", "2010");

const garage = [
    { ...car1 },
    { ...car2 },
    { ...car3 },
    { ...car4 },
    { ...car5 },
    { ...car6 },
    { ...car6 },
    { ...car7 },
    { ...car8 },
    { ...car8 },
    { ...car10 },
];

console.log(garage);