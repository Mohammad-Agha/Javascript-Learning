let person1 = {
    name: "John Doe",
    age: 33,
    gender: "Male"
}

Object.freeze(person1); // try to comment this and see the changes

person1.age++; // this will be ignored 

console.log(person1);