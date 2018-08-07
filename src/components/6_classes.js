class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is a book by ${this.author} written in ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;    
    }

    revise(newYear) {
        this.firstPublished = this.year;
        this.year = newYear;
        this.revised = true;
        return this;
    }

    static topBookStore() {
        return `Barnes and Noble`;
    }
}

// Instatiate Object

const book1 = new Book("Book One", "John Doe", "2015");

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revise("2018"));

const book2 = new Book("Book Two", "Jane Doe", "2017");

console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2.revise("2018"));

console.log(Book.topBookStore());
