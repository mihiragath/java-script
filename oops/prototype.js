// let myName = "cofee     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.cofee = function () {
  console.log(`cofee is present in all objects`);
}; //add method on direct hiest level authority that is object that is access by array,string,and function ..

Array.prototype.heycofee = function () {
  console.log(`cofee says hello`);
}; //add method on array which can't be access by all element which is under the object

// heroPower.cofee()
// myHeros.cofee()
// myHeros.heycofee()
// heroPower.heycofee()

// inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"cofee".trueLength();
"iceTea".trueLength();
