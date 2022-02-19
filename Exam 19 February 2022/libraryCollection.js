class LibraryCollection {

    constructor(capacity) {

        this.capacity = Number(capacity);
        this.books = [];

    }

    addBook(bookName, bookAuthor) {

        if (this.books.length === this.capacity) {
            
            throw new Error('Not enough space in the collection.')

        }

        this.books.push({bookName, bookAuthor, payed: false});

        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    }

    payBook(bookName) {

        if (!(this.books.some(book => book.bookName === bookName))) {
           
            throw new Error(`${bookName} is not in the collection.`);

        }

        const currentBook = this.books.find(book => book.bookName === bookName);

        if (currentBook.payed) {
            
            throw new Error(`${bookName} has already been paid.`);

        }

        currentBook.payed = true;

        return `${bookName} has been successfully paid.`;

    }

    removeBook(bookName) {

        if (!(this.books.some(book => book.bookName === bookName))) {
           
            throw new Error("The book, you're looking for, is not found.");

        }

        const currentBook = this.books.find(book => book.bookName === bookName);

        if (!currentBook.payed) {
            
            throw new Error(`${bookName} need to be paid before removing from the collection.`);

        }

        this.books.filter(book => book.bookName !== bookName);

        return `${bookName} remove from the collection.`;

    }

    getStatistics(bookAuthor) {

        let returnMessage = '';

        if (bookAuthor == undefined) {
            
            returnMessage += `The book collection has ${this.capacity - this.books.length} empty spots left.`;

            this.books.sort((b1, b2) => b1.bookName.localeCompare(b2.bookName));
            returnMessage += `\n${this.books.map(book => {

                return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;

            }).join('\n')}`

        } else {

            const currentBook = this.books.find(book => book.bookAuthor === bookAuthor);

            if (currentBook == undefined) {
                
                throw new Error(`${bookAuthor} is not in the collection.`);

            }

            returnMessage += `${currentBook.bookName} == ${currentBook.bookAuthor} - ${currentBook.payed ? 'Has Paid' : 'Not Paid'}.`;

        }

        return returnMessage;


    }

}

let library = new LibraryCollection(5);

library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");

console.log(library.getStatistics()) ;
// `The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.`);