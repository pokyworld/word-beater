// Object of Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} is a book by ${this.author} written in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    },
    revise: function(newYear) {
        this.firstPublished = this.year;
        this.year = newYear;
        this.revised = true;
        return this;
    }
}

console.log(bookProtos);

// Create Object

const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "2015";

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revise("2018"));


// Alternative Syntax
const book2 = Object.create(bookProtos, {
    title: {value: "Book Two" },
    author: { value: "Jane Doe" },
    year: { value: "2017", writable: true }
})

console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());
console.log(book2.revise("2018"));
