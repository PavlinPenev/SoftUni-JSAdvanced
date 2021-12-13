function carFactory(obj) {
    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };
    const hatchback = { type: 'hatchback', color: null };
    const coupe = { type: 'coupe', color: null };

    let chosenEngine = null;
    let chosenType = null;

    const  wheelzArray = [];
    for(let i = 0; i < 4; i++) {
        if(obj.wheelsize % 2 === 0) {
            obj.wheelsize--;
        }
        wheelzArray.push(obj.wheelsize);
    }
    switch(true) {
        case obj.power <= 90:
            chosenEngine = smallEngine;
            break;
        case obj.power <= 120:
            chosenEngine = normalEngine;
            break;
        case obj.power > 120:
            chosenEngine = monsterEngine;
            break;
    }
    switch(obj.carriage) {
        case 'hatchback':
            chosenType = hatchback;
            break;
        case 'coupe':
            chosenType = coupe;
            break;
    }
    
    let jsonAsString = JSON.stringify(obj);
    jsonAsString = jsonAsString.replace('power', 'engine');
    jsonAsString = jsonAsString.replace('wheelsize', 'wheels');
    obj = JSON.parse(jsonAsString);
    obj.engine = chosenEngine;
    obj.carriage = chosenType;
    obj.carriage.color = obj.color;
    obj.wheels = wheelzArray;
    delete obj.color;

    return obj;
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));