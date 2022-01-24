class Circle {

    constructor(radius) {

        this.radius = Number(radius);

    }

    set diameter(value) {

        this.radius = value / 2;

    } 

    get diameter() {

        return this.radius * 2;

    };

    get area() {

        return Math.PI * (this.radius ** 2);

    }
}