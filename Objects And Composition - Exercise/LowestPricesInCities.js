function lowestPricesInCities(array) {
    const productArray = [];
    for(let product of array) {
        let [town, productName, price] = product.split(' | ');
        let objProduct = {
            product: productName,
            price: Number(price),
            town
        };

        if(!productArray.some(p => p.product === productName)) {
            productArray.push(objProduct);
        }
        const objToCompare = productArray.find(p => p.product === productName);
            if(price < objToCompare.price) {
                objToCompare.price = price;
                objToCompare.town = town;
            }
    }
    for(let product of productArray) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000', 
'Sofia City | BMW | 100000', 
'Sofia City | Mitsubishi | 10000', 
'Sofia City | Mercedes | 10000', 
'Sofia City | NoOffenseToCarLovers | 0', 
'Mexico City | Audi | 1000', 
'Mexico City | BMW | 99999', 
'Mexico City | Mitsubishi | 10000',
 'New York City | Mitsubishi | 1000', 
 'Washington City | Mercedes | 1000']);