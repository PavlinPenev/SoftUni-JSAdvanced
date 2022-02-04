(function arrayExtension() {

    Array.prototype.last = function() {

        return this[this.length - 1];

    }

    Array.prototype.skip = function(n) {

        return this.slice(Number(n));

    }

    Array.prototype.take = function(n) {

        return  this.filter((i, index) => (index < Number(n)));

    }

    Array.prototype.sum = function() {

        return this.reduce((a, b) => a + b, 0);

    }

    Array.prototype.average = function() {

        return this.reduce((a, b) => a + b, 0) / this.length;

    }
})();