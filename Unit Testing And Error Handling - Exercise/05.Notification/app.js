function notify(message) {

  const notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.hidden = false;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', (ev) => {
    
    ev.target.hidden = true;
    ev.target.style.display = 'none';

  });

}