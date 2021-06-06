const $arenas = document.querySelector(".arenas");

const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: " Sonya",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ["knife", 'Saber Teeth'],
  attak: function() {
      console.log('player1' + " " + 'Fight');
  },
}


const player2 = {
  player: 2,
  name: " Kitana",
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['fire', 'sword'],
  attak: function(attak) {
    console.log('player2' + " " + 'Fight');
  }
}

function createElement( tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
      $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer( playerFunc ) {
  const $player1 = createElement('div', 'player' + playerFunc.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div' , 'name');
  const $img = createElement('img');
  //const $root = querySelector('.arenas');


  $life.style.width = playerFunc.hp + '%';
  $name.innerText = playerFunc.name;

  $img.src = playerFunc.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player1.appendChild($character);


  return $player1;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -=Math.ceil(Math.random()*20);

    if (player.hp <= 0) {
        player.hp = 0;
      }
    $playerLife.style.width = player.hp + '%';
}



// function playerLose(name) {
//   const $loseTitle = createElement('div', 'loseTitle');
//   $loseTitle.innerText = name + ' ' + 'lose';
//   return $loseTitle;
//
// }

function playerWin(name) {
  const $winTitle = createElement('div', 'loseTitle');
  $winTitle.innerText = name + ' win!!!'
  $randomButton.disabled = true
  return $winTitle;
}


function playerDraw()
{
  const $drawTitle = createElement('div', 'loseTitle');
  $drawTitle.innerText = ' Draw!!!'
  $randomButton.disabled = true
  return $drawTitle;
}

$randomButton.addEventListener('click', function() {
    console.log(" ####: Clic Rundom Button");
    changeHP(player1);
    changeHP(player2);
    if ((player1.hp <= 0) && (player2.hp <= 0))
      $arenas.appendChild(playerDraw());
    else if (player1.hp <= 0)
      $arenas.appendChild(playerWin(player2.name));
    else if (player2.hp <= 0)
      $arenas.appendChild(playerWin(player1.name));
  }
)

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer( player2));
