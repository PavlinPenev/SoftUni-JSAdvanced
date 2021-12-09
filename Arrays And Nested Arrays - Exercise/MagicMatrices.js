function magicMatrices(array = []) {
    let isMagical = true;
    let columnSumCheckArray = [];
    let currentSumOfRow = 0;
    let targetSum = 0;
    for(let i = 0; i < array[0].length; i++){ //sum of first row. Need that as a pivot point for the rest sums
        targetSum += array[0][i];
    }
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++) {
            currentSumOfRow += array[i][j];
            columnSumCheckArray[j] = (columnSumCheckArray[j] || 0) + array[i][j]; // first array columnSumCheckArray is empty so for the first iteration
        }                                                                         // I have to include || 0 so it takes zero instead of the value of the array
                                                                                  // so that I have a proper calculation. The rest is easy to grasp.
        if(currentSumOfRow !== targetSum){
            isMagical = false;
            return isMagical;
        }
        currentSumOfRow = 0;
    }
    if(columnSumCheckArray.some(e => e !== targetSum)){
        isMagical = false;
        return isMagical;
    }
    return isMagical;
}
console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]));