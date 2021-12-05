function daysInAMonth(month, year){
    return new Date(year, month, 0).getDate();
}
console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));