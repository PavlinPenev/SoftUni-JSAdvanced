function addItem() {

    let itemToAddValue = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    liElement.textContent = itemToAddValue;
    
    document.getElementById('items').appendChild(liElement);

}