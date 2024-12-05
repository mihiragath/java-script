const promiseOne = new Promise(function (resolve, reject) {
  //Do async await task
  //do some task like cryptographi, network,and  DB calls

  setTimeout(function () {
    console.log("Hello Prommise");
    resolve(); //to connect resolve or .then() clled resolve() method inside the promise..
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
}); //.then() method is directly connected with promise resolve method

//without store promisee in variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise without calling variable");
    resolve();
  });
}, 1000).then(function () {
  console.log("promise consumed");
});

//passing value in promise
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Mihir", passWord: 1233 });
  }, 1000);
});

promiseTwo.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Mihir", email: "example@outlook.com" });
    } else {
      reject("ERROR: Something went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then(function (userName) {
    console.log(userName);
    //in thid second .then() method pass params from upper method
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is finally resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ user: "MIhir", password: 123 });
    } else {
      reject("ERROR: ufff error accure");
    }
  }, 1000);
});

//fatch data using async ..
//basically async is waiting for the result other wise return error then go to another step
async function consumePromiseFive() {
  try {
    const consume = await promiseFive;
    console.log(consume);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//using fetch method
// async function getUser() {
//   try {
//     const respose = await fetch("https://api.github.com/users/hiteshchoudhary");

//     const data = await respose.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUser();

//fetch using .then()
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
