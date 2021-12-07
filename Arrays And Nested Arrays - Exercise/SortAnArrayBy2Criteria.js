function sortBy2Criteria(array = []) {
    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for(let word of array) {
        console.log(word);
    }
}
sortBy2Criteria(['alpha', 
'beta', 
'gamma']);
sortBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);
sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']);