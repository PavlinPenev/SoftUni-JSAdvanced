function processOddPositions(array) {
    let finalArray = [];
    for(let i = 1; i < array.length; i+=2) {
        finalArray.push(array[i] * 2);
    }
    finalArray.reverse();
    return finalArray.join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));