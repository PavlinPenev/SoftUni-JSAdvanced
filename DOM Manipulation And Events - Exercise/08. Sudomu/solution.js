function solve() {

    //add event listeners to quick check and clear buttons
    document.getElementsByTagName('button')[0].addEventListener('click', checkMatrix);
    document.getElementsByTagName('button')[1].addEventListener('click', clearFields);

    function clearFields() {

        //clear the fields and table styles
        Array.from(document.getElementsByTagName('input')).forEach(x => x.value = '');
        document.getElementsByTagName('table')[0].style.border = 'none';
        document.querySelector('#check p').textContent = '';
        document.querySelector('#check p').style.color = '';
    }

    function checkMatrix() {

        //define the matrix
        const sudokuMatrix = [];

        //read input from all the rows
        const firstRow = Array.from(document.getElementsByTagName('tr')[2].children).map(x => x = Number(x.children[0].value));
        const secondRow = Array.from(document.getElementsByTagName('tr')[3].children).map(x => x = Number(x.children[0].value));
        const thirdRow = Array.from(document.getElementsByTagName('tr')[4].children).map(x => x = Number(x.children[0].value));

        //insert the arrays into the matrix
        sudokuMatrix[0] = firstRow;
        sudokuMatrix[1] = secondRow;
        sudokuMatrix[2] = thirdRow;

        //invoke methods
        let rowsValid = checkRows(sudokuMatrix);
        let colsValid = checkCols(sudokuMatrix);

        /*if true border is 2px solid green and green text
        else border is 2px solid red and red text*/
        if (rowsValid && colsValid) {

            document.getElementsByTagName('table')[0].style.border = '2px solid green';
            document.querySelector('#check p').textContent = 'You solve it! Congratulations!';
            document.querySelector('#check p').style.color = 'green';

        } else {

            document.getElementsByTagName('table')[0].style.border = '2px solid red';
            document.querySelector('#check p').textContent = 'NOP! You are not done yet...';
            document.querySelector('#check p').style.color = 'red';

        }

        //validation methods
        function checkRows(matrix) {

            let isValid = false;
            for (const row of matrix) {

                if (row.some(x => x === 1) && row.some(x => x === 2) && row.some(x => x === 3)) {

                    isValid = true;

                } else {

                    isValid = false;
                    return isValid;

                }

            }
            return isValid;
        }

        function checkCols(matrix) {

            let isValid = false;
            if ((matrix[0][0] === 1 || matrix[1][0] === 1 || matrix[2][0] === 1)
                && (matrix[0][0] === 2 || matrix[1][0] === 2 || matrix[2][0] === 2)
                && (matrix[0][0] === 3 || matrix[1][0] === 3 || matrix[2][0] === 3)) {

                isValid = true;

            }

            if ((matrix[0][1] === 1 || matrix[1][1] === 1 || matrix[2][1] === 1)
                && (matrix[0][1] === 2 || matrix[1][1] === 2 || matrix[2][1] === 2)
                && (matrix[0][1] === 3 || matrix[1][1] === 3 || matrix[2][1] === 3)
                && isValid) {

                isValid = true;

            } else {

                isValid = false;

            }

            if ((matrix[0][2] === 1 || matrix[1][2] === 1 || matrix[2][2] === 1)
                && (matrix[0][2] === 2 || matrix[1][2] === 2 || matrix[2][2] === 2)
                && (matrix[0][2] === 3 || matrix[1][2] === 3 || matrix[2][2] === 3)
                && isValid) {

                isValid = true;

            } else {

                isValid = false;
                
            }

            return isValid;
        }

    }
}