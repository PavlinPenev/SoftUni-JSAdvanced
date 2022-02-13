class SummerCamp {

    constructor(organizer, location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {

            child: 150,
            student: 300,
            collegian: 500

        }
        this.listOfParticipants = [];

    }

    registerParticipant(name, condition, money) {

        if (!(condition in this.priceForTheCamp)) {
            
            throw new Error('Unsuccessful registration at the camp.');

        }

        if (this.listOfParticipants.some(obj => obj.name === name)) {
            
            return `The ${name} is already registered at the camp.`;

        }

        const moneyNeeded = this.priceForTheCamp[condition];
        
        if (Number(money) < moneyNeeded) {
            
            return `The money is not enough to pay the stay at the camp.`;

        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});

        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {

        if (!(this.listOfParticipants.some(obj => obj.name === name))) {
            
            throw new Error(`The ${name} is not registered in the camp.`);

        }

        this.listOfParticipants = this.listOfParticipants.filter(participant => participant.name !== name);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, ...participants) {

        participants.forEach(p => {

            if (!(this.listOfParticipants.some(part => part.name === p))) {
                
                throw new Error(`Invalid entered name/s.`);

            }

        })

        const player1 = this.listOfParticipants.find(participant => participant.name === participants[0]);
        const player2 = this.listOfParticipants.find(participant => participant.name === participants[1]);

        switch (typeOfGame) {
            case 'Battleship':
                player1.power += 20;
                return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
            case 'WaterBalloonFights':

                if (player1.condition !== player2.condition) {
            
                    throw new Error('Choose players with equal condition.');
        
                }

                if (player1.power === player2.power) {
                    
                    return 'There is no winner.';

                } else {

                    const winnersPower = Math.max(player1.power, player2.power);
                    
                    const winner = player1.power === winnersPower ? player1 : player2;
                    winner.wins++;

                    return `The ${winner.name} is winner in the game ${typeOfGame}.`;

                }

        }
        
    }

    toString() {

        this.listOfParticipants.sort((p1, p2) => p2.wins - p1.wins);
        const stringWithoutParticipants = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        const stringWithParticipants = this.listOfParticipants
        .map(participant => `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        .join('\n');

        return this.listOfParticipants.length > 0 
                ? stringWithoutParticipants + `\n${stringWithParticipants}`
                : stringWithoutParticipants + '\n';

    }

}