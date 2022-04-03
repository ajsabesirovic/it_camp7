// // let person = 'ajsa'

// const person = {
//   name: "AJSA",
//   last_name: "BESIROVIC",
//   age: 17,
//   arr: [1, 2, 3, 4],
//   fullName: function () {
//     // console.log(this);
//     return this.name + this.last_n;
//   },
// };

// console.log(this);
// console.log(this);
// console.log(person.name);
// console.log(person["name"]);

// console.log(person.last_name);

// console.log(person.fullName());

// person.height = 170;
// person.age = 20;
// console.log(person);

// let obj = new Object();
// obj.a = "a";
// obj.b = "b";

// console.log(obj);

// for (let i in person) {
//   console.log(i, person[i]);
// }
//

const aB = {
  a: "a",
  b: "dsajk",
  obj: {
    full_name: {
      name: "ajsa",
      last: "bes",
    },
  },
};

// const b = {
//   a: "a",
//   b: "b",
// };

// let c = { ...a };
// c.a = "djdsasd";
// c.obj = [2, 2, 2];
// c.obj = { last: "bes" };

// console.log(c);
// console.log(a);

let { b, a } = aB;
let preuyetaVRednost = aB.a;

console.log(b);

b = "CHANGED";

console.log(aB);
console.log(b);
