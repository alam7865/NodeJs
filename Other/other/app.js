console.log("Hello");
// const calSum = require("./sums.js");
// calSum(5, 5);
// console.log(calSum);

///////////////// returns in obj ////////////////
// const obj = require("./sums.js");
// console.log(obj.x); // 100
// obj.calSum(10, 5);  // 15

////////////////// Destructure ///////////////////
const { x, calSum } = require("./sums");
console.log(x);
calSum(4, 4);
