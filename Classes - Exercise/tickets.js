function manageTicketsDb(ticketsArray, sortCriteria) {
    
    class Ticket {

        constructor(destination, price, status) {

            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }

    }

    const sortedArray = [];

    ticketsArray.forEach(ticket => {
        
        const [destination, price, status] = ticket.split('|');
        const currentTicket = new Ticket(destination, price, status);
        sortedArray.push(currentTicket);

    });

    return sortCriteria === 'price' ?sortedArray.sort((a, b) => a[sortCriteria] - b[sortCriteria]) : sortedArray.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
}

console.log(manageTicketsDb(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));