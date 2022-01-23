function validate() {

    const emailSubmitButton = document.getElementById('email');
    emailSubmitButton.addEventListener('change', validateEmail);

    function validateEmail(ev) {
        
        if (!/\w+\@\w+\.\w+/.test(ev.target.value)) {
        
            ev.target.classList.add('error');
    
        } else {

            ev.target.classList.remove('error');

        }

    }
    
}