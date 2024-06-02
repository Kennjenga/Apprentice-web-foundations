const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("enter name", "John Doe");

console.log(name);
