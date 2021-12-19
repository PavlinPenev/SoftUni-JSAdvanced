function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  const arr = text.split(' ');

  switch(convention) {
    case 'Camel Case':
      result += (arr[0][0].toLowerCase() + arr[0].substring(1).toLowerCase());
      break;
    case 'Pascal Case':
      result += (arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase());
      break;
    default:
      result = 'Error!'
      break;
  }
  if(result !== 'Error!') {
    for(let i = 1; i < arr.length; i++) {
      result += (arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase());
    }
  }
  document.getElementById('result').textContent = result;
}