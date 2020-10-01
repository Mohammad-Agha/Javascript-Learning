// Constructor (ES5)
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary through prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge of the book
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise which changes the year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an Object
const book1 = new Book("Book One", "John Doe", "2016");
const book2 = new Book("Book Two", "James Doe", "2015");

console.log(book1); // See the change now
console.log(book1.getSummary());

console.log(book2.getAge());
console.log("---------");
console.log(book2);
book2.revise("2018");
console.log(book2);

// Usage of prototype here is we want to to get the title and author for every book but we don't want to get the getSummary() of each book so we put it in the prototype
