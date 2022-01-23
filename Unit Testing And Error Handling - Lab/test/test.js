const { expect } = require('chai');
const sum = require('./sumOfNumbers');

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
});