const $arenas = document.querySelector(".arenas");

const $randomButton = document.querySelector(".button");

function createReloadButton() {
  const $reloadButton  = createElement('div', 'reloadWrap');
  const $randomButton = createElement('div', "button");

  $randomButton.innerText = 'Restart';


  $randomButton.addEventListener('click',function click() {
                            window.location.reload()
                            console.log('ты нажал на кнопку рестарт');
                            } )
  $reloadButton.appendChild($randomButton);
  $arenas.appendChild($reloadButton);
}



function elHP () {
  return  document.querySelector('.player' + this.player + ' .life'); //возвращаем  document.querySelector, он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
}

 console.log(elHP);

function renderHP() {
  this.elHp().style.width = this.hp + '%'; // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp. this.hp указывает на hp объекта, в котором применяется
}


function changeHP(HP) {
    this.hp -= HP; //  это то же самое, что и this.hp = this.hp - HP;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}
console.log(renderHP);

const player1 = {
  player: 1,
  elHp: elHP, //сделала elHP методом объекта player1, elHP вызывается по ключу объекта: elHP,  имя ключа может быть другим, но нужно перерпроверить все вызовы, котрые на него ссылются
  renderHP: renderHP, //сделала renderHP методом объекта player1, renderHP вызывается по ключу объекта: renderHP имя ключа может быть другим, но нужно перерпроверить все вызовы, котрые на него ссылются
  changeHP: changeHP, //сделала changeHP методом объекта player1, changeHP вызывается по ключу объекта: changeHP
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
  elHp: elHP,
  renderHP: renderHP, //сделала renderHP методом объекта player2, renderHP вызывается по ключу объекта: renderHP
  changeHP: changeHP,
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

function getRandom(num) {
  return Math.ceil(Math.random()*20);
}

function playerWins(name) {
  const $winTitle = createElement('div', 'loseTitle');
  if (name) {
    $winTitle.innerText = name + ' wins!!!';
  } else {
    $winTitle.innerText = 'draw'
  }
  return $winTitle;
  }


$randomButton.addEventListener('click', function() {
    console.log(" ####: Clic Rundom Button");
    // changeHP(player1);
    // changeHP(player2);
    player1.changeHP(getRandom(20)); // в объекте player1 вызываю функцию changeHP() по имени ключа (changeHP, которое может меняться), внутри этой функции я вызываю ф-цию getRandom() и передею в неё аргумент (20)
    player2.changeHP(getRandom(20)); //в объекте player2 вызываю функцию changeHP() по имени ключа (changeHP), внутри этой функции я вызываю ф-цию getRandom() и передею в неё аргумент (20)
    player1.renderHP(); // в объекте player1 вызываю функцию renderHP(), по имени ключа (renderHP), чтобы оно перерисовывало жизни игрока
    player2.renderHP(); // в объекте player2 вызываю функцию renderHP(), по имени ключа (renderHP), чтобы оно перерисовывало жизни игрока

    if ( player1.hp === 0 || player2.hp === 0) {
  $randomButton.disabled = true;
    }
    if (player1.hp < player2.hp && player1.hp == 0) {
       $arenas.appendChild(playerWins(player2.name));
       createReloadButton();
    } else if (player1.hp > player2.hp && player2.hp == 0) {
      $arenas.appendChild(playerWins(player1.name));
      createReloadButton();
    } else if (player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWins());
      createReloadButton();
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer( player2));
