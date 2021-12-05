function sumOfNumbers(num1AsString, num2AsString) {
    let start = Number(num1AsString);
    let end = Number(num2AsString);
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));