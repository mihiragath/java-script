/*
there are two type of memory in java script
    1]stack 
        -> used in primitive datatype,
        make a copy of tyhe variable

    2]heap 
    -> used in non-primitive datatype,
    provide an address or variable which is stored in heap.
*/

//stack memory
console.log("STack memory");

let name = "Mihir"; //|     |
//|Mihir|
let rename = name;
rename = "Agath"; //|Agath|
//|Mihir|

console.log(name);
console.log(rename);

//heap memory

console.log("heap memory");

let person = {
  email: "xyz@gmail.com",
  pass: "123@123",
};

let personedit = person;

personedit.email = "abc@gmail.com";

console.log(person.email);
console.log(personedit.email);
