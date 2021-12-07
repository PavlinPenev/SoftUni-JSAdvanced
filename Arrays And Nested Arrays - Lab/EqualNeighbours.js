function equalNeighbours(matrix) {
    let pairsCount = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (i === matrix.length - 1) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    pairsCount++;
                }
            } else {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    pairsCount++;
                }

                if (matrix[i][j] === matrix[i][j + 1]) {
                    pairsCount++;
                }
            }
        }
    }
    return pairsCount;
}
console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));