function stringLength(firstWord, secondWord, thirdWord){
    let stringLength;
    let averageStrLength;

    stringLength = firstWord.length + secondWord.length + thirdWord.length;
    averageStrLength = Math.floor(stringLength/3);
    console.log(stringLength);
    console.log(averageStrLength);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
