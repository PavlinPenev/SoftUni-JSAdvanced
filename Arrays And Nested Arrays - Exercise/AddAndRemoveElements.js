function addRemoveElements(array = []) {
    let initialValue = 1;
    let arrayToPrint = [];
    for(let command of array) {
        switch(command) {
            case 'add':
                arrayToPrint.push(initialValue);
                break;
            case 'remove':
                arrayToPrint.pop();
                break;
        }
        initialValue++;
    }
    if(arrayToPrint.length === 0) {
        console.log('Empty');
        return;
    }
    for(let element of arrayToPrint) {
        console.log(element);
    }
}
addRemoveElements(['add', 
'add', 
'add', 
'add']);
addRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']);
addRemoveElements(['remove', 
'remove', 
'remove']);