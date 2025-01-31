console.log("Multiply");
function Multiply(a, b) {
  let mul = a * b;
  console.log(mul);
}

////////////////////////////////////
let x = 123456789;
module.exports = x;

module.exports = {
  x: x,
  Multiply: Multiply,
};
