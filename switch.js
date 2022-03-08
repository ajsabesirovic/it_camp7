// let a = 4;
// switch (a) {
//   case 0:
//     console.log(`a je 0`);
//     break;
//   case 1:
//     console.log(`a je 1`);
//     break;
//   case 2:
//     console.log(`a je 2`);
//     break;
//   default:
//     console.log("dgsdg");
// }

// let day = "monday";
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "WEDNESDAY":
//   case "thursday":
//   case "friday":
//   case "saturday":
//   case "sunday":
//     console.log(day);
//     break;
//   default:
//     console.log("greska");
// }

// let a = 8;
// switch (a) {
//   case 7:
//   case 8:
//     console.log(a);
// }

// <5 very low
// <10 low
// >100 high
// default medium

// broj = 140

// switch(true){
//     case (broj<5):
//         console.log('verylow')
//         case (broj<10):
//             console.log('low')
//             case()
// }
godina = 2024;
mesec = 2;
switch (mesec) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
  case 11:
    console.log("31");
    break;
  case 2:
    if (godina % 4 === 0) {
      console.log("29");
    } else console.log("28");
    break;
  case 4:
  case 6:
  case 8:
  case 10:
  case 12:
    console.log("30");
}
