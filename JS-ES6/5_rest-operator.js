const func1 = (...args) => {
    console.log("You have passed " + args.length + " arguments");
}
func1(1, 2, 3, 4, 5);
func1(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)

const sum = (...args) => args.reduce((total, num) => total + num, 0);
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));



