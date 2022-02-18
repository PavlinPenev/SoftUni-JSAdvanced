class Restaurant {

    constructor(budgetMoney) {

        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {

        products.forEach(product => {

            const [productName, productQuantity, productTotalPrice] = product.split(' ');            
            
            if (this.budgetMoney >= productTotalPrice) {
                
                this.budgetMoney -= Number(productTotalPrice);

                if (!(productName in this.stockProducts)) {
                    
                    this.stockProducts[productName] = 0;
    
                }
                
                this.stockProducts[productName] += Number(productQuantity);
                
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {

                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);

            }
            
        })

        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {

        if (!(meal in this.menu)) {
            
            this.menu[meal] = { products: neededProducts, price: Number(price) };

        } else {

            return `The ${meal} is already in the our menu, try something different.`

        }

        const mealsCount = Object.keys(this.menu).length;

        switch (mealsCount) {
            case 1:
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            default:
                return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {

        return Object.entries(this.menu).length === 0 
                              ? `Our menu is not ready yet, please come later...`
                              : Object.entries(this.menu).map(([key, value]) => {

                                return `${key} - $ ${value.price}`;
                    
                              }).join('\n');

    }

    makeTheOrder(meal) {

        if (!(meal in this.menu)) {
            
            return `There is not ${meal} yet in our menu, do you want to order something else?`;

        }

        let canCook = true;

        const neededProducts = this.menu[meal].products;

        for (const product of neededProducts) {

            const [productName, productQuantity] = product.split(' ');

            if (!(productName in this.stockProducts)) {
                
                canCook = false;
                break;

            }

            if (this.stockProducts[productName] < Number(productQuantity)) {
                
                canCook = false;
                break;

            }

        }

        if (canCook) {
            
            for (const product of neededProducts) {
            
                const [productName, productQuantity] = product.split(' ');
    
                this.stockProducts[productName] -= Number(productQuantity);
    
            }

            this.budgetMoney += Number(this.menu[meal].price);

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

        } else {

            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;

        }
    }
}