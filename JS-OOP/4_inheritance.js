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

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype (will be easier when using classes)
Magazine.prototype = Object.create(Book.prototype);

// Now Magazine is using the book's
// To use Magazine constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Mag 1", "johnn doee", "2017", "June");

console.log(mag1);
console.log(mag1.getSummary());
