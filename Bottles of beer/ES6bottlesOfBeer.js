var formatLines = (bottle) => {

    let minusBottle = bottle - 1;

    let song = `<p> ${bottle} bottles of beer on the wall <br> ` +
        `${bottle} bottles of beer <br> ` +
        `Take one down, pass it around <br>` +
        `${minusBottle} bottles of beer on the wall </p>`;

    if (bottle === 1) {
        song = song.replace(new RegExp('1 bottles', 'g'), '1 bottle');
    }

    return song;
}

var beerBottles = 99,
	container = document.getElementById('songContainer');

for (var i = beerBottles; i > 0; i--) {
    container.innerHTML = container.innerHTML + formatLines(i);
}
