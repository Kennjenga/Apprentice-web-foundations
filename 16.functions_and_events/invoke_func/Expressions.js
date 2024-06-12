/*anonymous function that multiplies two numbers 
and assign it to a variable called multiply.*/

let multiply = function (n1, n2) {
  return n1 * n2;
};
console.log(`Multiplication result: ${multiply(4, 8)}`);

/*function using the Function Constructor stored 
in a variable */
const divide = new Function("a", "b", "return a / b");

const result = divide(10, 2);
console.log(`Result: ${result}`);
