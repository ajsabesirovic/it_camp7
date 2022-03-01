// let num = 0
// num += 7
// num = num + 1
// num --
// console.log(num)

broj1 = 10;
broj2 = 6;
// console.log(broj1 === broj2)

// broj1 > 5
//   ? console.log("broj je veci od 5")
//   : console.log("broj je manji od 5");

// if (broj1 > 5){
//     dskjkg
// }
// else{
//     jfkhf
// }

// if (broj1 === broj2) {
//     console.log('jednaki')
// }
// else if(broj1 > broj2){
//     console.log('broj 1 je veci od broj2')

// }
// else{
//     console.log('broj2 je veci')
// }

// if(broj1 > broj2){
//     console.log('broj 1 je veci od broj2')

// }
// if(broj1 === broj2) {
//     console.log('jednaki')
// }
// else{
//     console.log('broj2 je veci')
// }

// console.log(true || true)

// true and true = true
// TRUE AND FALSE = FALSE

// and &&
// or ||
// true or true = true

// console.log('ajsa' + 7)

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// num = 1
// for(let i = 1; i < 11; i++){
//     num ++
// console.log(`Lifting weights repetition ${num}`)
// }

// str = 'AJSA '
// //     01234

// // for(let i = 0; i < str.length; i++){
// //     console.log(str[i])
// // }

// zbir = 0;
// for(let i = 1; i < 11; i++){
//     zbir += i
// }

// console.log(zbir)

// izracunati zbir prvih 10 parnih brojeva

// for(let i = 1; i< 11; i+=2){
//     console.log(i)
// }
// for (let i = 1; i < 11; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 10 = 10
// var1 = 17;
// console.log(`ja imam ${var1} `);
// a = 2;
// console.log(a ** 3);

// for (let i = 1; i < 11; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// suma = "";
// for (let i = 1; i <= 5; i++) {
//   suma += "*";
//   console.log(suma);
// }

// for (let i = 4; i >= 1; i--) {
//   console.log(suma.substr(0, i));
// }
// for (let i = 1; i <= 4; i++) {
//   console.log(suma.substr(i));
// }
// console.log(5 + 5 + "11");
// const strrr = "Mozilla";

// console.log(strrr.substr(1, 3));
// expected output: "oz"

// let znak = "";

// for (let i = 1; i <= 9; i++) {
//   if (i <= 5) {
//     znak += "*";
//   } else {
//     znak = znak.replace("*", "");
//   }
//   console.log(znak);
// }

// name = "ajsaaAaAa";
// console.log(name.replaceAll("a", "*"));
// console.log(name.replace("a", "A"));

// for (let i = 0; i < name.length; i++) {
//   if (name[i] === "a") {
//     name = name.replace(name[i], "*");
//   }
//   name = name.replace("a", "*");
// }
// console.log(name);
// const p =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// console.log(p.replaceAll("dog", "monkey"));

// firstName = "Ajsa";
// lastName = "Besirovic";
// console.log(firstName + " " + lastName);
// console.log(firstName.concat(" ", lastName));

// console.log(firstName.includes("a"));

// let str = "The quick brown fox jumps over the lazy dog.";
// str = str.split("u");
// console.log(str);
// console.log(str.substr(1, 4));

// console.log(str);

// str = "     jjj jjjj       jj     ";
// console.log(str.trim());

// let text = "HELLO WORLD";
// // let char = text.charAt(0);
// console.log(text);

// text[6] = "*";

// console.log(text);

// let e = "endzi";
// console.log(typeof e);
// if (typeof e === "string") {
//   console.log("trueeeee");
// }

// const sentence = "the quick brown fox jumps over the lazy dog.";

// console.log(sentence.replace(sentence[0], sentence[0].toLocaleUpperCase()));

str = "NaMe";
for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLocaleUpperCase()) {
    str = str.replace(str[i], str[i].toLowerCase());
  } else {
    str = str.replace(str[i], str[i].toLocaleUpperCase());
  }
}
console.log(str);
