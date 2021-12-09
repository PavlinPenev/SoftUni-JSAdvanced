function ticTacToe(moves = []){
    let fieldMatrix = [[false, false, false],
                       [false, false, false],
                       [false, false, false]];
    let playerOnMove = 'X';
    let isVictory = false;

    for(let move of moves){
        if(fieldMatrix.some(x => x.some(a => a === false))){
            if(isVictory){
                break;
            }
            move = move.split(' ');
            let rowIdx = move[0];
            let colIdx = move[1];
            if(!validateIndexes(rowIdx, colIdx)){
                continue;
            }
            if(fieldMatrix[rowIdx][colIdx] !== false){
                console.log('This place is already taken. Please choose another!');
                continue;
            }
            fieldMatrix[rowIdx][colIdx] = playerOnMove;
            for(let i = 0; i < 3; i++){
                if(checkColumn(i, fieldMatrix) || checkRow(i, fieldMatrix) ){
                    isVictory = true;
                }
            }
            if(checkLeftDiagonal(fieldMatrix) || checkRightDiagonal(fieldMatrix)){
                isVictory = true;
            }
            playerOnMove = switchPlayer(playerOnMove);
        }
    }
    if(!isVictory){
        console.log('The game ended! Nobody wins :(');
    } else {
        playerOnMove = switchPlayer(playerOnMove);
        console.log(`Player ${playerOnMove} wins!`);
    }
    console.log(`${fieldMatrix[0][0]}\t${fieldMatrix[0][1]}\t${fieldMatrix[0][2]}`);
    console.log(`${fieldMatrix[1][0]}\t${fieldMatrix[1][1]}\t${fieldMatrix[1][2]}`);
    console.log(`${fieldMatrix[2][0]}\t${fieldMatrix[2][1]}\t${fieldMatrix[2][2]}`);

    function validateIndexes(row, col){
        if(row >= 0 && row < 3 && col >= 0 && col < 3){
            return true;
        }
        return false;
    }

    function checkColumn(colIndex, array = []){
        if(array[0][colIndex] === 'X' && array[1][colIndex] === 'X' && array[2][colIndex] === 'X') {
            return true;
        }
        if(array[0][colIndex] === 'O' && array[1][colIndex] === 'O' && array[2][colIndex] === 'O') {
            return true;
        }
        return false;
    }

    function checkRow(rowIndex, array = []){
        if(array[rowIndex][0] === 'X' && array[rowIndex][1] === 'X' && array[rowIndex][2] === 'X'){
            return true;
        }
        if(array[rowIndex][0] === 'O' && array[rowIndex][1] === 'O' && array[rowIndex][2] === 'O'){
            return true;
        }
        return false;
    }

    function checkLeftDiagonal(array = []){
        if(array[0][0] === 'X' && array[1][1] === 'X' && array[2][2] === 'X'){
            return true;
        }
        if(array[0][0] === 'O' && array[1][1] === 'O' && array[2][2] === 'O'){
            return true;
        }
        return false;
    }

    function checkRightDiagonal(array = []){
        if(array[0][2] === 'X' && array[1][1] === 'X' && array[2][0] === 'X'){
            return true;
        }
        if(array[0][2] === 'O' && array[1][1] === 'O' && array[2][0] === 'O'){
            return true;
        }
        return false;
    }

    function switchPlayer(player){
        return player === 'X' ? 'O' : 'X';
    }
}


ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);
ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]);
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);