// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} is a book by ${this.author} written in ${this.year}`;
    }
    console.log("Book inhstantiated");
}

// Instantiate
const book1 = new Book("Book One", "John Doe","2015");
console.log(book1);

const book2 = new Book("Book Two", "Jane Doe","2017");
console.log(book2.getSummary());