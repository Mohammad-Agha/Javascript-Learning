const person = {
    name: "Mohammad",
    // greetings: function () {
    //     return `Hello my name is: ${this.name}`;
    // }
    greetings() {
        return `Hello my name is: ${this.name}`;
    }
}

console.log(person.greetings());