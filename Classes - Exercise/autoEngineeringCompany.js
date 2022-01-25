function autoEngineeringCompany(cars) {
    
    const carOutputMap = new Map();

    cars.forEach(car => {
        
        const [brand, model, producedCars] = car.split(' | ');

        if (!carOutputMap.has(brand)) {

            carOutputMap.set(brand, {});
        
        }

        if (!carOutputMap.get(brand)[model]) {
            
            carOutputMap.get(brand)[model] = 0;

        }

        carOutputMap.get(brand)[model] += Number(producedCars);

    });

    for (const [key, value] of carOutputMap) {
        
        let lastPrintedBrand = '';

        if (lastPrintedBrand !== key) {
            
            console.log(`${key}`);
            lastPrintedBrand = key;

        }

        for (const key in value) {
            
            console.log(`###${key} -> ${value[key]}`);

        }

    }

}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);