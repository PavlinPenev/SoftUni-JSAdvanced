function deleteByEmail() {

    let emailDeleteCriteria = document.getElementsByTagName('input')[0].value;

    let rowsOfTable = document.getElementsByTagName('tr');
    const result = document.getElementById('result');

    for(let i = 1; i < rowsOfTable.length; i++) {

        if(rowsOfTable[i].children[1].textContent.includes(emailDeleteCriteria)) {

            result.textContent = 'Deleted.';
            rowsOfTable[i].remove();        

        }

        result.textContent = 'Not found.';

    }
}