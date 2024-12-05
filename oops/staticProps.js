class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  //The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
  static createId() {
    return `123`;
  }
}

const user = new User("user");
// console.log(user.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
