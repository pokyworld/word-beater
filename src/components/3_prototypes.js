// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} is a book by ${this.author} written in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

// Revise or Change Year
Book.prototype.revise = function(newYear) {
    this.firstPublished = this.year;
    this.year = newYear;
    this.revised = true;
}


// Instantiate an object(s)
const book1 = new Book("Book One", "John Doe","2015");
console.log(book1);

const book2 = new Book("Book Two", "Jane Doe","2017");
console.log(book2.getSummary());
console.log(book1.getAge());

console.log(book2);
book2.revise("2018");
console.log(book2);