//first way to define string
let name = "Mihir";
let age = 19;

//console.log("value is:" + name + "age is:" + age);
//but this way is not a proper way to write this

console.log(`Name of the person is: ${name} And Age is: ${age}`);

//second way to define string
const gameName = new String("mihir001"); //using this way we use this keyword to point the variable

//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase);
//console.log(gameName.charAt(3));

const userName = new String("mihir_agath");
//const newString = userName.substring(2, 7);
//console.log(newString);

const passWord = userName.slice(-11, 3);
console.log(passWord);

const namePerson = "    Mihir    ";
console.log(namePerson);
console.log(namePerson.trim());
//there are two type of trin
// 1]Ltrim.  ->which mean remove left side space
// 2]Rtrim. ->which mean remove right side sppace

const url = "https://mihir.com/mihir%20agath";
console.log(url.replace("%20", "-"));

const fetch = url.includes("mihir");
console.log(fetch);

const devideString = "mihir-agath-001";
console.log(devideString.split("-"));
