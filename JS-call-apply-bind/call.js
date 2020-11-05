let printFullName = function () {
  console.log(`${this.firstname} ${this.lastname}`)
}

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



printFullName.call(name1)
printFullName.call(name2)
printFullName.call(name3)

printData.call(name1, "USA", 20)
printData.call(name2, "UK", 25)
printData.call(name3, "Brazil", 38)