function deckOfCards(arrayOfCards) {
    
    let resultArray = [];
    try {
        
        arrayOfCards.forEach(card => {

            const face = card.slice(0, card.length - 1);
            const suit = card.slice(card.length - 1);
            resultArray.push(cardFactory(face, suit).toString());

        })

        console.log(resultArray.join(' '));

    } catch (error) {
        
        console.log(error.message);

    }

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
            
            throw new Error(`Invalid card: ${face}${suit}`);
    
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
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);