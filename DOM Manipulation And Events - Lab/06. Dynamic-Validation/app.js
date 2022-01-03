function validate() {

    const emailElement = document.getElementById('email');
    emailElement.addEventListener('change', error);

    function error(ev) {

        if(!(/\w+@\w+\.\w+/.test(emailElement.value))) {
            ev.target.classList.add('error');
        } else {
            ev.target.classList.remove('error');
        }
    }
}