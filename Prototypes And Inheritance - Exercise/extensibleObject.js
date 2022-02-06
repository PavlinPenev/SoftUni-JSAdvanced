function extensibleObject() {

    const proto = Object.getPrototypeOf(this);

    this.extend = function(obj) {

        for (const key in obj) {
            
            if(typeof obj[key] === 'function') {

                proto[key] = obj[key];
            
            } else {

                this[key] = obj[key];

            }

        }

    }

    return this;

}

const myObj = extensibleObject();
var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

myObj.extend(template);
console.log(Object.getPrototypeOf(myObj).hasOwnProperty('extensionMethod'));
