function encodeAndDecodeMessages() {
    
    document.getElementById('main').children[0].children[2].addEventListener('click', encode);
    document.getElementById('main').children[1].children[2].addEventListener('click', decode);
    let message = '';

    function encode(ev) {

        message = ev.target.parentNode.children[1].value;
        message = message.split('').map(x => {

            let ascii = x.charCodeAt(0);
            ascii++;
            return String.fromCharCode(ascii);

        }).join('');
        ev.target.parentNode.children[1].value = null;
        document.getElementsByTagName('textarea')[1].value = message;

    }

    function decode(ev) {

        ev.target.parentNode.children[1].value = ev.target.parentNode.children[1].value
        .split('')
        .map(x => {

            let ascii = x.charCodeAt(0);
            ascii--;
            return String.fromCharCode(ascii);

        }).join('');

    }
}