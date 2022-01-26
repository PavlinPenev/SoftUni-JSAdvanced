class Textbox {
    
    constructor(selector, regexPattern) {

        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regexPattern;

    }

    get value() {

        return this._value;

    }

    set value(val) {

        this._value = val;

        for (const elem of this._elements) {
            
            elem.value = this._value;

        }

    }

    get elements() {

        return this._elements;

    }

    isValid() {

        return !this._invalidSymbols.test(this._value);

    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
