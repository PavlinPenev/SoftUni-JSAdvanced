function diagonalAttack(array = []) {
    let matrix = [];
    for(let i = 0; i < array.length; i++){
        let splitStringArray = array[i].split(' ');
        matrix[i] = [];
        for(let j = 0; j < splitStringArray.length; j++){
            matrix[i][j] = Number(splitStringArray[j]);
        }
    }
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(i === j){
                leftDiagonalSum += matrix[i][j];
            }
            if((i+j) === matrix.length - 1){
                rightDiagonalSum += matrix[i][j];
            }
        }
    }
    if(leftDiagonalSum === rightDiagonalSum){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if((i === j) || (i+j) === matrix.length - 1){
                    continue;
                }
                matrix[i][j] = leftDiagonalSum;
            }
        }
    }
    for(let row of matrix){
        console.log(row.join(' '));
    }
}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);