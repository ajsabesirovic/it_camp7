// const promise = new Promise((resolve, reject) => {
//   let a = 4;
//   if (a === 9) {
//     resolve("SUCCESS");
//   } else {
//     reject("REJECTED");
//   }
// });
// promise
//   .then((message) => console.log("this is in the THEN block " + message))
//   .catch((message) => console.log("this is in the CATCH block " + message));

// const promise1 = new Promise((resolve) => resolve("Promise 1"));
// const promise2 = new Promise((resolve) => resolve("Promise 2"));
// const promise3 = new Promise((resolve) => resolve("Promise 3"));

// Promise.all([promise1, promise2, promise3]).then((messages) =>
//   console.log(messages)
// );
// Promise.race([promise1, promise2, promise3]).then((message) =>
//   console.log(message)
// );

// console.log("hi");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 3000);
// setTimeout(() => {
//   console.log("setTimeout1");
// }, 1000);

// console.log("hi2");

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 100;
// const sumWithInitial = array1.reduce(
//   function(previousValue, currentValue) { previousValue + currentValue},
//   initialValue
// );

// console.log(sumWithInitial);
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce(
//   (previousValue, currentValue) => previousValue.concat(currentValue),
//   []
// );

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// let obj = {};
// const repeatedNames = names.reduce(
//   (names_, name) => {
//     if (name in names_) {
//       obj[name] += 1;
//     } else {
//       obj[name] = 1;
//     }
//     return obj;
//   },

//   obj
// );

// console.log(repeatedNames);
// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// let obj = {};
// const repeatedNames = names.reduce((names_, name, index, array) => {
//   if (!(array[0] in obj)) {
//     obj[array[0]] = 1;
//   }
//   if (name in obj) {
//     obj[name] += 1;
//   } else {
//     obj[name] = 1;
//   }
//   return obj;
// });

// console.log(repeatedNames);

// const people = [
//   { name: "Alice", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Jane", age: 20 },
// ];
// let initialVal = {};
// const godine = people.reduce((previousValue, currentValue) => {
//   if (currentValue["age"] in initialVal) {
//     initialVal[currentValue["age"]].push(currentValue);
//   } else {
//     initialVal[currentValue["age"]] = [currentValue];
//   }
//   return initialVal;
// }, initialVal);

// console.log(initialVal);

// const friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and Juliet"],
//     age: 26,
//   },
//   {
//     name: "Alice",
//     books: ["The Lord of the Rings", "The Shining"],
//     age: 18,
//   },
// ];

// let initialValue = ["Alphabet"];
// const books1 = friends.reduce((previousValue, currentValue) => {
//   // return previousValue.concat(currentValue["books"]);
//   return [...previousValue, ...currentValue.books];
// }, initialValue);
// console.log(books1);

// const a = [1, 2, 3];
// const c = [4, 4];
// const b = [...a, ...c];
// console.log(b);

// const obj = {
//   name: "ajsa",
//   age: 17,
// };
// const { age } = obj;

// console.log(age);

// const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

// const arr = myArray.reduce((previousValue, currentValue) => {
//   if (!previousValue.includes(currentValue)) {
//     return previousValue.concat(currentValue);
//   }
//   return previousValue;
// }, []);
// console.log(arr);

// ==========

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const res = array.filter((el) => {
  for (i = 2; i < el; i++) {
    if (el % i == 0) return false;
  }
  if (el > 0) return true;
});

console.log(res);
