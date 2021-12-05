function buyFruit(fruitType, grams, pricePerKg){
    let fruitKgs = grams / 1000;
    let money = fruitKgs * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${fruitKgs.toFixed(2)} kilograms ${fruitType}.`);
}
buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35);