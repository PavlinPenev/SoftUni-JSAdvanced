function juiceFlavors(juiceConsistencyArray) {
    
    const originalMap = new Map();
    const output = new Map();

    juiceConsistencyArray.forEach(juice => {

        const [fruit, quantity] = juice.split(' => ');

        if (!originalMap.has(fruit)) {
            
            originalMap.set(fruit, 0);

        }

        originalMap.set(fruit, originalMap.get(fruit) + Number(quantity));

        while (originalMap.get(fruit) >= 1000) {
            
            originalMap.set(fruit, originalMap.get(fruit) - 1000);
            output.set(fruit, (output.get(fruit) || 0) + 1);

        }

    });

    for (const [key, value] of output) {
        
        console.log(`${key} => ${value}`);

    }

}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
console.log('========================');
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);