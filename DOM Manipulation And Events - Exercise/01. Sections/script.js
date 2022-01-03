function create(words) {
   
   for(let word of words) {

      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      const div = document.createElement('div');
      div.appendChild(paragraph);
      div.addEventListener('click', (ev) => ev.target.children[0].style = 'block');

      document.getElementById('content').appendChild(div);

   }
}