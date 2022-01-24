class Point {

    constructor(x, y) {

        this.x = x;
        this.y = y;

    }

    static distance(p1, p2) {

        return Math.hypot(p2.x - p1.x, p2.y - p1.y);

    }

}