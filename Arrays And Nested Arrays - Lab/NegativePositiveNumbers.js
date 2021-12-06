function negativePositiveNumbers(array) {
    const rearrangedArray = [];
    for(let num of array) {
        if(num < 0) {
            rearrangedArray.unshift(num);
        } else {
            rearrangedArray.push(num);
        }
    }
    for(let num of rearrangedArray) {
        console.log(num);
    }
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);