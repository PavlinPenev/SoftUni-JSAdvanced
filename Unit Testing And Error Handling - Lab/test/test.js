const { expect } = require('chai');
const sum = require('./sumOfNumbers');
const isSymmetric = require('./checkSymmetry');
const rgbToHexColor = require('./rgbToHex');
const createCalculator = require('./createCalculator');

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

describe('RGB to HEX Tests', () => {

    it('returns undefined if out of range parameters', () => {

        expect(rgbToHexColor(-3,5,196)).to.equal(undefined);
        expect(rgbToHexColor(3,-5,196)).to.equal(undefined);
        expect(rgbToHexColor(3,5,-196)).to.equal(undefined);

        expect(rgbToHexColor(3,5,256)).to.equal(undefined);
        expect(rgbToHexColor(3,256,6)).to.equal(undefined);
        expect(rgbToHexColor(300,5,56)).to.equal(undefined);

    })

    it('returns undefined if parameters are not numbers', () => {

        expect(rgbToHexColor('3',5,196)).to.equal(undefined);
        expect(rgbToHexColor(3,'5',196)).to.equal(undefined);
        expect(rgbToHexColor(3,5,'196')).to.equal(undefined);
        
    })

    it('returns proper hex represantations', () => {

        expect(rgbToHexColor(66, 135, 245)).to.equal('#4287F5');
        expect(rgbToHexColor(5, 10, 18)).to.equal('#050A12');
        expect(rgbToHexColor(79, 9, 23)).to.equal('#4F0917');

        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');

    })
})

describe('Add Subtract Tests', () => {

    it('returns an object as a result of the function', () => {

        expect(typeof createCalculator()).to.equal('object');

    })

    it('contains the three functions add, subtract, get as properties', () => {

        const object = createCalculator();
        expect(object).haveOwnProperty('add');
        expect(object).haveOwnProperty('subtract');
        expect(object).haveOwnProperty('get');

    })

    it('gets properly', () => {

        const object = createCalculator();
        object.add(3);
        expect(object.get()).to.equal(3);

    })

    it('sums properly', () => {

        const object = createCalculator();
        object.add(3);
        object.add(3);
        expect(object.get()).to.equal(6);
        object.add(5);
        expect(object.get()).to.equal(11);

    })

    it('subtracts properly', () => {

        const object = createCalculator();
        object.add(3);
        object.subtract(2);
        expect(object.get()).to.equal(1);
        object.subtract(10);
        expect(object.get()).to.equal(-9);

    })

    it('calculates properly if a string represantation of a number is given', () => {

        const object = createCalculator();
        object.add('1');
        expect(object.get()).to.equal(1);

    })

    it('returns NaN if not a number or not a string represantation of a number is given', () => {

        const object = createCalculator();
        object.add('blah');
        expect(Number.isNaN(object.get())).to.be.true;

    })
})