function colorize() {
    const arr = Array.from(document.getElementsByTagName('table')[0].querySelectorAll('tr:nth-child(even)'));
    for(let row of arr) {
        row.style.backgroundColor = 'teal';
    }
}