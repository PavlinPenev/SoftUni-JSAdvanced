/**
 * 
 * @param {Array} array 
 * @param {string} criteria 
 */
function sortArray(array, criteria) {

    return criteria === 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);

}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));