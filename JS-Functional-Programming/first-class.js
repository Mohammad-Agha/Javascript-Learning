function sayHello() {
  return "Hello World"
}

/**
 * we are passing sayHello to fn variable (we aren't calling it)
 * fn is a reference to the sayHello function
 */ 
let fn = sayHello
let msg = fn()
console.log(msg) // Hello World

// we are passing a function as an argument for another function
function greet(fnMessage) {
  console.log(fnMessage())
}
greet(sayHello) // Hello World

// here instead of returning a string we will return another function
function sayHello2() {
  return function() {
    return "Hello World"
  }
}

let fn2 = sayHello2() // fn2 is a function because sayHello function returns a function
let msg2 = fn2() // msg is now the string
console.log(msg2)