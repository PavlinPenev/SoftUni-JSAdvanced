function cookingByNumbers(numChar, op1, op2, op3, op4, op5){
    let number = Number(numChar);
    let cmdArgs = [op1, op2, op3, op4, op5];
    for(let i = 0; i < cmdArgs.length; i++){
        let command = cmdArgs[i];
        switch(command){
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');