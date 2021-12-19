function extractText() {
    const items = Array.from(document.querySelectorAll('#items li'));
    let result = '';
    for(let item of items) {
        result += item.textContent + '\n';
    }
    document.getElementById('result').textContent = result;
}