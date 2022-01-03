function lockedProfile() {

    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(x => x.addEventListener('click', showHideFields));

    function showHideFields(ev) {

        if(ev.target.parentNode.children[2].checked) {

            return;

        }
        
        if(ev.target.textContent === 'Show more') {
            
            ev.target.parentNode.children[9].style.display = 'block';
            ev.target.textContent = 'Hide it';

        } else {

            ev.target.parentNode.children[9].style.display = 'none';
            ev.target.textContent = 'Show more'

        }

    }

}