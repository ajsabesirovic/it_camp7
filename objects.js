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

// let { b, a } = aB;
// let preuyetaVRednost = aB.a;

// console.log(b);

// b = "CHANGED";

// console.log(aB);
// console.log(b);

// const person = {
//   name: "ajsa",
//   lastname: "besirovic",
//   female: true,
//   age: 17,
//   hobbies: [1, 2, 3, 4],
//   objs: {},
//   funkcija: () => {
//     return "12357890";
//   },
// };

// const person1 = person;
// person.name = "lamija";

// const person1 = { ...person };
// person1.name = "lamija";
// person.age = 99;
// console.log(person);
// console.log(person1);
// console.log(person.name);
// console.log(person.lastname);
// console.log(person.funkcija());

// person["age"]

// person['objs']
// person.objs

// const obj1 = {
//   name: "lamija",
// };

// const obj2 = {
//   name: "lamija",
// };

// console.log(obj1 === obj2);
// var library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// // }

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];
// library.sort((a, b) => b.libraryID - a.libraryID);
// console.log(library);

let obj1 = {
  title: "Mockingjay",
  author: "Suzanne Collins",
  libraryID: 3245,
};
// res = [];
// for (let i in obj) {
//   console.log(obj[i]);
//   console.log(i);
//   pom = [];
//   pom.push(i);
//   pom.push(obj[i]);
//   res.push(pom);
// }

// console.log(res);

const check = (property, obj) => {
  if (obj[property]) {
    return true;
  } else {
    return false;
  }
};

console.log(check("title", obj1));
