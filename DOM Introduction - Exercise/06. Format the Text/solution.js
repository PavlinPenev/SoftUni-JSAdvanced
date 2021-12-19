function solve() {
  let arr = document.getElementById('input').value.split('.');
  let result = '';

  while(arr[0]) {
    let text = document.createTextNode('');
    for(let i = 0; i < 3; i++) {
      if(arr[0]) {
        text.appendData(arr[0] + '.');
        arr.shift();
      }
    }
    
    let child = document.createElement('p');
    child.appendChild(text);
    document.getElementById('output').appendChild(child);
  }
}