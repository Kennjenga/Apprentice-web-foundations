//numbers, strings, object[] {},boolean use typeof operator
let myname = "kennneth";
console.log(myname.substring(0, 5).toUpperCase());

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
//with let values belong within the scope declared

//const
//const x = 5;
{
  const x = 3;
  console.log(x); // 3
}
console.log(x);

//const array = new Array(1, 2, 3, 34, 4, 5);
const newa = ["appple", "banana", "coconut", "eggs"];
//newa = [];
//newa = ["mango", "watermelon", "pine", "kiwi"];
newa[2] = "cocomelon";

//array methods(push, unshift, pop, shift.indexOf)
newa.unshift("anchovis");
console.log(newa);
console.log(Array.isArray(newa));
