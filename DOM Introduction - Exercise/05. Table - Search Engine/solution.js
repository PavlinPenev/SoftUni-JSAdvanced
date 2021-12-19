function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      document.getElementById('searchField').textContent = '';
      const searchKeyword = document.getElementById('searchField').value.toLowerCase();

      const arr = Array.from(document.getElementsByClassName('container')[0]
                                          .querySelectorAll('tbody tr'));
      for(let element of arr) {
         element.classList.remove('select');
      }
      for(let element of arr.filter(e => e.textContent.toLowerCase().includes(searchKeyword))) {
         element.classList.add('select');
      }
   }
}