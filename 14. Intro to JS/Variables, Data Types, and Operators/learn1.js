//objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  hobbies: ["Reading", "Cooking", "Hiking"],
};

// const {
//   firstName,
//   address: { street },
//   hobbies,
// } = person;
// console.log(hobbies[2]);
person.email = "ken@gmail";
console.log(person);
