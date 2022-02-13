const {expect} = require('chai');
const library = require('./library');

describe('Library Tests', () => {

    //calcPriceOfBook Tests
    it('initial value should be 20 bgn', () => {

        expect(library.calcPriceOfBook('Harry Potter', 1998)).to.equal(`Price of Harry Potter is 20.00`);
        expect(library.calcPriceOfBook('My Book', 2022)).to.equal(`Price of My Book is 20.00`);

    });

    it('should apply 50% discount if publish year is less than or equal to1980', () => {

        expect(library.calcPriceOfBook('Not Harry Potter', 1980)).to.equal(`Price of Not Harry Potter is 10.00`);
        expect(library.calcPriceOfBook('Not Harry Potter and philosophers stone', 1963)).to.equal(`Price of Not Harry Potter and philosophers stone is 10.00`);

    })

    it('function should throw error with invalid parameters', () => {

        expect(() => library.calcPriceOfBook(23, 1998)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook([], 1998)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook(false, 1998)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook({}, 1998)).to.throw('Invalid input');

        expect(() => library.calcPriceOfBook('Harry Potter', '1998')).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook('Harry Potter', [])).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook('Harry Potter', false)).to.throw('Invalid input');
        expect(() => library.calcPriceOfBook('Harry Potter', {})).to.throw('Invalid input');


    })

    //findBook Tests
    it('array should include all the books in the given parameter', () => {

        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal("We found the book you want.");
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal("We found the book you want.");
        expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Life Style')).to.equal("We found the book you want.");
        expect(library.findBook(['Harry Potter', 'My Book', 'Ready Player One'], 'My Book')).to.equal("We found the book you want.");
        expect(library.findBook(['Harry Potter', 'My Book', 'Ready Player One'], 'Harry Potter')).to.equal("We found the book you want.");
        expect(library.findBook(['Harry Potter', 'My Book', 'Ready Player One'], 'Ready Player One')).to.equal("We found the book you want.");

    })

    it('should throw error if array length is 0', () => {

        expect(() => library.findBook([], 'Harry Potter')).to.throw('No books currently available');

    })

    it('returns no book found message when its not in the library', () => {

        expect(library.findBook(['Harry Potter', 'My Book'], 'Ready Player One')).to.equal("The book you are looking for is not here!");
        expect(library.findBook(['Harry Potter', 'My Book'], 'The Cursed Child')).to.equal("The book you are looking for is not here!");
        expect(library.findBook(['Harry Potter', 'My Book'], 'The Shining')).to.equal("The book you are looking for is not here!");

    })

    //arrangeTheBooks Tests
    it('throws error if countBooks is not an integer', () => {

        expect(() => library.arrangeTheBooks('3')).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(false)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks({})).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks('Harry Potter')).to.throw('Invalid input');

    })

    it('throws error when countBooks is negative number', () => {

        expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(-57)).to.throw('Invalid input');
        expect(() => library.arrangeTheBooks(-13)).to.throw('Invalid input');

    })

    it('arranges the books when countBooks is less than the available space', () => {

        expect(library.arrangeTheBooks(1)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        expect(library.arrangeTheBooks(27)).to.equal("Great job, the books are arranged.");

    })

    it('returns falsy message if countBooks is higher than the available space', () => {

        expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.");
        expect(library.arrangeTheBooks(58)).to.equal("Insufficient space, more shelves need to be purchased.");
        expect(library.arrangeTheBooks(89)).to.equal("Insufficient space, more shelves need to be purchased.");

    })
})