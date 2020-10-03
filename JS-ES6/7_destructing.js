// ES5
const person1 = {
  firstname: "Mohammad",
  lastname: "Agha",
  age: 21,
};

// const fname = person1.firstname;
// const lname = person1.lastname;
// const age = person1.age;

// ES6

const { firstname, lastname, age } = person1;
console.log(firstname, lastname, age);

// to customize the naming of the variable
const { firstname: fname, lastname: lname, age: personAge } = person1;
console.log(firstname, lastname, personAge);

// For nested objects

const person2 = {
  firstname: "Mohammad",
  lastname: "Agha",
  age: 21,
  address: {
    city: "Aramoun",
    street: "Doha",
    building: "Shorouk",
    floor: 4,
  },
};

const {
  address: { city, street, building, floor },
} = person2;
console.log(city, street, building, floor);

// For arrays

const arr = [1, 2, 3, 4, 5];
const [a, b] = arr;
console.log(a, b);

const [, , , c, d] = arr;
console.log(c, d);

const [, e, , f] = arr;
console.log(e, f);

// If we want to swap two numbers
let num1 = 10;
let num2 = 22;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);

// Destructing with rest parameter to reassign array elements

const array1 = [1, 2, 3, 4, 5, 6, 7];
const [x, y, ...newArr] = array1;
console.log(x, y, newArr);

// Destructing to pass an object as a function's parameter

const printInfo = (data) => {
  const {
    firstname: fname,
    lastname: lname,
    age: personAge,
    address: { city, street, building, floor: floorNumber },
  } = person2;

  console.log(fname, lname, personAge, city, street, building, floorNumber);
};
printInfo(person2);
