function evenPositionElement(array){
    let endArray = '';
    for(let i = 0; i < array.length; i += 2){
        endArray += array[i] + ' ';
    }
    console.log(endArray);
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);