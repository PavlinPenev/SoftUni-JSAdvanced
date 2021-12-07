function listOfNames(array = []) {
    array.sort();
    for(let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);