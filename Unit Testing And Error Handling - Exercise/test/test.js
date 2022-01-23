const {expect} = require('chai');
const isOddOrEven = require('./evenOrOdd');
const lookupChar = require('./charLookup');
const mathEnforcer = require('./mathEnforcerObject');

describe('Even or Odd Tests', () => {

    it('returns undefined when given arguement is not a string', () => {

        expect(isOddOrEven(3)).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);

    })

    it('returns odd when given string is with odd number of letters', () => {

        expect(isOddOrEven('asd')).to.equal('odd');
        expect(isOddOrEven('asdghjk')).to.equal('odd');

    })

    it('returns even when given string is with even number of letters', () => {

        expect(isOddOrEven('utre')).to.equal('even');
        expect(isOddOrEven('tommorow')).to.equal('even');

    })
})

describe('Char Lookup Tests', () => {

    it('returns undefined if given arguements are not valid types', () => {

        expect(lookupChar(4, 4)).to.equal(undefined);
        expect(lookupChar('blah blah', '4')).to.equal(undefined);
        expect(lookupChar(3,'dasdf')).to.equal(undefined);

    })

    it('returns Incorrect index when index is out of range', () => {

        expect(lookupChar('sdfgh', -1)).to.equal('Incorrect index');
        expect(lookupChar('sdfgh', 5)).to.equal('Incorrect index');

    })

    it('returns undefined when given floating number as an arguement', () => {

        expect(lookupChar('sdg', 1.1)).to.equal(undefined);
        expect(lookupChar('sdg', 2.99)).to.equal(undefined);

    })

    it('works perfectly fine with proper arguements', () => {

        expect(lookupChar('asd', 1)).to.equal('s');
        expect(lookupChar('asd', 2)).to.equal('d');
        expect(lookupChar('asd', 0)).to.equal('a');

    })
})

describe('Math Enforcer Tests', () => {

    it('adds 5 to the number that is passed to the addFive method', () => {

        expect(mathEnforcer.addFive(3)).to.equal(8);
        expect(mathEnforcer.addFive(-3)).to.equal(2);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(3.3)).to.equal(8.3);

    })

    it('addFive method returns undefined if given a string or object as an arguement', () => {

        expect(mathEnforcer.addFive('3')).to.equal(undefined);
        expect(mathEnforcer.addFive('blahsf')).to.equal(undefined);
        expect(mathEnforcer.addFive({})).to.equal(undefined);

    })

    it('subtracts 10 to the number that is passed to the subtractTen method', () => {

        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
        expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5);

    })

    it('subtractTen returns undefined if given a string or object as an arguement', () => {

        expect(mathEnforcer.subtractTen('3')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('blahsf')).to.equal(undefined);
        expect(mathEnforcer.subtractTen({})).to.equal(undefined);

    })

    it('sums the two given parameters properly if numbers', () => {

        expect(mathEnforcer.sum(3, 5)).to.equal(8);
        expect(mathEnforcer.sum(3.3, 5.5)).to.equal(8.8);
        expect(mathEnforcer.sum(-3.3, 5.5)).to.equal(2.2);
        expect(mathEnforcer.sum(-3.3, -5.5)).to.equal(-8.8);

    })

    it('sum returns undefined if one or two of the parameters are not number', () => {

        expect(mathEnforcer.sum('3', '9')).to.equal(undefined);
        expect(mathEnforcer.sum({}, 9)).to.equal(undefined);
        expect(mathEnforcer.sum('3', 9)).to.equal(undefined);
        expect(mathEnforcer.sum(3, '9')).to.equal(undefined);

    })
})