window.addEventListener('load', solution);

function solution() {
  //input fields
  const fullNameField = document.getElementById('fname');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const addressField = document.getElementById('address');
  const postalCodeField = document.getElementById('code');

  //div block
  const divBlock = document.getElementById('block');

  //preview section
  const previewSection = document.getElementById('infoPreview');

  //submit button
  const submitBtnElement = document.getElementById('submitBTN');
  submitBtnElement.addEventListener('click', submitForm);

  //edit button
  const editBtnElement = document.getElementById('editBTN');
  editBtnElement.addEventListener('click', editInfo);

  //continue button
  const continueBtnElement = document.getElementById('continueBTN');
  continueBtnElement.addEventListener('click', continueFunc);

  function submitForm(ev) {

    ev.preventDefault();

    if (fullNameField.value && emailField.value) {

      const fullNameLiElement = document.createElement('li');
      fullNameLiElement.textContent = `Full Name: ${fullNameField.value}`;
      previewSection.appendChild(fullNameLiElement);

      const emailLiElement = document.createElement('li');
      emailLiElement.textContent = `Email: ${emailField.value}`;
      previewSection.appendChild(emailLiElement);

      const phoneLiElement = document.createElement('li');
      phoneLiElement.textContent = `Phone Number: ${phoneField.value}`;
      previewSection.appendChild(phoneLiElement);

      const addressLiElement = document.createElement('li');
      addressLiElement.textContent = `Address: ${addressField.value}`;
      previewSection.appendChild(addressLiElement);

      const postalCodeLiElement = document.createElement('li');
      postalCodeLiElement.textContent = `Postal Code: ${postalCodeField.value}`;
      previewSection.appendChild(postalCodeLiElement);

      editBtnElement.disabled = false;
      continueBtnElement.disabled = false;
      ev.target.disabled = true;


    }
    fullNameField.value = '';
    emailField.value = '';
    phoneField.value = '';
    addressField.value = '';
    postalCodeField.value = '';

  }

  function editInfo() {

    const inputFieldsCollection = Array.from(document.querySelectorAll('#form div input'));
    const liElements = Array.from(document.getElementsByTagName('li'));

    inputFieldsCollection.map((elem, index) => {

      elem.value = Number(liElements[index].textContent.split(': ')[1])
        ? Number(liElements[index].textContent.split(': ')[1])
        : liElements[index].textContent.split(': ')[1];

      liElements[index].innerHTML = '';
      liElements[index].remove();

    })

    editBtnElement.disabled = true;
    continueBtnElement.disabled = true;
    submitBtnElement.disabled = false;

  }

  function continueFunc() {

    divBlock.innerHTML = '';

    //heading
    const h3Element = document.createElement('h3');
    h3Element.textContent = `Thank you for your reservation!`;

    divBlock.appendChild(h3Element);

  }
}
