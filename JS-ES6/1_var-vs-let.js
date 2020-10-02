// Variable declaration

// var name = "John Doe";
// var name = "James Doe"; // This wont throw an error
// console.log(name);

// let name = "John Doe";
// let name = "James Doe"; // This will throw an error
// console.log(name);

// Scope

// function test() {
//     var itsVar = "I'm var";
//     let itsLet = "I'm let";
//     console.log(itsVar, itsLet);

//     if (true) {
//         let newLet = "Hi I'm let"; // this variable will limited to the if statement block
//     }
//     console.log(newLet); // will throw a reference error
// }
// test(); // calling the function


// var functions = [];
// for (var i = 0; i < 3; i++) {
//     functions[i] = function () {
//         console.log("My value: " + i);
//     }
// }
// for (var j = 0; j < 3; j++) {
//     functions[j](); // all values will be equal to 3
// }

// var functions = [];
// for (let i = 0; i < 3; i++) {
//     functions[i] = function () {
//         console.log("My value: " + i);
//     }
// }
// for (var j = 0; j < 3; j++) {
//     functions[j](); // values will be 1, 2, 3
// }

// Hoisting 

// function hoisting() {
//     console.log(someVar); // undefined
//     var someVar = "Hello World";
//     console.log(someVar); // Hello World
// }
// hoisting()

// function hoisting() {
//     console.log(someVar); // Reference Error
//     let someVar = "Hello World";
//     console.log(someVar); // Hello World
// }
// hoisting();

// Creating global object property

// var name = "John"; // globally scoped
// let age = 18; // globally scoped

// console.log(window.name); // John
// console.log(window.age); // undefined