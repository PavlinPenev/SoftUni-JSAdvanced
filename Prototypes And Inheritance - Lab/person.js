class Person {
    
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = '';
        Object.defineProperty(this, 'fullName', {

            get() {

                return `${this.firstName} ${this.lastName}`;

            },

            set(value) {

                const [first, last] = value.split(' ');

                if (first && last) {
                    
                    this.firstName = first;
                    this.lastName = last;

                }

            }

        })
    }
}