//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//**************************** End ***********************************

// Reference (Non primitive)

// Array, Objects, Functions

const person = ["Sahil", "Ram", "Bhavesh"];
let myObj = {
  name: "Mihir",
  age: 19,
};

console.log(myObj.name);

const myFunction = function () {
  console.log("Function calling");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
