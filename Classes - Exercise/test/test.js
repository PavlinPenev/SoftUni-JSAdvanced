const {expect} = require('chai');
const PaymentPackage = require('./paymentPackage');

describe('Payment Package Tests', () => {

    it('should throw error if name is empty string or not a string at all', () => {

        expect(() => {new PaymentPackage('', 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage(3, 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage({}, 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage([], 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage(true, 1500)}).to.throw('Name must be a non-empty string');

    })

    it('should throw error if value is not a number or negative', () => {

        expect(() => {new PaymentPackage('Engineering', '3')}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Engineering', 'dfsgh')}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Engineering', {})}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Engineering', [])}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('Engineering', true)}).to.throw('Value must be a non-negative number');

    })

    it('is properly instantiated with two valid parameters', () => {

        const obj = new PaymentPackage('Engineering', 1700);
        expect(obj.name === 'Engineering').to.be.true;
        expect(obj.value === 1700).to.be.true;

    })
    
    it('should change the value of value property when tried to be set', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        obj.value = 1900;
        expect(obj.value).to.equal(1900);

    })

    it('should change the value of name property when tried to be set', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        obj.name = 'Marketing';
        expect(obj.name).to.equal('Marketing');

    })

    it('should get the value of VAT property when instantiated', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(obj.VAT).to.equal(20);

    })

    it('should set the value of VAT property properly', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        obj.VAT = 50;
        expect(obj.VAT).to.equal(50);
    })

    it('should throw error when given VAT parameter is not a number or negative', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(() => {obj.VAT = {}}).to.throw('VAT must be a non-negative number');
        expect(() => {obj.VAT = '30'}).to.throw('VAT must be a non-negative number');
        expect(() => {obj.VAT = -30}).to.throw('VAT must be a non-negative number');

    })

    it('should get active property', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(obj.active).to.equal(true);

    })

    it('should set active property', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        obj.active = false;
        expect(obj.active).to.be.false;

    })

    it('should throw error when given active parameters are not boolean', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(() => {obj.active = '3'}).to.throw('Active status must be a boolean');
        expect(() => {obj.active = {}}).to.throw('Active status must be a boolean');
        expect(() => {obj.active = 3}).to.throw('Active status must be a boolean');

    })

    it('should return proper toString result when active is true', () => {

        const obj = new PaymentPackage('Engineering', 1700);

        const output = [
            `Package: Engineering`,
            `- Value (excl. VAT): 1700`,
            `- Value (VAT 20%): 2040`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);
    })

    it('should return proper toString result when active is false', () => {

        const obj = new PaymentPackage('Engineering', 1700);
        obj.active = false;

        const output = [
            `Package: Engineering (inactive)`,
            `- Value (excl. VAT): 1700`,
            `- Value (VAT 20%): 2040`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);

    })

    it('should return proper toString result when vat is 0', () => {

        const obj = new PaymentPackage('Engineering', 0);
        obj.VAT = 0;

        const output = [
            `Package: Engineering`,
            `- Value (excl. VAT): 0`,
            `- Value (VAT 0%): 0`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);

    })
})

