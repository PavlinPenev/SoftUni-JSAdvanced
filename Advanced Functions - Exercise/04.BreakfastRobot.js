function solution() {

    const recipes = {

        "apple":  new Map(),
        "lemonade": new Map(),
        "burger": new Map(),
        "eggs": new Map(),
        "turkey": new Map()
        
    };

    recipes.apple.set("carbohydrate", 1);
    recipes.apple.set("flavour", 2);
    recipes.lemonade.set("carbohydrate", 10);
    recipes.lemonade.set("flavour", 20);
    recipes.burger.set("carbohydrate", 5);
    recipes.burger.set("fat", 7);
    recipes.burger.set("flavour", 3);
    recipes.eggs.set("protein", 5);
    recipes.eggs.set("fat", 1);
    recipes.eggs.set("flavour", 1);
    recipes.turkey.set("protein", 10);
    recipes.turkey.set("carbohydrate", 10);
    recipes.turkey.set("fat", 10);
    recipes.turkey.set("flavour", 10);

    const ingredients = {

        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0

    };

    function manageOrders(order) {

        const orderInfo = order.split(' ');
        const orderType = orderInfo[0];
        const productType = orderInfo[1];
        const quantity = Number(orderInfo[2]);

        switch(orderType) {
            
            case 'restock':
                return restock(productType, quantity);
            case 'prepare':
                return prepare(productType, quantity);
            case 'report':
                return report();

        }

    }   

    function restock(ingredient, quantity) {

        ingredients[ingredient] += quantity;
        return 'Success';

    }

    function prepare(recipe, quantity) {

        for (let [key, value] of recipes[recipe]) {

            if (ingredients[key] < value * quantity) {

                return `Error: not enough ${key} in stock`;

            }

        }

        for (let [key, value] of recipes[recipe]) {

            ingredients[key] -= value * quantity;

        }

        return 'Success'
        

    }

    function report() {

        let result = '';
        Object.entries(ingredients).forEach(ingr => {

            result += `${ingr[0]}=${ingr[1]} `;

        })
        return result.trimEnd();

    }

    return manageOrders;

}

let manager = solution ();
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));