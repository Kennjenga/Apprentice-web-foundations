// Prompting input from user
const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
const operator = prompt("Enter an oper ator (+, -, *, /):");

let result;

//Perform the arithmetic operation
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  //Zero division error
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    console.log("Error: Division by zero!");
  }
} else {
  console.log("Error: Invalid operator!");
}

// Display the result
if (result !== undefined) {
  console.log(`Result: ${result}`);
}
let ans = document.createElement("h4");
ans.innerHTML = `Result: ${result}`;
document.body.appendChild(ans);
