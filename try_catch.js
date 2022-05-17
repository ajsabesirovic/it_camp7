// try {
//   try {
//     console.log(count);
//   } catch (e) {
//     console.log(e.message);
//   }
// } catch {
//   console.log(888888);
// }

// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.log(error);
// }

// try {
//   try {
//     throw new Error("oops");
//   } catch (ex) {
//     console.error("inner", ex.message);
//     throw ex;
//   } finally {
//     console.log("finally");
//   }
// } catch (e) {
//   console.error("outer", e.message);
// } finally {
//   console.log("FINALLY");
// }

// setInterval(() => {
//   myFunction("I love You !!!");
// }, 1000);

// function myFunction(value) {
//   console.log(value);
// }

// const calculator = (a, b, func) => {
//   value = a + b;
//   func(value);
// };

// calculator(2, 4, displayValue);

// console.log(4)
// let value = 7
// value += 3
// console.log(value)

// setTimeout(() => {
//   displayValue("first setTimeout");
// }, 3000);

// console.log(`1234567890`);

// setTimeout(() => {
//   displayValue("second setTimeout");
// }, 2000);

// console.log(6);

// const displayValue = (value) => {
//   console.log(value);
// };

// setInterval(() => {
//   displayValue("interval");
// }, 1000);

// console.log("CLG");

// const func = () => {
//   const date = new Date();
//   date.getMinutes() < 10
//     ? (x = "0" + date.getMinutes())
//     : (x = date.getMinutes);
//   console.log(date.getHours() + ":" + x + ":" + date.getSeconds());
// };

// setInterval(func, 1000);
