function sumFirstLast(array) {
    return Number(array[0]) + Number(array[array.length - 1]);
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));