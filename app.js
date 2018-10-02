// Fadeout de la página principal
const preload = document.getElementById('first');
window.onload = function() {
  window.setTimeout(fadeout, 3000);
  window.setTimeout(dissapear, 4000);
}

function fadeout() {
  preload.style.opacity = '0';
}

function dissapear () {
  preload.style.display = 'none';
}
