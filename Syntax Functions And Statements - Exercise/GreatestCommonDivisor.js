function gcd(num1, num2){

    let minNum = Math.min(num1, num2);
    let commonDivisor = 1;
    for(let i = 1; i <= minNum; i++){
        if(num1 % i === 0 && num2 % i === 0){
            commonDivisor = i;
        }
    }
    console.log(commonDivisor);
}
gcd(15, 5);
gcd(2154, 458);