import {playerz, playerzNew} from './player.js';
import getRandom from './utils.js'
import {createReloadButton, elHP, renderHP, changeHP, createElement,
        createPlayer, playerWins, playerAttack, showResult, enemyAttak} from './utils.js';
console.log(playerz);
console.log(playerzNew);
const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector('.control');
const $formFightButton = document.querySelector(".button");
const $chat = document.querySelector(".chat");
let isStart = false;
//вызов констант из ноушена для генерации удара:


const player1 = {
  player: 1,
  elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
  renderHP, //сделала renderHP методом объекта player1, renderHP вызывается по ключу объекта: renderHP имя ключа может быть другим, но нужно перерпроверить все вызовы, котрые на него ссылются
  changeHP, //сделала changeHP методом объекта player1, changeHP вызывается по ключу объекта: changeHP
  name: " Sonya",
  hp: 100,
  damageHp : 0,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ["knife", 'Saber Teeth'],

  attak: function() {
      console.log('player1' + " " + 'Fight');
  }
}
const player2 = {
  player: 2,
  elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
  renderHP, //сделала renderHP методом объекта player2, renderHP вызывается по ключу объекта: renderHP
  changeHP,
  name: " Kitana",
  hp: 100,
  damageHp : 0,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['fire', 'sword'],
  attak: function(attak) {
    console.log('player2' + " " + 'Fight');
  }
}
// кнопка рестарт, которая должна появиться после того, как кто-то проиграет или выиграет? она обновляет страницу


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer( player2));


function generateLogs(type, player1, player2) {
    //const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name); //сделать рандомным выбор элемента
  //  const text = logs[type][getRandom(logs[type].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
  let text = '';
  const date = new Date();
  const time = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
  console.log(time)
  let el = '';
  const {name : name1, hp : hp1} = player1;
  const {name : name2, hp : hp2, damageHp} = player2;
  switch (type) {
    case 'start':
        text = logs[type];
        text = text.replace('[time]', time).replace('[player1]', name1).replace('[player2]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
        el = `<p> ${text} </p>`;
        break;
    case 'hit':
        text = logs[type][getRandom(logs[type].length-1)].replace('[playerKick]', name1).replace('[playerDefence]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
        console.log('hit');
        el = `<p> ${time} ${text} ${-damageHp} [${hp2}/100] </p>`;// шаблонная строка чтобы избежать конкатенации строк при помощи оператора +
        break;
    case 'defence':
        text = logs[type][getRandom(logs[type].length)-1].replace('[playerKick]', name2).replace('[playerDefence]', name1);
        console.log('defence');
        el = `<p> ${time} ${text} ${-damageHp} [${hp2}/100] </p>`;// шаблонная строка чтобы избежать конкатенации строк при помощи оператора +
        break;
    case 'draw':
            text = logs[type];
            el = `<p> ${time} ${text} </p>`;
            break;
    case 'end':
            text = logs[type][getRandom(logs[type].length-1)].replace('[playerWins]', name1).replace('[playerLose]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
            console.log('end ' + text + ' ' + name1, + ' ' + name2);
            el = `<p> ${time} ${text} </p>`;
            break;
    }
    // console.log(text);
    // const el = '<p>' + text + '</p>'; создаём новую подобную шаблонную строку

    player2.damageHp = 0;
    $chat.insertAdjacentHTML('afterbegin', el);
}
export default generateLogs;
//обработчик событий на сабмит
$formFight.addEventListener('submit', function(e) {
  e.preventDefault();
  //console.dir($formFight); //убрала, потому что открывается в консоли в развернутом виде, и очень сильно мешает
    const enemy = enemyAttak();
    const player = playerAttack();
    if (!isStart) {
      generateLogs('start', player2, player1);
      isStart = true;
    }


    if (player.defence !== enemy.hit) {
          player1.changeHP(enemy.value);
          player1.renderHP();
          generateLogs('hit', player2, player1);
          // generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
        }
    else if (player.defence == enemy.hit)
    {
      generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
    }

    if (enemy.defence !== player.hit ) {
      player2.changeHP(player.value);
      player2.renderHP();
      generateLogs('hit', player1, player2);
      // generateLogs('defence', player1, player2);
        }
      else if (enemy.defence == player.hit) {
        generateLogs('defence', player1, player2);
      }
            showResult(player1, player2);
})
