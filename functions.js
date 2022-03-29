// function func1(arg1, arg2, arg3) {}

// const funkcija = (br1, br2) => {
//   return br1 * br2;
// };
// console.log(funkcija(2, 3));

// let proizvod = funkcija(10, 2);
// console.log(proizvod);

// function func1() {}

// const func1 = () => {
//   let car = "bmw";
//   return car;
//   console.log(car);
// };

// console.log(func1());

// const faktorijal = (br) => {
//   let fakt = 0;
//   if (br > 0) fakt++;
//   for (let i = 1; i < br; i++) {
//     fakt *= i;
//   }
//   return fakt;
// };
// console.log(faktorijal(3));

// function faktorijel(broj) {
//   for (let i = broj - 1; i > 0; i--) {
//     broj *= i;
//   }
//   console.log(broj);
// }

// faktorijel(5);
// let name = "ajsa";
// num1 = 1;
// num2 = 19;

// function getScore() {
//   let num1 = 2;
//   let num2 = 3;

//   function add() {
//     return name + " scored " + (num1 + num2);
//   }
//   return add;
// }

// console.log(num1);
// console.log(getScore());

// num = 32442;

// function reverse(num) {
//   let num_to_str = num.toString();
//   let res = "";
//   for (let i = num_to_str.length - 1; i >= 0; i--) {
//     res += num_to_str[i];
//   }
//   console.log(res);
// }

// reverse(num);

// var var1 = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [4, 5, 6],
// ];

// for (let i = 0; i < var1.length; i++) {
//   for (let j = 0; j < var1[i].length; j++) {
//     process.stdout.write(var1[i][j] + "\t");
//   }
//   console.log("\n");
// }

// for (var i = 0; i < 5; i++) {
//   function fn() {
//     console.log(i);
//   }

//   setTimeout(fn, 200);
// }

// const niz = [
//   [1, 3, 6],
//   [1, 3, 6],
//   [1, 3, 6],
// ];

// for (let i = 0; i < niz.length; i++) {
//   niz[i][niz[i].length - i - 1] = 0;
// }

// for (let i = 0; i < niz.length; i++) {
//   for (let j = 0; j < niz[i].length; j++) {
//     process.stdout.write(niz[i][j] + "\t");
//   }
//   console.log("");
// }

// console.log(niz);

// function identityMatrix(a) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//       if ((i === j && a[i][j] !== 1) || (i !== j && a[i][j] !== 0)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(
//   identityMatrix([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
//   ])
// );

// function rowSum(row) {
//   sumRow = 0;
//   for (let i = 0; i < row.length; i++) {
//     sumRow += row[i];
//   }
//   return sumRow;
// }

// const orderBySum = (someArray) => {
//   let result = [];
//   for (let i = 0; i < someArray.length; i++) {
//     let min = rowSum(someArray[i]);
//     for (let j = i + 1; j < someArray.length; j++) {
//       let rs = rowSum(someArray[j]);
//       if (rs < min) {
//         min = rs;
//       }
//       result.push(min);
//     }
//   }
//   return result;
// };

// console.log(
//   orderBySum([
//     [1, 3],
//     [4, 2],
//     [2, 1],
//   ])
// );

// const findOddOneOut = (someArray) => {
//   for (let i = 0; i < someArray.length; i++) {
//     if (someArray[0] !== someArray[1] && someArray[1] === someArray[2]) {
//       return someArray[0];
//     } else if (someArray[i] !== someArray[i + 1]) {
//       return someArray[i + 1];
//     }
//   }
// };

// console.log(findOddOneOut(["b", "a", "a", "a"]));

// const splitByOddAndEven = (arr) => {
//   let parni = [];
//   let neparni = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && parni.includes(arr[i]) === false) {
//       parni.push(arr[i]);
//     } else if (arr[i] % 2 !== 0 && neparni.includes(arr[i]) === false) {
//       neparni.push(arr[i]);
//     }
//   }
//   parni.sort((a, b) => a - b);
//   neparni.sort((a, b) => a - b);
//   return [parni, neparni];
// };

// console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]));

const mix = (firstArray, secondArray) => {
  res = [];
  for (let i = 0; i < firstArray.length + secondArray.length; i++) {
    if (firstArray[i] !== undefined) {
      res.push(firstArray[i]);
    }
    if (secondArray[i] !== undefined) {
      res.push(secondArray[i]);
    }
  }
  return res;
};

console.log(mix([1, 2, 3, 0], [4, 5, 6]));
console.log(mix(["h", "a", "c"], [7, 4, 17, 10, 48]));
