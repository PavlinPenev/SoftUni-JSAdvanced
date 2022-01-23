const { expect } = require('chai');
const sum = require('./sumOfNumbers');
const isSymmetric = require('./checkSymmetry');
const exp = require('constants');

describe('Sum Of Numbers Tests', () => {

    it('sums the array elements properly', () => {

        expect(sum([1,2,3])).to.equal(6);null   
        
    })

    it('sums the array elements properly with negative number', () => {

        expect(sum([1,-2,3])).to.equal(2);
        
    })

    it('sums the array elements properly with 0', () => {

        expect(sum([1,2,0])).to.equal(3);
        
    })
})

describe('Check for Symmetry Tests', () => {

        it('returns false for non-array arguement', () => {

            expect(isSymmetric(3)).to.be.false;
            expect(isSymmetric('abcba')).to.be.false;
            expect(isSymmetric('a')).to.be.false;

        })

        it('returns true if array is symmetric with numbers', () => {

            expect(isSymmetric([1,2,3,2,1])).to.be.true;
            expect(isSymmetric([1,2,2,1])).to.be.true;

        })

        it('returns true if array is symmetric with strings', () => {

            expect(isSymmetric(['a','b','b','a'])).to.be.true;
            expect(isSymmetric(['a','b','c','b','a'])).to.be.true;

        })

        it('returns false if array is not symmetric', () => {

            expect(isSymmetric(1,2,1,2)).to.be.false;
            expect(isSymmetric(['1', '2', '1', '2'])).to.be.false;

        })

        it('returns false if array is symmetric but with mixed data types', () => {

            expect(isSymmetric([1,2,2,'1'])).to.be.false;

        })
})