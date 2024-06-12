//create an arrow functions
let arrowMultiply = (n1, n2) => {
  return n1 * n2;
};
console.log(arrowMultiply(4, 8));

let isPositive = (n) => {
  if (n >= 0) return true;
  return false;
};
console.log(isPositive(0));
console.log(isPositive(7));
console.log(isPositive(-5));
