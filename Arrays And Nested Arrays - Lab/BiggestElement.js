function biggestElement(matrix) {
    let biggestEl = matrix[0][0];
    for(let row of matrix) {
        if(Math.max(...row) > biggestEl) {
            biggestEl = Math.max(...row);
        }
    }
    return biggestEl;
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));