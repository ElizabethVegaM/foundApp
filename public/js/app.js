// Fadeout de la página principal
const preload = document.getElementById('first');
window.onload = function() {
  window.setTimeout(fadeout, 3000);
  window.setTimeout(disappear, 3500);
}

function fadeout() {
  preload.style.opacity = '0';
}

function disappear () {
  location.href='home.html';
}
