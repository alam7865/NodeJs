// require("./zyz");
// const calculatesum = require("./sum");
// const obj = require("./sum");
// const multiply = require("./zyz");
let name = "Hello Sabaz Alam";
let a = 10;
let b = 20;
// calculatesum(50, 50);
// multiply(10, 20);
// console.log(name);
// console.log(a + b);

// ////////////////////////////////
// obj.calculatesum(a, b);
// console.log(obj.x);

////////////////////////////////////////////////////
// Destructuring
const { calculatesum, x } = require("./sum");
calculatesum(a, b);
console.log(x);

// ////////////////////////////////////////////////////
// import { calculatesum, x } from "./sum.js";
// calculatesum(a, b);
// console.log(x);
