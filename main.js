const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector('.control');
const $formFightButton = document.querySelector(".button");
//вызов констант из ноушена для генерации удара:
const HIT = {
  head: 30,
  body:25,
  foot:20,
}
// генерация удара со стороны противника
const ATTAK = ['head', 'body', 'foot'];

// кнопка рестарт, которая должна появиться после того, как кто-то проиграет или выиграет? она обновляет страницу
function createReloadButton() {
  const $reloadButtonDiv  = createElement('div', 'reloadWrap');
  const $reloadButton = createElement('button', "button");

  $reloadButton.innerText = 'Reload';

  $reloadButton.addEventListener('click',function click() {
                            window.location.reload()
                            console.log('ты нажал на кнопку рестарт');
                            } )
  $reloadButtonDiv.appendChild($reloadButton);
  $arenas.appendChild($reloadButtonDiv);
}

function elHP () {
  return  document.querySelector('.player' + this.player + ' .life'); //возвращаем  document.querySelector, он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
}

function renderHP() {
  this.elHP().style.width = this.hp + '%'; // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp. this.hp указывает на hp объекта, в котором применяется
}

function changeHP(HP) {
    this.hp -= HP; //  это то же самое, что и this.hp = this.hp - HP;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

const player1 = {
  player: 1,
  elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
  renderHP, //сделала renderHP методом объекта player1, renderHP вызывается по ключу объекта: renderHP имя ключа может быть другим, но нужно перерпроверить все вызовы, котрые на него ссылются
  changeHP, //сделала changeHP методом объекта player1, changeHP вызывается по ключу объекта: changeHP
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
  elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
  renderHP, //сделала renderHP методом объекта player2, renderHP вызывается по ключу объекта: renderHP
  changeHP,
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
  return Math.ceil(Math.random()* num);
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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer( player2));
//функция- удар противника
function enemyAttak() {
  const hit = ATTAK[getRandom(3) - 1]; // куда бьёт компьютер?
  const defence = ATTAK[getRandom(3) - 1]; // что защищает компьютер?
  console.log('####: hit', hit );
  console.log('####: defence', defence );

  return {
  value: getRandom(HIT[hit]), //бращаемся к объекту HIT, в который передедим куда бьёт компьютер
  hit,
  defence,
  }
}
//обработчик событий на сабмит
$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  //console.dir($formFight); //убрала, потому что открывается в консоли в развернутом виде, и очень сильно мешает
  const enemy = enemyAttak();
  const attack= {}; //создаём пустой объект, потом наполняем
  //цикл создаёт переменную item и передает в неё запишет каждый элемент массива $formFight
  for (let item of $formFight) {
      if (item.checked && item.name === 'hit') {
        attack.value = getRandom(HIT[item.value]); // записываем в объект attack значените value , он содержит в себе getRandom.
        attack.hit = item.value; // положили куда мы бьём
      }
      if ( item.checked && item.name === 'defence') {
          attack.defence = item.value;
      }
  }

  if (enemy.hit !== attack.defence) {
          player1.changeHP(enemy.value);
          player1.renderHP();
      }

      if (attack.hit !== enemy.defence) {
          player2.changeHP(attack.value);
          player2.renderHP();
      }

  player1.changeHP(enemy.value);
  player2.changeHP(attack.value);

  player1.renderHP();
  player2.renderHP();

  if ( player1.hp === 0 || player2.hp === 0) {
    $formFightButton.disabled = true;
    createReloadButton();
      }

      if (player1.hp < player2.hp && player1.hp == 0) {
         $arenas.appendChild(playerWins(player2.name));

      } else if (player1.hp > player2.hp && player2.hp == 0) {
        $arenas.appendChild(playerWins(player1.name));

      } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
      }
      //item.checked = false;

  console.log('####: a', attack );
  console.log('####: e', enemy );
})
