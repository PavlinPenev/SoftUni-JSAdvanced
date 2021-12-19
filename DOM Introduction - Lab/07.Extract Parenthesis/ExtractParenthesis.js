function extract(content) {
    const text = document.getElementById(content).textContent;
    let regex = /\((?<word>[A-Za-z ]+)\)/g; 
    const array = text.match(regex);
    let result = array.join('; ');
    while(result.includes('(') || result.includes(')')) {
        result = result.replace('(','');
        result = result.replace(')','');
    }
    console.log(result);
    return result;
}