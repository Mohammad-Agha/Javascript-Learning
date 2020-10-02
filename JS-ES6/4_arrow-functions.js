const func1 = (name, age) => {
    console.log("My name is " + name + " and I am " + age + " years old");
}
func1("Mohammad", 21);


const func2 = name => {
    console.log("My name is " + name);
}
func2("John");


const func3 = name => console.log("My name is " + name);
func3("Mohammad");


const calcSum = (num1, num2) => {
    return num1 + num2;
}
console.log(calcSum(1, 2));

// const calcSum = (num1, num2) => num1 + num2; // this will invoke an implicit return
// console.log(calcSum(1, 2));


// Although we have one argument but when we have default value we should put parenthesis around the arguments
const greetings = (name = "Stranger") => console.log("Hello " + name);
greetings();
greetings("Mohammad");
