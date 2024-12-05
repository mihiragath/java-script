class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase(); //_email is private element which is access by only function
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}chai`;
  }

  set password(value) {
    this._password = value;
  }
}

const chai = new User("m@chai.ai", "abc");
console.log(chai.email);
