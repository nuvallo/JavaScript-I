// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => console.log("Function was invoked!");
console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

let anotherFunction = parm => {
  return parm;
};

console.log(anotherFunction("Example"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (parm1, parm2) => {
  return parm1 + parm2;
};

console.log(add(1, 3));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (parm1, parm2) => {
  return parm1 - parm2;
};

console.log(subtract(1, 2));

// Stretch

// exampleArray = [1, 2, 3, 4];
// const triple = exampleArray.map(function(num) {
//   return num * 3;
// });
// console.log(triple);

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => {
  return num * 3;
});
console.log(triple);
