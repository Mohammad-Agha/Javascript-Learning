let input = "  javaScripT  "
// this is a non-functional way of trimming a string and adding it to a div
let output = `<div>${input.trim()}</div>`

// a function that trims a string
const trim = str => str.trim()
// a function that wraps a string inside a div
const wrapInDiv = str => `<div>${str}</div>`

// funtion composition example
const result = wrapInDiv(trim(input))
console.log(result)

// a function that converts a string to lower case
const toLowerCase = str => str.toLowerCase()

// another example of function composition
const result2 = wrapInDiv(toLowerCase(trim(input)))
console.log(result2)

/**
 * in the code above we had to read the expression from right to left 
 * another problem is the complexity of the paranthesis 
 * */ 