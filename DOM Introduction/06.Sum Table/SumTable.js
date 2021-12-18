function sumTable() {
    const table = Array.from(document.querySelectorAll('table tbody tr'));
    let sum = 0;
    for(let i = 1; i < table.length; i++) {
        let cost = Number(table[i].querySelectorAll('td')[1].textContent);
        sum += cost;
    }
    document.getElementById('sum').textContent = sum;
}