// const s1 = 'Hello';
// console.log(s1.toUpperCase());
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);

// console.log(navigator.appVersion);

const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2015",
    getSummary: function() {
        return `${this.title} is a book by ${this.author} written in ${this.year}`;
    }
};

const book2 = {
    title: "Book Two",
    author: "Jane Doe",
    year: "2017",
    getSummary: function() {
        return `${this.title} is a book by ${this.author} written in ${this.year}`;
    }
};

// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));
// console.log(Object(book1));

const books = {
    items: [
        {
            title: "Book One",
            author: "John Doe",
            year: "2015"
        },
        {
            title: "Book Two",
            author: "Jane Doe",
            year: "2017"
        }
    ],
    getSummary: function(index) {
        const item = this.items[index];
        return `${item.title} is a book by ${item.author} written in ${item.year}`;
    }
}

books.items.forEach((item, index) => {
    console.log(books.getSummary(index));
});



