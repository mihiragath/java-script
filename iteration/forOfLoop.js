//for of loop is  advance version of for loop in for of loop give an variable which store the value
//and second one is related to which object we want to push on for of loop

let arr = [1, 2, 3, 4];

for (const val of arr) {
  //   console.log(val);
}

let Name = "Mihir";
for (const str of Name) {
  //   console.log(`every element of the array are ${str}`);
}

//Map
//in Map there are not allow duplicate value in map all value are uniquely identify

const map = new Map();

map.set("IN", "india");
map.set("uk", "united nations");
map.set("fra", "france");
map.set("IN", "india"); // duplicate value are not allow to print

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }not usable in object..
