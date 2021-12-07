function sortingNumbers(array = []) {
    array.sort((a, b) => a - b);
    let finalArray = [];

    while (array.length > 0) {
        finalArray.push(array.shift());
        
        if (array.length > 0) {
            finalArray.push(array.pop());
        }
    }
    return finalArray;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));