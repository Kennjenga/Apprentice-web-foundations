const n = Number(prompt("Enter any positive number"));

// Handle invalid input (negative or non-numeric)
if (n <= 0 || isNaN(n)) {
  console.log("Please enter a positive integer.");
}

// Initialize the first two Fibonacci numbers
let a = 0;
let b = 1;
let seq = 1;
let seqarray = [];

// Loop through the sequence up to the specified number
while (seq <= n) {
  let sum = 0;
  console.log(a);
  seqarray.push(a);
  sum = a + b;
  a = b;
  b = sum;
  seq += 1;
}
console.log(seqarray);
let display = document.createElement("div");
document.body.append(display);
seqarray.forEach((ele) => {
  let span = document.createElement("span");
  span.textContent = ele + " ,";
  display.append(span);
});
