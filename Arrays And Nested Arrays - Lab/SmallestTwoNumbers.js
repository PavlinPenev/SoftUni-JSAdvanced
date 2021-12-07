function smallestTwoNumbers(array) {
    let sortedArray = [];
    sortedArray = array.sort((a, b) => a - b);
    sortedArray = sortedArray.slice(0, 2);
    console.log(sortedArray.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);