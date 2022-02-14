window.addEventListener('load', solve);

function solve() {

    //input fields
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');

    //furniture list table
    const furnitureTableBody = document.getElementById('furniture-list');

    //total price field
    const totalPriceField = document.querySelector('.total-price');

    //add button
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', addRow);

    function addRow(ev) {

        ev.preventDefault();

        const modelFieldValue = document.getElementById('model').value;
        const yearFieldValue = document.getElementById('year').value;
        const descriptionFieldValue = document.getElementById('description').value;
        const priceFieldValue = document.getElementById('price').value;

        if (modelFieldValue.trim()
            && Number(yearFieldValue) > 0
            && descriptionFieldValue.trim()
            && Number(priceFieldValue) > 0) {

            const trInfoElement = document.createElement('tr');
            trInfoElement.classList.add('info');

            const tdModelElement = document.createElement('td');
            tdModelElement.textContent = modelFieldValue;
            trInfoElement.appendChild(tdModelElement);

            const tdPriceElement = document.createElement('td');
            tdPriceElement.textContent = Number(priceFieldValue).toFixed(2);
            trInfoElement.appendChild(tdPriceElement);

            const tdButtonsElement = document.createElement('td');
            trInfoElement.appendChild(tdButtonsElement);

            const moreInfoBtnElement = document.createElement('button');
            moreInfoBtnElement.classList.add('moreBtn');
            moreInfoBtnElement.textContent = 'More Info';
            moreInfoBtnElement.addEventListener('click', moreInfoCollapse);
            tdButtonsElement.appendChild(moreInfoBtnElement);

            const buyBtnElement = document.createElement('button');
            buyBtnElement.classList.add('buyBtn');
            buyBtnElement.textContent = 'Buy it';
            buyBtnElement.addEventListener('click', buyFurniture);
            tdButtonsElement.appendChild(buyBtnElement);

            furnitureTableBody.appendChild(trInfoElement);

            const trHiddenElement = document.createElement('tr');
            trHiddenElement.classList.add('hide');

            const tdYearElement = document.createElement('td');
            tdYearElement.textContent = `Year: ${yearFieldValue}`;
            trHiddenElement.appendChild(tdYearElement);

            const tdDescriptionElement = document.createElement('td');
            tdDescriptionElement.textContent = `Description: ${descriptionFieldValue}`;
            tdDescriptionElement.colSpan = 3;
            trHiddenElement.appendChild(tdDescriptionElement);

            furnitureTableBody.appendChild(trHiddenElement);

            function moreInfoCollapse(ev) {

                const nextRow = ev.target.parentNode.parentNode.nextSibling;

                ev.target.textContent = ev.target.textContent === 'More Info'
                    ? 'Less Info' : 'More Info';
                nextRow.style.display = nextRow.style.display === 'none' || nextRow.style.display === '' ? 'contents' : 'none';

            }

            function buyFurniture(ev) {

                const price = Number(ev.target.parentNode.previousSibling.textContent);

                totalPriceField.textContent = (Number(totalPriceField.textContent) + price).toFixed(2);

                ev.target.parentNode.parentNode.nextSibling.remove();
                ev.target.parentNode.parentNode.remove();

            }
        }

        modelField.value = '';
        yearField.value = '';
        descriptionField.value = '';
        priceField.value = '';

    }
}
