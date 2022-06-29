// const promise = new Promise((resolve, reject) => {
//   let a = 5;
//   if (a === 5) {
//     resolve("SUCCESS");
//   } else {
//     reject("REJECTED");
//   }
// });
// promise
//   .then((message) => console.log("this is in the THEN block " + message))
//   .catch((message) => console.log("this is in the CATCH block " + message));

// const promise1 = new Promise((resolve, reject) => resolve("Promise 1"));
// const promise2 = new Promise((resolve, reject) => resolve("Promise 2"));
// const promise3 = new Promise((resolve, reject) => resolve("Promise 3"));

// Promise.all([promise1, promise2, promise3])
//   .then((messages) => console.log(messages))
//   .catch((messages) => {
//     console.log(messages);
//   });
// Promise.race([promise1, promise2, promise3]).then((message) =>
//   console.log(message)
// );

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

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const res = array.filter((el) => {
//   for (i = 2; i < el; i++) {
//     if (el % i == 0) return false;
//   }
//   if (el > 0) return true;
// });

// console.log(res);

// const poslePosla = (arg1) => {
//   console.log("ispis vrednosti", arg1);
// };

// function mainF(callBack) {
//   let a = undefined;
//   for (let i = 0; i < 900000000; i++) {}
//   callBack(a);
// }

// mainF(poslePosla);

// const myProm = new Promise((res, rej) => {
import fetch from "node-fetch";

fetch("https://catfact.ninja/fact")
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((resObj) => {
    console.log(resObj.fact);
    console.log(resObj.length);
  })
  .catch((err) => {
    console.log(err);
  });

// console.log("asdsadsadsadsa");

// function resolve(value, milliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(value), milliseconds);
//   });
// }
// function reject(reason, milliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(reason), milliseconds);
//   });
// }

// Promise.race([
//   reject(new Error("bad error!"), 4000),
//   resolve(2, 2000),
//   resolve(222222, 2000),
// ])
//   .then((value) => console.log("this is the THEN block", value)) // does not print anything
//   .catch((error) => console.log("this is the CATCH", error.message));
// const err = new Error("petar");
// console.log(err.message);

// const myFunc = async (url) => {
//   const res = await fetch(url)
//     .then((result) => {
//       return result.json();
//     })
//     .then((resObj) => {
//       console.log(resObj.fact);
//       console.log(resObj.length);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return res;
// };

// console.log("=================");
// myFunc("https://catfact.ninja/fact");

// console.log("==================");
// const timeout = async (t) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), t);
//   });
// };
// const arr = [1, 2, 3];
// const printInOrder = async (asyncFunction, array) => {
//   await array.reduce(async (asyncFunction, currentValue) => {
//     await asyncFunction;
//     console.log(currentValue);
//   }, undefined);
//   console.log("Hello");
// };
// const sayHello = async () => {
//   console.log("Hello!");
// };

// const greeting = async () => {
//   // Pause the execution of greeting() until sayHello() fulfills
//   await sayHello();
//   console.log("How are you?");
// };
// greeting();

//     const timeout = async (t) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), t);
//       });
//     };
//     const timeout1 = async (t) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => reject("123456789"), t);
//       });
//     };
//     const sayHello = async () => {
//       await timeout(4000);
//       console.log("Hello!");
//     };
//     const greeting = async () => {
//       await timeout1(1000);
//       console.log("How are you?");
//     };
// const sayHelloAndGreet = async () => {
//   await sayHello();
//   greeting();
// };
// sayHelloAndGreet()
// .then(() => console.log("Finished saying hello and greeting!"))
// .then(() => {
//   console.log("second then");
// })
// .catch((e) => console.log(e));

// function myFunc(a, b) {
//   console.log(a + b);
// }

// console.log("hi1");
// console.log("hi2");

// myFunc(10, 9);

// console.log("hi3");

// console.log("hi1");

// setTimeout(() => {
//   console.log("setTimeout 1");
// }, 1000);

// setTimeout(() => {
//   console.log("setTimeout 2");
// }, 1000);

// console.log("hi2");

// let a = 13;
// for (let i = 2; i < a; i++) {
//   if (a % i === 0) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// let res = [1, 2, 3].filter((num) => {
//   return num < 2;
// });
// console.log(res);

const niz = [2, 3, 6, 7, 8, 9, 11, 12, 13, 15, 22];

let prime = (el) => {
  for (let i = 2; i < el; i++) {
    if (el % i == 0) {
      return false;
    }
  }
  return true;
};

let res = niz.filter((el) => {
  return prime(el);
});

console.log(res);
