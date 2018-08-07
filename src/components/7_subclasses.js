// Book Class

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

// Magazine Subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine("GQ", "IPC Co Ltd", "2017", "June");

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getAge());
console.log(mag1.revise("2018"));
