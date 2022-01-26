const {expect} = require('chai');
const PaymentPackage = require('./paymentPackage');
const StringBuilder = require('./stringBuilder');

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

describe('String Builder Tests', () => {

    //constructors
    it('is instantiated with a string', () => {

        const sb = new StringBuilder('pavkata');
        expect(sb.toString()).to.equal('pavkata');
        expect(sb._stringArray).to.deep.equal(['p', 'a', 'v', 'k', 'a', 't', 'a']);
        expect(sb._stringArray.length).to.equal(7);
        expect(typeof sb).to.equal('object');
        expect(sb).to.be.instanceOf(StringBuilder);

    })

    it('is instantiated with an empty constructor', () => {

        const sb = new StringBuilder();
        expect(sb.toString()).to.equal('');

    })

    it('should return empty array if given parameter is undefined', () => {

        const sb = new StringBuilder(undefined);
        expect(sb._stringArray).to.deep.equal([]);

    })

    it('throws error when invalid type parameters are passed to constructor', () => {

        expect(() => { new StringBuilder(3)}).to.throw('Argument must be a string');
        expect(() => { new StringBuilder([])}).to.throw('Argument must be a string');
        expect(() => { new StringBuilder({})}).to.throw('Argument must be a string');
        expect(() => { new StringBuilder(false)}).to.throw('Argument must be a string');

    })

    //append
    it('appends the passed parameter correctly', () => {

        const sb = new StringBuilder('asd');
        sb.append('qwer');
        expect(sb.toString()).to.equal('asdqwer');

    })

    it('throws error when invalid parameter is passed/append', () => {

        const sb = new StringBuilder('asd');
        expect(() => { sb.append(3) }).to.throw('Argument must be a string');
        expect(() => { sb.append([])}).to.throw('Argument must be a string');
        expect(() => { sb.append({})}).to.throw('Argument must be a string');
        expect(() => { sb.append(false)}).to.throw('Argument must be a string');

    })

    it('works in combination with other methods/append', () => {

        const sb = new StringBuilder('asd');
        sb.prepend('boom ');
        sb.insertAt('qwer', 1); // bqweroom asd
        expect(sb.toString()).to.equal('bqweroom asd');

    })

    //prepend
    it('prepends the passed parameter properly', () => {

        const sb = new StringBuilder('asd');
        sb.prepend('qwer');
        expect(sb.toString()).to.equal('qwerasd');

    })

    it('throws error when invalid parameter is passed/prepend', () => {

        const sb = new StringBuilder('asd');
        expect(() => { sb.prepend(3) }).to.throw('Argument must be a string');
        expect(() => { sb.prepend({}) }).to.throw('Argument must be a string');
        expect(() => { sb.prepend([]) }).to.throw('Argument must be a string');
        expect(() => { sb.prepend(false) }).to.throw('Argument must be a string');

    })

    it('works in combination with other methods/prepend',() => {

        const sb = new StringBuilder('asd');
        sb.append('qwer');
        sb.prepend('ty');
        expect(sb.toString()).to.equal('tyasdqwer');

    })

    //insertAt
    it('inserts At given index properly', () => {

        const sb = new StringBuilder('asd');
        sb.insertAt('qwer', 1);
        expect(sb.toString()).to.equal('aqwersd');

    })

    it('throws error when invalid parameter is passed/insertAt', () => {

        const sb = new StringBuilder('asd');
        expect(() => { sb.insertAt(3, 1) }).to.throw('Argument must be a string');
        expect(() => { sb.insertAt({}, 1) }).to.throw('Argument must be a string');
        expect(() => { sb.insertAt([], 1) }).to.throw('Argument must be a string');
        expect(() => { sb.insertAt(false, 1) }).to.throw('Argument must be a string');

    })

    it('works in combination with other methods/insertAt', () => {

        const sb = new StringBuilder('asd');
        sb.append('qwer');
        sb.prepend('123');
        sb.insertAt('123', 0);
        expect(sb.toString()).to.equal('123123asdqwer');

    })

    //remove
    it('removes a substring properly', () => {

        const sb = new StringBuilder('asd');
        sb.remove(1, 1);
        expect(sb.toString()).to.equal('ad');

    })

    it('works in combination with other methods/remove', () => {

        const sb = new StringBuilder('asd');
        sb.append('qwer');
        sb.prepend('ty');
        sb.insertAt('for', 2);
        sb.remove(5, 3);
        expect(sb.toString()).to.equal('tyforqwer');

    })
})