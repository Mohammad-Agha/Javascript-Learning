let printData = function (hometown, age) {
  console.log(`${this.firstname} ${this.lastname} from ${hometown} and ${age} years old`)
}

let name1 = {
  firstname: "John",
  lastname: "Doe",
}

let name2 = {
  firstname: "James",
  lastname: "Doe"
}

let name3 = {
  firstname: "Foo",
  lastname: "Bar"
}

printData.apply(name1, ["USA", 21])
printData.apply(name2, ["UK", 25])
printData.apply(name3, ["Brazil", 38])