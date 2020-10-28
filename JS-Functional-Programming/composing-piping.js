const compose = require('lodash/fp/compose')
const pipe = require('lodash/fp/pipe')

// this is a non-functional way of trimming a string and adding it to a div
let input = "  javaScripT  "
let output = `<div>${input.trim()}</div>`

// a function that trims a string
const trim = str => str.trim()
// a function that wraps a string inside a div
const wrapInDiv = str => `<div>${str}</div>`
// a function that converts a string to lower case
const toLowerCase = str => str.toLowerCase()

// we will get rid of all these paranthesis with lodash
// const result = wrapInDiv(toLowerCase(trim(input)))

/**
 * here we wrapped all the 3 functions in 1 function which is transform
 * but the only problem left is we are still reading the execution from right to left
 * so here where pipe comes into handy
 */
const transform = compose(wrapInDiv, toLowerCase, trim)

// here we pass the functions in the same order we want to execute them 
const betterTrasform = pipe(trim, toLowerCase, wrapInDiv)
console.log(betterTrasform(input))

/**
 * let us suppose we want to add another function which wrap a string into a span or any other html container
 * there will be a lot of code duplication because we will be doing the similar thing for the div
 * 
 */
const wrapInSpan = str => `<span>${str}</span>`