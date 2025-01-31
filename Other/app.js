// let name = "Namaste Node Js";
// let a = 10;
// let b = 20;

// console.log(name);
// console.log(a + b);

/////////////////////////////////////////////
// console.log(window);
// console.log(frames);
// console.log(self);
// console.log(globalThis);
// console.log(global);
// console.log(globalThis === global);

///////////////////////////////////

// var name = "Green Gobline";
// let num1 = 55;
// let num2 = 10;
// console.log(num1 + num2);

// console.log(globalThis);

///////////////////////////////////////////////
// const calculateSum = require("./sum");
// const Multiply = require("./multiply");
// let aa = calculateSum(5, 5);
// console.log(aa);
// Multiply(5, 5);

/////////////////////////////////////////////
// console.log(Multiply);

//////////////////// exporting in form of objects ///////////////
// let obj = require("./multiply");
// console.log(obj.x);
// obj.Multiply(5, 5);

/////////////////////////////////////////////////////////////////////
const obj = require("./sum.js");
obj.calculatesum(2, 2);
