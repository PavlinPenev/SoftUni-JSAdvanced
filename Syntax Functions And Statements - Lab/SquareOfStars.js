function squareOfStars(sizeOfSquare){
    if(sizeOfSquare === undefined){
        sizeOfSquare = 5;
    }
    let line = "";

    for(let i = 0; i < sizeOfSquare; i++){
        for(let j = 0; j < sizeOfSquare; j++){
            line += '* ';
        }
        console.log(line);
        line = "";
    }
}
squareOfStars(1);
console.log();
squareOfStars(2);
console.log();
squareOfStars(5);
console.log();
squareOfStars();