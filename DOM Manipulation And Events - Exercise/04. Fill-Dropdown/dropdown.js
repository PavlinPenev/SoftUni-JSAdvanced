function addItem() {
    
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const text = itemText.value;
    const value = itemValue.value;

    const optionElement = document.createElement('option');
    optionElement.textContent = text;
    optionElement.value = value;

    document.getElementById('menu').appendChild(optionElement);

    itemText.value = '';
    itemValue.value = '';

}