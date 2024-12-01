/*
    there are two types to create an object:
        1]singleton
            ->object.create()

        2]object literals
*/

// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Mihir",
  "full name": "Mihir Agath",
  [mySym]: "mykey1",
  age: 19,
  location: "Porbandar",
  email: "mihir@yahu.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mihir@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "mihir@outlook.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
