function sum(a, ...rest) {
  let sum = a;
  for (x of rest) {
    sum += x;
  }
  return sum;
}

console.log(sum(3, 4, 5));
console.log(0.5 - Math.random());
