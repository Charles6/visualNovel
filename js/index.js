function setBackground() {
  document.getElementById('background').innerHTML = "<img src='assets/backgrounds/roof.jpg' class='backgroundSize'>";
};
setBackground();

function textWindow() {
  document.getElementById('text').innerHTML = "<div class='textBox' >Hello World</div>";
  document.getElementById('text').addEventListener('click', next);
};
textWindow();

function next() {
  document.getElementById('text').style.opacity = 0;
  setTimeout(function () {
      document.getElementById('text').style.opacity = 1;
  }, 500);
};

// function menuSet(){
//   document.getElementById('menu').innerHTML = "<div id='menuButton' onclick='toggleMenu()'></div>";
// }
// menuSet();
