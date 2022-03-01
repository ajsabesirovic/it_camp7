// while(hgdfgds){
// fdufds
// decodeURIfdhh
// dhjjds

//
// while (true) {
//   console.log(7);
//   console.log(8);
// }
// let i = 0;
// let text = "";
// while (i < 10) {
//   text = "The number is " + i;
//   i++;
// }

// console.log(text);

// while (i < 16) {
//   if (i % 2 == 0) {
//     console.log("NUM is even", i);
//   } else {
//     console.log("NUM is odd", i);
//   }
//   i++;
// }

// while (i < arr.length) {
//   if (arr[i] % 2 === 0) {
//     console.log("num is even", i);
//   } else {
//     console.log("num is odd", i);
//   }
//   i++;
// }

// let i = 10;
// do {
//   console.log("HEY");
// } while (i < 15);
// do {
//   text += "The number is " + i;
//   i++;
// } while (i < 10);

// for (let i = 0; i < 10; i++) {
//   console.log("AAAAA");
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
// while (i < arr.length) {
//   if (arr[i] > 99) {
//     i++;
//     continue;
//   }
//   if (arr[i] % 2 === 0) {
//     console.log("num is even", arr[i]);
//   } else {
//     console.log("num is odd", arr[i]);
//   }
//   i++;
// }
// console.log(arr);

let i = 0;
arr = [1, 266, 4, 65, 22, 76, 4465, 98];
arr.sort(function (a, b) {
  return a - b;
});

while (i < arr.length) {
  if (arr[i] > 99) {
    i++;
    break;
  }
  if (arr[i] % 2 === 0) {
    console.log("num is even", arr[i]);
  } else {
    console.log("num is odd", arr[i]);
  }
  i++;
}
