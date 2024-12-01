//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}
//var if avoid by every developer..

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "mihir";

  function two() {
    const website = "ac.com";
    console.log(username);
  }
  // console.log(website); not right way to define subclass variable

  two();
}

// one()

if (true) {
  const username = "mihir";
  if (username === "mihir") {
    const website = " ac.com";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
