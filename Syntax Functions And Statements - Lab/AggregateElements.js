function aggregate(array = []){
    let sum = 0;
    let sumInverse = 0;
    let concat = "";

    for(let i = 0; i < array.length; i++){
        sum += array[i];
        sumInverse += 1/array[i];
        concat += String(array[i]);
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}
aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);
