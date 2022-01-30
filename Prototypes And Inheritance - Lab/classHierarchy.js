function classHierarchy() {

    class Figure {

        constructor(unitValue = 'cm') {

            this.unitValue = unitValue;
            this.area = 0;
            Object.defineProperty(this, 'area', {

                get() {

                    return this.area;

                }

            })
        }

        changeUnits(unitValue) {

            this.unitValue = unitValue;

        }

        convertUnits(value) {

            if (this.unitValue == 'm') {

                return value /= 100;

            } else if (this.unitValue == 'mm') {

                return value *= 10;

            }

            return value;

        }

        toString() {

            return `Figures units: ${this.unitValue}`;

        }
    }

    class Circle extends Figure {

        constructor(radius) {

            super()
            this.radius = radius;
            Object.defineProperty(this, 'area', {

                get() {

                    this.rad = this.convertUnits(this.radius);

                    return Math.PI * this.rad ** 2;

                }

            })
        }

        toString() {

            return `${super.toString()} Area: ${this.area} - radius: ${this.rad}`;

        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {

            super(units);
            this.width = width;
            this.height = height;
            Object.defineProperty(this, 'area', {

                get() {

                    this.wid = this.convertUnits(this.width);
                    this.hei = this.convertUnits(this.height);

                    return this.wid * this.hei;

                }

            })
        }

        toString() {

            return `${super.toString()} Area: ${this.area} - width: ${this.wid}, height: ${this.hei}`;

        }
    }

    return {

        Figure,
        Circle,
        Rectangle

    }
}
