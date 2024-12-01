const user = {
  username: "mihir",
  age: 19,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); //this keyword is usesd indicate that actual variable which is inside the scope and current state
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function person(){
//     let username = "mihir"
//     console.log(this.username);
// }

// person()

// const person = function () {
//     let username = "Mihir"
//     console.log(this.username);
// }

const person = () => {
  let username = "Mihir";
  console.log(this);
};

// person()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } using {} with arror function we must be return value..

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // using () with arror function we don't need to return value

const addTwo = (num1, num2) => ({ username: "Mihir" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
