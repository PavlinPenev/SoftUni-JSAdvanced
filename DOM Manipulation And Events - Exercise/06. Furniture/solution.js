function solve() {

    document.getElementById('exercise').children[2].addEventListener('click', addRows);
    document.getElementsByTagName('button')[1].addEventListener('click', buy)

    function addRows() {

      const objArray = JSON.parse(document.getElementById('exercise').children[1].value);

      for(let obj of objArray) {
        //[{"name": "Sofa", 
        //"img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", 
        //"price": 150, "decFactor": 1.2}]

        //declare all the element variables
        let row = document.createElement('tr');
        const imgTdElement = document.createElement('td');
        const nameTdElement = document.createElement('td');
        const priceTdElement = document.createElement('td');
        const decorationTdElement = document.createElement('td');
        const checkboxTdElement = document.createElement('td');

        //create and append img element
        const imgElement = document.createElement('img');
        imgElement.src = obj['img'];
        imgTdElement.appendChild(imgElement);
        row.appendChild(imgTdElement);

        //create and append name element
        const pNameElement = document.createElement('p');
        pNameElement.textContent = obj['name'];
        nameTdElement.appendChild(pNameElement);
        row.appendChild(nameTdElement);

        //create and append price element
        const pPriceElement = document.createElement('p');
        pPriceElement.textContent = obj['price'];
        priceTdElement.appendChild(pPriceElement);
        row.appendChild(priceTdElement);

        //create and append decoration factor element
        const pDecorElement = document.createElement('p');
        pDecorElement.textContent = obj['decFactor'];
        decorationTdElement.appendChild(pDecorElement);
        row.appendChild(decorationTdElement);

        //create and append checkbox element
        const checkboxInputElement = document.createElement('input');
        checkboxInputElement.type = 'checkbox';
        checkboxTdElement.appendChild(checkboxInputElement);
        row.appendChild(checkboxTdElement);

        //add row to the tbody
        document.getElementsByTagName('tbody')[0].appendChild(row);
      }
    }

    function buy() {

      const arrayOfNames = [];
      const arrayOfPrices = [];
      const arrayOfDecorPoints = [];

      const arrayOfCheckboxes = Array.from(document.getElementsByTagName('input'));
      arrayOfCheckboxes.forEach(x => {

        if(x.checked) {

          arrayOfNames.push(x.parentNode.parentNode.children[1].children[0].textContent);
          arrayOfPrices.push(Number(x.parentNode.parentNode.children[2].children[0].textContent));
          arrayOfDecorPoints.push(Number(x.parentNode.parentNode.children[3].children[0].textContent));

        }

      });

      let stringOrderInfo = `Bought furniture: ${arrayOfNames.join(', ')}\nTotal price: ${arrayOfPrices.reduce((a, b) => a + b, 0).toFixed(2)}\nAverage decoration factor: ${arrayOfDecorPoints.reduce((a, b) => a + b, 0) / arrayOfDecorPoints.length}`;
      document.getElementsByTagName('textarea')[1].textContent = stringOrderInfo;
    }
}