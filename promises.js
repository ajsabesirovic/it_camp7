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

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];
let initialVal = {};
const godine = people.reduce((previousValue, currentValue) => {
  if (currentValue["age"] in initialVal) {
    initialVal[currentValue["age"]].push(currentValue);
  } else {
    initialVal[currentValue["age"]] = [currentValue];
  }
  return initialVal;
}, initialVal);

console.log(initialVal);
