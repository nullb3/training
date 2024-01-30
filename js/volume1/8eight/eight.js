//Create an object named ticket, with 3 values, and display to console.

let ticket = {
    from: String("Berlin"),
    to: String("Essen"),
    price: Number(12)
};

console.log("This ticket applies from "+ticket.from+" to "+ticket.to+", with a price of "+ticket.price+".");

//Create a blank person object, then add the values later and print to console.

let person = {};
person.name = String("Charles");
person.surname = String("Storm");

console.log("The name is "+person.name+", "+person.name+" "+person.surname+".");

//Create an object named book, with 3 values, and info on various books.

let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460 // Book 0
},{
    title: "Programming JavaScript",
    author: "Eric Elliott",
    pages: 254 // Book 1
},{
    title: "Understanding ECMAScript",
    author: "Nicholas C. Zakas",
    pages: 352 // Book 2
}];

// Create the possibilty of adding new books from a new books section, THIS INCLUDES BONUS 0B CONTENT.

let newBooks = [{
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254 // Book 3
},{
    title: "How2JS",
    author: "0b3",
    pages: 255 // Book 4
}];

let bookShelf = books.concat(newBooks);

let bookSelected = 4 //Selects a book using array position and then prints the info with real world bookshelf position.

console.log(`The book selected is ${(bookSelected+1)}: Title: ${bookShelf[bookSelected].title} Author: ${bookShelf[bookSelected].author} Pages: ${bookShelf[bookSelected].pages}`);

// Make a selection of books including the last ones added.

let selectedBooks = bookShelf.slice(-2);

console.log(`The selection of last books is Title: ${selectedBooks[0].title} and ${selectedBooks[1].title}`);

// Make a recap of the size of collections.

console.log(`The total of books in the bookshelf was ${bookShelf.length}. that includes ${books.length} old books and ${newBooks.length} new books. A selection of ${selectedBooks.length} was made.`);

//Sum the pages of the whole collection.

console.log(`The whole collection sums up ${(bookShelf[0].pages+bookShelf[1].pages+bookShelf[2].pages+bookShelf[3].pages+bookShelf[4].pages)} pages.`);

// 1st book is lost, recap the whole library.

let lostBook = bookShelf.shift();

console.log(`However, the 1st book was lost, so total of books in the bookshelf is ${bookShelf.length}. The title of the last book ever registered was ${bookShelf[3].title}`);
console.log(`The title of the lost book was ${lostBook.title}.`);