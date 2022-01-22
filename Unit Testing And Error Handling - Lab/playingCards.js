function cardFactory(face, suit) {

    const validInput = 
                ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validInput.includes(face) || !Object.keys(suits).includes(suit)) {
        
        throw new Error;

    }

    let card = {
        face,
        suit: suits[suit],
        toString: function() {

            return `${this.face}${this.suit}`;

        }
    };
    

    return card;
}

console.log(cardFactory('A', 'S'));
console.log(cardFactory('10', 'H'));
console.log(cardFactory('1', 'C'));