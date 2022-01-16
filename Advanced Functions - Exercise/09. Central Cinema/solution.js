function solve() {

    const nameInput = document.getElementById('container').children[0];
    const hallInput = document.getElementById('container').children[1];
    const priceInput = document.getElementById('container').children[2];
    document.querySelector('#container button').addEventListener('click', addMovie);
    const sectionMovies = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');
    document.querySelector('#archive button').addEventListener('click', clearArchive);

    function addMovie(ev) {

        ev.preventDefault();

        if (nameInput.value && hallInput.value && Number(priceInput.value)) {

            const liElement = document.createElement('li');
            const spanElement = document.createElement('span');
            spanElement.textContent = nameInput.value;
            liElement.appendChild(spanElement);
            const strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hallInput.value}`;
            liElement.appendChild(strongElement);
            const divElement = document.createElement('div');
            const strongToDivElement = document.createElement('strong');
            strongToDivElement.textContent = Number(priceInput.value).toFixed(2);
            divElement.appendChild(strongToDivElement);
            const inputElement = document.createElement('input');
            inputElement.placeholder = 'Tickets Sold';
            divElement.appendChild(inputElement);
            const archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie);
            divElement.appendChild(archiveButton);
            liElement.appendChild(divElement);
            sectionMovies.appendChild(liElement);

        }

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        function archiveMovie(ev) {

            if (ev.target.parentNode.children[1].value && Number(ev.target.parentNode.children[1].value) >= 0) {

                const movieLi = ev.target.parentNode.parentNode;
                const newLi = document.createElement('li');
                const spanElement = document.createElement('span');
                spanElement.textContent = movieLi.children[0].textContent;
                newLi.appendChild(spanElement);
                const strongElement = document.createElement('strong');
                strongElement.textContent = `Total amount: ${(Number(movieLi.children[2].children[1].value) * Number(movieLi.children[2].children[0].textContent)).toFixed(2)}`;
                newLi.appendChild(strongElement);
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', (event) => event.target.parentNode.remove());
                newLi.appendChild(deleteButton);
                archiveSection.appendChild(newLi);
                movieLi.remove();

            }
        }
    }

    function clearArchive() {

        const archiveItems = Array.from(archiveSection.children);
        archiveItems.forEach(x => x.remove());

    }
}