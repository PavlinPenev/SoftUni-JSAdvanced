const cinema = require('./cinema');
const {expect} = require('chai');

describe('Cinema Tests', () => {

    it('includes the movies in the cinema',() => {

        expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        expect(cinema.showMovies(['Paf', 'Viki', 'Rosi'])).to.equal('Paf, Viki, Rosi');

    })

    it('returns no movies to show when the input is an empty array', () => {

        expect(showMovies([])).to.equal('There are currently no movies to show.');

    })

    it('checks if the projection type is in the schedule', () => {

        expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
        expect(() => cinema.ticketPrice('My Projection Type')).to.throw('Invalid projection type.');

    })

    it('returns the price correctly', () => {

        expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
        expect(cinema.ticketPrice("Normal")).to.equal(7.50);
        expect(cinema.ticketPrice("Discount")).to.equal(5.50);

    })

    it('throws error if seats are not ints', () => {

        expect(cinema.swapSeatsInHall('', 3)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall({}, 3)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall([], 3)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(false, 3)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(1.5, 3)).to.equal("Unsuccessful change of seats in the hall.");

        expect(cinema.swapSeatsInHall(3, '')).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(3, {})).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(3, [])).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(3, false)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(3, 1.5)).to.equal("Unsuccessful change of seats in the hall.");

        expect(cinema.swapSeatsInHall("dasfg", 3.6)).to.equal("Unsuccessful change of seats in the hall.");

    })

    it('doesnt swap if number seats are equal', () => {
        
        expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.');

    })

    it('throws error if numbers are greater than the capacity', () => {

        expect(cinema.swapSeatsInHall(3, 21)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(21, 3)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall(35, 20)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(20, 35)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall(54, 21)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(21, 54)).to.equal('Unsuccessful change of seats in the hall.');

    })

    it('throws error when seats are less or equal to 0', () => {

        expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(-10, 20)).to.equal('Unsuccessful change of seats in the hall.');

        expect(cinema.swapSeatsInHall(20, 0)).to.equal('Unsuccessful change of seats in the hall.');
        expect(cinema.swapSeatsInHall(20, -10)).to.equal('Unsuccessful change of seats in the hall.');

    })

    it('swaps seats correctly', () => {

        expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(3, 17)).to.equal("Successful change of seats in the hall.");

    })

})