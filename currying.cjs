// // function curry(f) {
// //   return function (a) {
// //     return function (b) {
// //       return f(a, b);
// //     };
// //   };
// // }

// // function sum(a, b) {
// //   return a + b;
// // }

// // let curriedSum = curry(sum);

// // console.log(curriedSum(1)(2));
// var curry = require("auto-curry");

// let sum = curry(function (a, c, b) {
//   return a + b + c;
// });

// // function sum(a) {
// //   return function (b) {
// //     return a + b;
// //   };
// // }
// // let sumwith10 = sum(10);
// // console.log(sumwith10(8));
// // console.log(sumwith10(3));

// console.log(sum(1)(2)(6));

// var curry = require("auto-curry");

// var add = curry(function (a, b) {
//   return a + b;
// });

// var messWithThis = curry(function (v) {
//   console.log(this.a, " a");
//   console.log(v, " v");
//   console.log("=====================");
//   this.a.push(v);
//   return ++v;
// });

// var map = curry(function map(fn, list) {
//   var self = arguments[2] ? arguments[2] : this;
//   try {
//     return list.map(fn, self);
//   } catch (e) {
//     return [].map.call(list, fn, self);
//   }
// });

// var x = { a: [] };

// console.log(map(add(1), [1, 2, 3])); //[2, 3, 4]
// console.log(map(messWithThis, [1, 2, 3], x)); //[2, 3, 4]
// console.log(x.a); //[1, 2, 3]

// var _ = require("lodash/core");

// let firstTwoLetters = function (words) {
//   return _.map(words, function (word) {
//     return _.first(2, word);
//   });
// };
// console.log(firstTwoLetters(["ajsa", "besirovic"]));

const addCustomer =
  (fn) =>
  (...args) => {
    console.log("saving customers info...");
    return fn(...args);
  };
const processOrder =
  (fn) =>
  (...args) => {
    console.log(`processing order #${args[0]}...`);
    return fn(...args);
  };

let completedOrder = (...args) => {
  console.log(`order #${[...args].toString()} completed`);
};
completedOrder = processOrder(completedOrder);
console.log(completedOrder);
completedOrder = addCustomer(completedOrder);

completedOrder("123");
