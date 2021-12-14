function heroicInventory(heroesArray) {
    let heroes = [];

    for(let hero of heroesArray) {
        let [name, level, items] = hero.split(' / ');
        const newHero = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        }
        heroes.push(newHero);
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
console.log('====================================');
console.log('====================================');
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);