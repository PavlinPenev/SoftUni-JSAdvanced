function search() {
   document.getElementById('result').textContent = '';
   const arr = Array.from(document.getElementById('towns').querySelectorAll('li'));
   for(let element of arr) {
      element.style.textDecoration = 'none';
      element.style.fontWeight = 'normal';
   }
   const searchKeyword = document.getElementById('searchText').value.toLowerCase();
   let matches = 0;
   for(let element of arr) {
      const value = element.textContent.toLowerCase();
      if(value.includes(searchKeyword)) {
         matches++;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`
}
