window.addEventListener('load', solve);

function solve() {

    //sections
    const allHitsSection = document.getElementById('all-hits');
    const savedHitsSection = document.getElementById('saved-hits');
    const likesParagraph = document.getElementsByClassName('likes')[0].children[0];

    const addBtnElement = document.getElementById('add-btn');
    addBtnElement.addEventListener('click', addSongToAllHitsSection);

    //input fields
    const genreField = document.getElementById('genre');
    const nameField = document.getElementById('name');
    const authorField = document.getElementById('author');
    const dateField = document.getElementById('date');

    function addSongToAllHitsSection(ev) {

        ev.preventDefault();

        if (genreField.value.trim() && nameField.value.trim() && authorField.value.trim() && dateField.value.trim()) {

            //creating the HTML structure
            const divElement = document.createElement('div');
            divElement.classList.add('hits-info');

            const imgElement = document.createElement('img');
            imgElement.src = "./static/img/img.png";
            divElement.appendChild(imgElement);

            const h2GenreElement = document.createElement('h2');
            h2GenreElement.textContent = `Genre: ${genreField.value}`;
            divElement.appendChild(h2GenreElement);

            const h2NameElement = document.createElement('h2');
            h2NameElement.textContent = `Name: ${nameField.value}`;
            divElement.appendChild(h2NameElement);

            const h2AuthorElement = document.createElement('h2');
            h2AuthorElement.textContent = `Author: ${authorField.value}`;
            divElement.appendChild(h2AuthorElement);

            const h3DateElement = document.createElement('h3');
            h3DateElement.textContent = `Date: ${dateField.value}`;
            divElement.appendChild(h3DateElement);

            const saveBtnElement = document.createElement('button');
            saveBtnElement.textContent = "Save song";
            saveBtnElement.addEventListener('click', saveSong);
            saveBtnElement.classList.add('save-btn');
            divElement.appendChild(saveBtnElement);

            const likeBtnElement = document.createElement('button');
            likeBtnElement.textContent = "Like song";
            likeBtnElement.addEventListener('click', likeSong);
            likeBtnElement.classList.add('like-btn');
            divElement.appendChild(likeBtnElement);

            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.textContent = "Delete";
            deleteBtnElement.addEventListener('click', deleteSong);
            deleteBtnElement.classList.add('delete-btn');
            divElement.appendChild(deleteBtnElement);

            allHitsSection.children[0].appendChild(divElement);

        }

        genreField.value = '';
        nameField.value = '';
        authorField.value = '';
        dateField.value = '';

        //buttons event listener functions
        function saveSong(ev) {

            const parent = ev.target.parentNode;

            savedHitsSection.children[0].appendChild(parent);
            parent.getElementsByClassName('like-btn')[0].remove();
            ev.target.remove();

        }

        function likeSong(ev) {

            let likes = Number(likesParagraph.textContent.split(' ').pop());

            likesParagraph.innerText = `Total Likes: ${++likes}`;

            ev.target.disabled = true;

        }

        function deleteSong(ev) {

            ev.target.parentNode.remove();

        }

    }
}