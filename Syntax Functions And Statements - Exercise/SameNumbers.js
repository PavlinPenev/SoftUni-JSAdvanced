function sameNumbers(number){
    let sumOfNumbers = number.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    let areSame = false;
    let firstDigit = Number(number.toString()[0]);
    for(let i = 0; i < number.toString().length; i++){
        if(number % 10 === firstDigit){
            areSame = true;
        } else {
            areSame = false
            break;
        }
    }
    console.log(areSame);
    console.log(sumOfNumbers);
}
sameNumbers(2222222);
sameNumbers(1234);