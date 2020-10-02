const myArray = [1, 2, 3, 4, 5];
const newArray = [...myArray]; // copies the array
console.log(newArray);

const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1, 7, 8, 9];
console.log(arr2);

const str = "Mohammad";
const str1 = [...str]; // splits the string into an array of single
console.log(str1);

const add = (a, b, c) => a + b + c;
const arr3 = [1, 2, 3];
console.log(add(...arr3));