function diagonalSums(matrix) {
    let straightDiagonalSum = 0;
    let reverseDiagonalSum = 0;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i === j) {
                straightDiagonalSum += matrix[i][j];
            }
            if((i + j) === (matrix.length - 1)) {
                reverseDiagonalSum += matrix[i][j];
            }
        }
    }
    console.log(straightDiagonalSum, reverseDiagonalSum);
}
diagonalSums([[20, 40],
    [10, 60]]);
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);