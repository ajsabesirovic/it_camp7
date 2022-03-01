// arr = [1, 2.0, "jsf", {}];
// function name(params) {}
// const fn = () => {};
// arr2 = arr.filter((el) => el === "1");

// console.log(arr2);

// console.log(arr2);

// () => {};

// const array1 = [1, 2, 3];

// array1.forEach((element) => console.log(element * 2));
// console.log(array1);

// let arr = [1, 2, 3, 4, 5];
// let var1 = arr.reduce((prevValue, currentVal) => {
//   return prevValue + currentVal;
// }, 2);
// console.log(var1);

const cars = ["Saab", "Volvo", "BMW"];

// cars[3] = "MERCEDES";
// const cars = [];
// cars[0] = "Saab";
// cars[2] = "Volvo";
// cars[1] = "BMW";

// console.log(cars[-2]);

// const cars = new Array("Saab", "Volvo", "BMW");
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruit);
// fruits.unshift("Lemon");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);

// const myGirls = ["ajsa", "ena", "lamija"];
// const myBoys = ["velid", "fatih", "mirza"];

// const myChildren = myBoys.concat(myBoys);
// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, "Apple", "Kiwi");
// console.log(fruits);

// fruits.splice(1, 2);
// fruits.slice(1);
// const citrus = fruits.slice(1, 2);

// console.log(citrus);
// console.log(fruits.toString());
// fruits.sort();
// console.log(fruits);

// const nums = [1, 5, 11, 3];
// // nums.sort();
// nums.sort(function (a, b) {
//   return b - a;
// });

// console.log(nums[0]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (let i of fruits) {
  console.log(i);
}
