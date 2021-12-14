function storeCatalogue(array) {
    let orderedList = [];
    for(let product of array) {
        let productInfo = product.split(' : ');
        let productName = productInfo[0];
        let productPrice = Number(productInfo[1]);

        orderedList.push({product: productName, price: productPrice});
    } 
    orderedList = orderedList.sort((a, b) => (a.product).localeCompare(b.product));
    let lastUpperCase = null;

    for(let product of orderedList) {
        let upperCase = product.product[0];
        if(lastUpperCase !== upperCase) {
            lastUpperCase = upperCase;
            console.log(upperCase);
        }
        console.log(` ${product.product}: ${product.price}`);
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);