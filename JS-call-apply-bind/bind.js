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

let bindedPrintData1 = printData.bind(name1)
console.log(bindedPrintData1);
bindedPrintData1("USA", 21)

let bindedPrintData2 = printData.bind(name2, "UK")
bindedPrintData2(25)

let bindedPrintData3 = printData.bind(name2, "Brazil", 38)
bindedPrintData3()
