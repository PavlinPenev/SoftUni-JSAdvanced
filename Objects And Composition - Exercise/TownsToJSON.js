function townsToJSON(array) {
    const towns = [];
    for(let j = 1; j < array.length; j++) {
        let arr = array[j].split('|').filter(n => n);

        towns.push({ Town: arr[0].trim(),
                     Latitude: Math.round((Number(arr[1]) + Number.EPSILON) * 100) / 100,
                     Longitude: Math.round((Number(arr[2]) + Number.EPSILON) * 100) / 100 });
    }
    return JSON.stringify(towns);    
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));
console.log('=================================');
console.log('=================================');
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']));