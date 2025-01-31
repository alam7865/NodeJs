console.log("Sum");
let x = 100;
function calSum(a, b) {
  let sum = a + b;
  console.log(sum);
}

/////////////// Single return ///////////////////////
// module.exports = calSum;
// module.exports = x;

//////////////////// return in Obj ///////////////////
module.exports = {
  x: x,
  calSum: calSum,
};
