// this function isn't pure because everytime the output will change
const notPure = (num) => num * Math.random()
console.log(notPure(5))

// this function is pure because whenever we run the function for the same input it will give the same output
const pure = (num) => num * 10
console.log(pure(2))

// minAge is a global variable it can change later so we can't rely on it
const minAge = 18
const isEligible = age => age > minAge

// instead we should pass the minimum age to the isEligible function

const betterIsEligible = (age, minAge) => age > minAge
