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

const promise1 = new Promise((resolve) => resolve("Promise 1"));
const promise2 = new Promise((resolve) => resolve("Promise 2"));
const promise3 = new Promise((resolve) => resolve("Promise 3"));

Promise.all([promise1, promise2, promise3]).then((messages) =>
  console.log(messages)
);
Promise.race([promise1, promise2, promise3]).then((message) =>
  console.log(message)
);
