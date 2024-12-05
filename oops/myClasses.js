// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function person(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

person.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
person.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new person("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
