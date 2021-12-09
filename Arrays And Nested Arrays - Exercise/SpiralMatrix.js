function spiralMatrix(rows, cols){
    let rowTopPointer = 0;
    let rowDownPointer = rows - 1;
    let colLeftPointer = 0;
    let colRightPointer = cols - 1;
    let direction = 0; // decides in which direction the spiral moves, 0 - left to right, 1 - top to down, 2 - right to left, 3 - down to top
    let matrix = [];
    let counterToFillMatrix = 1;

    for(let i = 0; i < rows; i++){
        matrix.push(new Array(cols));
    }
    
    while(rowTopPointer <= rowDownPointer && colLeftPointer <= colRightPointer) {
        if(direction === 0) {
            for(let i = colLeftPointer; i <= colRightPointer; i++) {
                matrix[rowTopPointer][i] = counterToFillMatrix++;
            }
            rowTopPointer++;
        } else if(direction === 1) {
            for(let i = rowTopPointer; i <= rowDownPointer; i++) {
                matrix[i][colRightPointer] = counterToFillMatrix++;
            }
            colRightPointer--;
        } else if(direction === 2) {
            for(let i = colRightPointer; i >= colLeftPointer; i--) {
                matrix[rowDownPointer][i] = counterToFillMatrix++;
            }
            rowDownPointer--;
        } else if(direction === 3) {
            for(let i = rowDownPointer; i >= rowTopPointer; i--) {
                matrix[i][colLeftPointer] = counterToFillMatrix++;
            }
            colLeftPointer++;
        }

        direction = (direction + 1) % 4;
    }
    for(let row of matrix){
        console.log(row.join(' '));
    }
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);