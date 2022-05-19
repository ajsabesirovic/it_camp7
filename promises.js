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
//   (previousValue, currentValue) => previousValue + currentValue
//   // initialValue
// );

// console.log(sumWithInitial);
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  []
);
