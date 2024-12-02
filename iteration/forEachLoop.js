const coding = ["js", "ruby", "java", "python", "cpp"];

// using simple function
// coding.forEach( function (val){
//     console.log(val);
// } )

// using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// colling simple function and give reference
// function printMe(item){
//     console.log(item);
// }
//give reference
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName, ":-", item.languageFileName);
});
