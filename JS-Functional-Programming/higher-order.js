let nums = [1, 2, 3, 4]
// map function takes as input a function an goes through all elements of an array and returns an array
let multipliedNums = nums.map(num => num * 10)
console.log(multipliedNums)

// filter function
let filteredNums = nums.filter(num => num <= 2)
console.log(filteredNums)

// setTimeout is another example of a higher order function because it's first argument is a function
setTimeout(() => console.log('Hello World'), 1000)