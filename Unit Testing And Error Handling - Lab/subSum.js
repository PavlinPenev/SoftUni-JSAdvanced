function subSum(array, startIdx, endIdx) {
    
    if (!Array.isArray(array)) {
        
        return NaN;

    }

    if (startIdx < 0) {
        
        startIdx = 0;

    }

    if (endIdx > array.length - 1) {
        
        endIdx = array.length - 1;

    }

    return array.slice(startIdx, endIdx + 1).map(Number).reduce((a, b) => a + b, 0);

}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));