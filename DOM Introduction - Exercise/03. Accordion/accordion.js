function toggle() {
    switch(document.getElementsByClassName('button')[0].textContent) {
        case 'More':
            document.getElementsByClassName('button')[0].textContent = 'Less';
            document.getElementById('extra').style.display = 'block';
            break;
        case 'Less':
            document.getElementsByClassName('button')[0].textContent = 'More';
            document.getElementById('extra').style.display = 'none';
            break;
    }

}