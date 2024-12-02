//foreach loop can't return value so we don't able to access the array in this case use filter to access and modifies the value

// let coding = ["js", "react", "java", "php", "python"];

// let value = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(value); // it will return undefined bcz foreach loop not return any type of value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) return value  using fiter

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } ) return vlaue using foreach loop

// console.log(newNums);

//basically filter is used to passs some condition among the array which value are filter are return an filter value
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History"); // without return key word bcz condition are outside of the scope{}
//override value
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
}); //written in the scope so there are need to return value
console.log(userBooks);
