// For strings
const person = {
    name: "Mohammd Agha",
    age: 21
}

const greetings =
    `Hello ${person.name} you are ${person.age} years old`;

console.log(greetings);

// For objects

// A function that returns an object
const createPerson = (fname, lname, age) => ({ fname, lname, age });
const person1 = createPerson("Mohammad", "Agha", 21);
console.log(person1);

