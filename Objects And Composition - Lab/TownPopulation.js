function townPopulation(arrayOfTowns = []) {
    const finalArray = [];
    for(let i = 0; i < arrayOfTowns.length; i++) {
        let cmdArgs = arrayOfTowns[i].split(' <-> ');
        let townName = cmdArgs[0];
        let population = Number(cmdArgs[1]);
        if(!finalArray[townName]) {
            finalArray[townName] = 0;
        }
        finalArray[townName] += population;
    }
        for(let town in finalArray) {
            console.log(`${town} : ${finalArray[town]}`);
        }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);