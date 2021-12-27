function generateReport() {
    
    let headerArray = Array.from(document.getElementsByTagName('input'));
    const objArray = [];
    let bodyArray = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];
 
    for (let i = 0; i < bodyArray.length; i++) {

        const currentRow = bodyArray[i];
        const obj = {};
 
        for (let j = 0; j < currentRow.children.length; j++) {

            const element = currentRow.children[j];

            if (i == 0) {

                if (element.children[0].checked) {

                    checkedCols.push(j);
                    
                }

                continue;

            }
 
            if (checkedCols.includes(j)) {

                let propertyName = headerArray[j].name;
                obj[propertyName] = element.textContent;

            }

        }

        if (i !== 0) {

            objArray.push(obj);

        }
    }
    
    document.getElementById('output').value = JSON.stringify(objArray);
}
