const {expect} = require('chai');
const testNumbers = require('./testNumbers');

describe('Test Numbers Tests', () => {

    it('returns undefined when NaN parameters are given', () => {

        expect(testNumbers.sumNumbers(' ', 3)).to.equal(undefined);
        expect(testNumbers.sumNumbers({}, 3)).to.equal(undefined);
        expect(testNumbers.sumNumbers([], 3)).to.equal(undefined);
        expect(testNumbers.sumNumbers(false, 3)).to.equal(undefined);

        expect(testNumbers.sumNumbers(3, ' ')).to.equal(undefined);
        expect(testNumbers.sumNumbers(3, {})).to.equal(undefined);
        expect(testNumbers.sumNumbers(3, [])).to.equal(undefined);
        expect(testNumbers.sumNumbers(3, true)).to.equal(undefined);


    })

    it('returns the correct sum rounded to second number after floating point', () => {

        expect(testNumbers.sumNumbers(0, 23)).to.equal('23.00');
        expect(testNumbers.sumNumbers(1, 15)).to.equal('16.00');
        expect(testNumbers.sumNumbers(-1, 23)).to.equal('22.00');
        expect(testNumbers.sumNumbers(11, -23)).to.equal('-12.00');

        expect(testNumbers.sumNumbers(0.5, 23)).to.equal('23.50');
        expect(testNumbers.sumNumbers(13.65, 1.36)).to.equal('15.01');
        expect(testNumbers.sumNumbers(-0.5, 23)).to.equal('22.50');
        expect(testNumbers.sumNumbers(-13.658, 5.416)).to.equal('-8.24');

    })

    it('returns the number is even if input is even', () => {

        expect(testNumbers.numberChecker(0)).to.equal(`The number is even!`);
        expect(testNumbers.numberChecker(2)).to.equal(`The number is even!`);
        expect(testNumbers.numberChecker(26)).to.equal(`The number is even!`);
        expect(testNumbers.numberChecker(-2)).to.equal(`The number is even!`);
        expect(testNumbers.numberChecker(-22)).to.equal(`The number is even!`);

    })

    it('returns the number is odd when input is odd', () => {

        expect(testNumbers.numberChecker(1)).to.equal(`The number is odd!`);
        expect(testNumbers.numberChecker(13)).to.equal(`The number is odd!`);
        expect(testNumbers.numberChecker(35)).to.equal(`The number is odd!`);
        expect(testNumbers.numberChecker(-1)).to.equal(`The number is odd!`);
        expect(testNumbers.numberChecker(-21)).to.equal(`The number is odd!`);
        expect(testNumbers.numberChecker(-37)).to.equal(`The number is odd!`);       

    })

    it('throws error if given parameter is NaN', () => {

        expect(() => testNumbers.numberChecker('hjkg')).to.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker({})).to.throw('The input is not a number!');
        expect(() => testNumbers.numberChecker()).to.throw('The input is not a number!');
        
    })

    it('it calculates average sum properly', () => {

        expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.equal(3);
        expect(testNumbers.averageSumArray([-3, 2, -25, 47, 51])).to.equal(14.4);
        expect(testNumbers.averageSumArray([3, -21, 0])).to.equal(-6);

    })

})