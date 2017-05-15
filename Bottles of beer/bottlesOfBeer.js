var beerBottles = 99;

function formatLines(bottle) {
  var songLine = '<p> {0} bottles of beer on the wall <br> ' +
    '{0} bottles of beer <br>' +
    'Take one down, pass it around <br>' +
    '{1} bottles of beer on the wall' +
    '</p>';

  songLine = songLine.replace(new RegExp('\\{0\\}', 'g'), bottle);
  songLine = songLine.replace('{1}', bottle - 1);

  if (bottle === 1) {
    songLine = songLine.replace(new RegExp('1 bottles', 'g'), '1 bottle');
  }

  return songLine;
}

var container = document.getElementById('songContainer');
var lines = '';

for (var bi = beerBottles; i > 0; i--) {
  lines += formatLines(i);
}

container.innerHTML = lines;
