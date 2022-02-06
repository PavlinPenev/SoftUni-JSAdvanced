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
