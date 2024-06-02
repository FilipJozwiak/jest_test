class Book {
    constructor(ISBN, author, title, pageNumbers, genre) {
        this.ISBN = ISBN;
        this.author = author;
        this.title = title;
        this.pageNumbers = pageNumbers;
        this.genre = genre;
        this.borrowed = false;
    }
};

class Shelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }


    removeBook(callback) {
        this.books = this.books.filter(book => callback(book));
    }

    getAllBy(callback) {
        return this.books.filter(callback);
    }
}

class SortedShelf extends Shelf {
    constructor(sortingFunction) {
        super();
        this.sortingFunction = sortingFunction;
    }

    addBook(book) {
        super.addBook(book);
        this.books.sort(this.sortingFunction);
    }
}

class Library {
    constructor() {
        this.shelfs = [];
        this.users = new Set();
    }

    addShelf(shelf) {
        this.shelfs.push(shelf);
    }


    getBooksBy(callback) {
        let books = [];
        this.shelfs.forEach(shelf => {
            books.push(...shelf.getAllBy(callback));
        });
        return books;
    }

    getBookByAuthor(author) {
        return this.getBooksBy(book => book.author === author);
    }

    getBookByISBN(ISBN) {
        return this.getBooksBy(book => book.ISBN === ISBN);
    }

    getBookByGenre(genre) {
        return this.getBooksBy(book => book.genre === genre);
    }

    getBookByTitle(title) {
        return this.getBooksBy(book => book.title === title);
    }

    getBookByAuthorRegex(regex) {
        return this.getBooksBy(book => regex.test(book.author));
    }

    getBookByGenreRegex(regex) {
        return this.getBooksBy(book => regex.test(book.genre));
    }

    getBookByTitleRegex(regex) {
        return this.getBooksBy(book => regex.test(book.title));
    }

    addUser(user) {
        this.users.add(user);
    }

    borrowABook(user, book) {
        if (!this.users.has(user)) {
            throw new Error('UndefinedUser');
        }

        let foundBook = false;
        for (const shelf of this.shelfs) {
            foundBook = shelf.books.find(b => b === book);
            if (foundBook) break;
        }

        if (!foundBook) {
            throw new Error('NoSuchBookOnShelf');
        }

        if (foundBook.borrowed) {
            throw new Error('AlreadyBorrowed');
        }

        book.borrowed = true;
        user.books.push(book);
    }
}


class User {
    static nextId = 0;

    constructor(name) {
        this.id = User.nextId++;
        this.name = name;
        this.books = [];
    }
}


module.exports = {};
module.exports.Book = Book;
module.exports.Shelf = Shelf;
module.exports.SortedShelf = SortedShelf;
module.exports.Library = Library;
module.exports.User = User;