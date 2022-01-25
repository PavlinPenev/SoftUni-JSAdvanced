class Hex {

    constructor(number) {

        this.value = Number(number);

    }

    valueOf() {

        return this.value;

    }

    toString() {

        return '0x' + this.value.toString(16).toUpperCase();

    }

    plus(numberOrHex) {

        if (Number(numberOrHex)) {
            
            return new Hex(this.value + numberOrHex);

        }

        return new Hex(parseInt(numberOrHex.value, 16) + this.value);

    }

    minus(numberOrHex) {

        if (Number(numberOrHex)) {
            
            return new Hex(this.value - numberOrHex);

        }

        return new Hex(parseInt(numberOrHex.value, 16) - this.value);

    }

    parse(string) {

        return parseInt(string, 16);

    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));