function jansNotation(operationsArray = []) {
    const numberArray = [];

    for(let i = 0; i < operationsArray.length; i++) {

        if(Number.isInteger(operationsArray[i])){

            numberArray.push(operationsArray[i]);

        } else {

            let currentResult = null;

            switch(operationsArray[i]) {
                case '+':
                    currentResult = numberArray[numberArray.length - 2] + numberArray[numberArray.length - 1];
                    break;
                case '-':
                    currentResult = numberArray[numberArray.length - 2] - numberArray[numberArray.length - 1];
                    break;
                case '*':
                    currentResult = numberArray[numberArray.length - 2] * numberArray[numberArray.length - 1];
                    break;
                case '/':
                    currentResult = numberArray[numberArray.length - 2] / numberArray[numberArray.length - 1];
                    break;
            }
            delete operationsArray[i];
            numberArray.pop();
            numberArray.pop();
            numberArray.push(currentResult);
        }
    }

    operationsArray = operationsArray.filter(x => x != undefined);

    if(numberArray.length === 1 && !Number.isNaN(numberArray[0])) {

        console.log(numberArray[0]);
        return;

    }
    if(numberArray.length > 1) {

        console.log('Error: too many operands!');
        return;
        
    } else if(operationsArray.filter(x => !Number.isInteger(x))) {

        console.log(`Error: not enough operands!`);
        return;
    }    
}
jansNotation([3,
    4,
    '+']);
jansNotation([5,
    3,
    4,
    '*',
    '-']);
jansNotation([7,
    33,
    8,
    '-']);
jansNotation([15,
    '/']);