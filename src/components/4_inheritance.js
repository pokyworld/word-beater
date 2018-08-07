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

// Magazine Constructor
function Magazine(title,author,year,month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit prototypes (also)
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine
const mag1 = new Magazine("Cosmo", "IPC Pubs", "2018", "August");

console.log(mag1);

// Use "Magazine Constructor"
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());