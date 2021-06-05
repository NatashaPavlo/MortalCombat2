const player1 = {
  name: " Sonya",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ["knife", 'Saber Teeth'],
  attak: function() {
      console.log('player1' + " " + 'Fight');
  },
}


const player2 = {
  name: " Kitana",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['fire', 'sword'],
  attak: function(attak) {
    console.log('player2' + " " + 'Fight');
  }
}


function createPlayer( player, playerFunc ) {
  const $player1 = document.createElement('div');
  const $progressbar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $img = document.createElement('img');
  const $root = document.querySelector('.arenas');
  const $arenas = document.querySelector(".arenas");


  $player1.classList.add(player);
  $character.classList.add('character');
  $progressbar .classList.add('progressbar');
  $life.classList.add('life');
  $name.classList.add('name');

  $life.style.width = playerFunc.hp + '%';
  $name.innerText = playerFunc.name;

  $img.src = playerFunc.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player1.appendChild($character);

  $arenas.appendChild($player1);
}


createPlayer('player1', player1);
createPlayer('player2', player2);
