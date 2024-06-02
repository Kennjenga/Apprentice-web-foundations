class Person {
  constructor(firstName, lastName, dob) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear = () => {
    return this.dob.getFullYear();
  };
  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const Person1 = new Person("john", "Doe", "4-3-2003");
const Person2 = new Person("Ken", "last", "1-1-3001");
console.log(Person1.getBirthYear());
console.log(Person2);
