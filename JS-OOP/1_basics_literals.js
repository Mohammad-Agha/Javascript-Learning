// Object Literal
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// Object Literal
const book2 = {
  title: "Book Two",
  author: "James Doe",
  year: "2015",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// If we want to keep creating books it will be a pain and also we have to duplicate getSummary() a lot, so we are repeating ourselves. Here where constructors come in handy

console.log(book1.getSummary());
console.log(book2.getSummary());
