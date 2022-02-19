function solve() {
    //input fields
    const firstNameField = document.getElementById('fname');
    const lastNameField = document.getElementById('lname');
    const emailField = document.getElementById('email');
    const birthField = document.getElementById('birth');
    const positionField = document.getElementById('position');
    const salaryField = document.getElementById('salary');

    //table body
    const tableContent = document.getElementById('tbody');

    //sum field
    const sumField = document.getElementById('sum');

    //hire worker button
    const hireWorkerBtn = document.getElementById('add-worker');
    hireWorkerBtn.addEventListener('click', hireWorker);

    function hireWorker(ev) {
        
        ev.preventDefault();

        if (firstNameField.value
            && lastNameField.value
            && emailField.value
            && birthField.value
            && positionField.value
            && salaryField.value) {
            
            const trElement = document.createElement('tr');
            tableContent.appendChild(trElement);

            const firstNameTdElement = document.createElement('td');
            firstNameTdElement.textContent = firstNameField.value;
            trElement.appendChild(firstNameTdElement);

            const lastNameTdElement = document.createElement('td');
            lastNameTdElement.textContent = lastNameField.value;
            trElement.appendChild(lastNameTdElement);

            const emailTdElement = document.createElement('td');
            emailTdElement.textContent = emailField.value;
            trElement.appendChild(emailTdElement);

            const birthTdElement = document.createElement('td');
            birthTdElement.textContent = birthField.value;
            trElement.appendChild(birthTdElement);

            const positionTdElement = document.createElement('td');
            positionTdElement.textContent = positionField.value;
            trElement.appendChild(positionTdElement);

            const salaryTdElement = document.createElement('td');
            salaryTdElement.textContent = salaryField.value;
            trElement.appendChild(salaryTdElement);

            const buttonsTdElement = document.createElement('td');
            trElement.appendChild(buttonsTdElement);

            const firedBtnElement = document.createElement('button');
            firedBtnElement.textContent = 'Fired';
            firedBtnElement.classList.add('fired');
            firedBtnElement.addEventListener('click', fireWorker);
            buttonsTdElement.appendChild(firedBtnElement);

            const editBtnElement = document.createElement('button');
            editBtnElement.textContent = 'Edit';
            editBtnElement.classList.add('edit');
            editBtnElement.addEventListener('click', editWorker);
            buttonsTdElement.appendChild(editBtnElement);

            sumField.textContent = (Number(sumField.textContent) + Number(salaryTdElement.textContent)).toFixed(2);

        }

        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        birthField.value = '';
        positionField.value = '';
        salaryField.value = ''; 

        function fireWorker(ev) {
            
            const workerRow = ev.target.parentNode.parentNode;

            sumField.textContent = (Number(sumField.textContent) - Number(workerRow.children[5].textContent)).toFixed(2);

            workerRow.remove();

        }

        function editWorker(ev) {
            
            const workerRow = ev.target.parentNode.parentNode;

            sumField.textContent = (Number(sumField.textContent) - Number(workerRow.children[5].textContent)).toFixed(2);

            firstNameField.value = workerRow.children[0].textContent;
            lastNameField.value = workerRow.children[1].textContent;
            emailField.value = workerRow.children[2].textContent;
            birthField.value = workerRow.children[3].textContent;
            positionField.value = workerRow.children[4].textContent;
            salaryField.value = workerRow.children[5].textContent;

            workerRow.remove();
        }
    }

}
solve()