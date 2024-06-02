// Data types
// String
const mname = "John Doe";
document.getElementById("string").innerHTML = `String: ${mname}`;
// Number (integer)
let age = 30;
document.getElementById("num").innerHTML = `Number: ${age}`;
// String
const email = "john.doe@example.com";
// Boolean
const isStudent = true;
document.getElementById("bool").innerHTML = `Boolean: ${isStudent}`;

//Variable declaration
//let
let tr = 1;
{
  let tr = 2;
  console.log(tr);
}
console.log(tr);

//var
var x = 5;
{
  var x = 3;
  console.log(x); // 3
}
console.log(x);
document.querySelector(".dec").innerHTML =
  "with let values belong within the scope declared";

//operators
let operx = 64;
let opery = 76;

//Arithmetic operators
// Addition (+)
document.getElementById("add").innerHTML = `Addition: ${operx} + ${opery} = ${
  operx + opery
}`;

//subtraction
document.getElementById(
  "sub"
).innerHTML = `Subtraction: ${operx} - ${opery} =  ${operx - opery}`;

//division
document.getElementById("div").innerHTML = `Division: ${operx} / ${opery} =  ${
  operx / opery
}`;

//multiplication
document.getElementById(
  "mul"
).innerHTML = `Multiplication: ${operx} * ${opery} = ${operx * opery}`;

//modulus
document.getElementById("mod").innerHTML = `Modulus: ${operx} % ${opery} = ${
  operx % opery
}`;

//exponantiation
document.getElementById(
  "exp"
).innerHTML = `Exponantiation: ${operx} ** ${opery} = ${operx ** opery}`;

//comparison operators
//equal to
document.getElementById("eq").innerHTML = `Equal to: ${operx} == ${opery} = ${
  operx == opery
}`;

//greater than
document.getElementById(
  "gth"
).innerHTML = `Greater than: ${operx} > ${opery} = ${operx > opery}`;

//less than or equal to
document.getElementById(
  "lte"
).innerHTML = `Less than or equal to: ${operx} <= ${opery} = ${operx} <= ${opery}`;

//logical operators
//and
document.getElementById(
  "and"
).innerHTML = `logical and: ${operx} && ${opery} = ${operx && opery}`;

//or
document.getElementById(
  "or"
).innerHTML = `logical and: ${operx} || ${opery} = ${operx || opery}`;
