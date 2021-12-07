function extractSubset(array = []) {
    let finalArray = [array[0]];

    array.reduce((a, b) => {
        if(b >= finalArray[finalArray.length - 1]) {
            finalArray.push(b);
        }
    });

    return finalArray;
}
console.log(extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));
console.log(extractSubset([1, 
    2, 
    3,
    4]));
console.log(extractSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]));