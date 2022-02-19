const {expect} = require('chai');
const flowerShop = require('./flowerShop');

describe('Flower Shop Tests', () => {

    it('it calculates properly the price and quantity', () => {

        expect(flowerShop.calcPriceOfFlowers('flower', 4, 1)).to.equal(`You need $4.00 to buy flower!`);
        expect(flowerShop.calcPriceOfFlowers('flower', 13, 3)).to.equal(`You need $39.00 to buy flower!`);

    })

    it('throws invalid input error when invalid parameters given', () => {

        expect(() => flowerShop.calcPriceOfFlowers(3, 3, 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers({}, 3, 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers([], 3, 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers(false, 3, 1)).to.throw('Invalid input!');

        expect(() => flowerShop.calcPriceOfFlowers('magnolia', 'asd', 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', {}, 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', [], 1)).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', false, 1)).to.throw('Invalid input!');

        expect(() => flowerShop.calcPriceOfFlowers('magnolia', 3, 'asd')).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', 3, {})).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', 3, [])).to.throw('Invalid input!');
        expect(() => flowerShop.calcPriceOfFlowers('magnolia', 3, false)).to.throw('Invalid input!');

    })

    it('checks if the flower is in the array', () => {

        expect(flowerShop.checkFlowersAvailable('magnolia', ['magnolia', 'rose', 'daffodil'])).to.equal('The magnolia are available!');
        expect(flowerShop.checkFlowersAvailable('rose', ['magnolia', 'rose', 'daffodil'])).to.equal('The rose are available!');
        expect(flowerShop.checkFlowersAvailable('daffodil', ['magnolia', 'rose', 'daffodil'])).to.equal('The daffodil are available!');

    })

    it('returns not found message when flower is not in the array', () => {

        expect(flowerShop.checkFlowersAvailable('magnolia', ['rose', 'orchid', 'daffodil'])).to.equal('The magnolia are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('lilly', ['rose', 'orchid', 'daffodil'])).to.equal('The lilly are sold! You need to purchase more!');
        expect(flowerShop.checkFlowersAvailable('tulip', ['rose', 'orchid', 'daffodil'])).to.equal('The tulip are sold! You need to purchase more!');

    })

    it('removes an element from the array at the given space', () => {

        expect(flowerShop.sellFlowers(['rose', 'magnolia', 'daffodil'], 1)).to.equal('rose / daffodil');
        expect(flowerShop.sellFlowers(['rose', 'magnolia', 'daffodil'], 2)).to.equal('rose / magnolia');
        expect(flowerShop.sellFlowers(['rose', 'magnolia', 'daffodil'], 0)).to.equal('magnolia / daffodil');
        expect(flowerShop.sellFlowers(['rose', 'magnolia', 'daffodil', 'tulip'], 3)).to.equal('rose / magnolia / daffodil');

    })

    it('throws errors if invalid input', () => {

        expect(() => flowerShop.sellFlowers('magnolia',3)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers({},3)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(3 ,3)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(false,3)).to.throw('Invalid input!');

        expect(() => flowerShop.sellFlowers(['magnolia'], 'asd')).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(['magnolia'], {})).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(['magnolia'], [])).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(['magnolia'], false)).to.throw('Invalid input!');

        expect(() => flowerShop.sellFlowers(['magnolia'], -1)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(['magnolia'], 1)).to.throw('Invalid input!');
        expect(() => flowerShop.sellFlowers(['magnolia', 'rose'], 13)).to.throw('Invalid input!');

    })
})