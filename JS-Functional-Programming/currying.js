const pipe = require('lodash/fp/pipe')

// currying is a technique that allows us to take a function that has n arguments and convert it to a function that has a single argument
const add = (a, b) => a + b // instead of this

const betterAdd = a => b => a + b // we use this

console.log(add(5, 10)) // instead of separating our arguments by a comma

console.log(betterAdd(5)(10)) // we separate them by a () 

let input = "  javaScripT  "

const trim = str => str.trim()
const wrap = (type, str) => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase()

/**
 * the pipe function builds a pipeline i.e the output of a function is passed as an input to the next function
 * because of the we are having this output <javascript>undefined</javascript> because the toLowerCase function
 * is passing the javascript string as the first argument (type) of the wrap function and the second argument (str)
 * is undefined
 */
const transform = pipe(trim, toLowerCase, wrap)
console.log(transform(input)) // <javascript>undefined</javascript>

const betterWrap = type => str => `<${type}>${str}</${type}>`
const betterTransform = pipe(trim, toLowerCase, betterWrap("span"))
console.log(betterTransform(input))