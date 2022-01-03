function focused() {

    const mainDiv = document.getElementsByTagName('div')[0];
    const mainDivArray = Array.from(mainDiv.children);
    
    for(let div of mainDivArray) {

        div.children[1].addEventListener('focus', onFocus);
        div.children[1].addEventListener('blur', onBlur);
        
    }

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');
    }
    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focused');
    }
}