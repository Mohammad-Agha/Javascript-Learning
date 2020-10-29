const { produce } = require('immer')

let person = { name: "Mohammad", age: 21 }

// here we are mutating the person object
const eligible = person => {
  person.isEligible = true
  return person
}


const betterEligible = person => {
  return produce(person, draftPerson => {
    draftPerson.isEligible = true
  })
}

let updatedPerson = betterEligible(person)

console.log(person)
console.log(updatedPerson)
