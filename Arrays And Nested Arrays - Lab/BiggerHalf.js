function biggerHalf(array = []) {
    let biggerHalf = array.sort((a, b) => a - b);
    let divider = Math.ceil(biggerHalf.length / 2);
    biggerHalf = biggerHalf.splice(-divider);
    return biggerHalf;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));