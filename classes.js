// class Person {
//   constructor(name, lastName, age, method1) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     this.method1 = method1;
//   }
//   static birthYear(arg) {
//     return 2022 - arg.age;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// let pers1 = new Person("ajsa", "bes", 17, () => {
//   return "1234567890";
// });

// console.log(Person.hello());

// console.log(Person.birthYear(pers1));

// class Car {
//   constructor(brand, num) {
//     this.carname = brand;
//     this.num = num;
//   }
//   present() {
//     return "I have a " + this.carname + this.num;
//   }
// }

// class Model extends Car {
//   constructor(brand, num, mod) {
//     super(brand, num);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", 22, "Mustang");
// console.log(myCar.show());

// reversed = (str) => {
//   arr = str.split("");
//   arr.sort();
//   newStr = arr.join("");
//   return newStr;
// };

// console.log(reversed("webmaster"));

capsLock = (str) => {
  array1 = str.split(" ");
  let newarray1 = [];

  for (let i = 0; i < array1.length; i++) {
    newarray1.push(array1[i][0].toUpperCase() + array1[i].slice(1));
  }
  return newarray1.join(" ");
};
console.log(capsLock("the quick brown fox"));
