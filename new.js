//
// import getRandom from './utils.js'
// import {createReloadButton, elHP, renderHP, changeHP, createElement,
//         createPlayer, playerWins, playerAttack, showResult, enemyAttak} from './utils.js';
//
// const $arenas = document.querySelector(".arenas");
// const $formFight = document.querySelector('.control');
// const $formFightButton = document.querySelector(".button");
// const $chat = document.querySelector(".chat");
// let isStart = false;
// //вызов констант из ноушена для генерации удара:
//
//
// const player1 = {
//   player: 1,
//   elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
//   renderHP, //сделала renderHP методом объекта player1, renderHP вызывается по ключу объекта: renderHP имя ключа может быть другим, но нужно перерпроверить все вызовы, котрые на него ссылются
//   changeHP, //сделала changeHP методом объекта player1, changeHP вызывается по ключу объекта: changeHP
//   name: " Sonya",
//   hp: 100,
//   damageHp : 0,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
//   weapon: ["knife", 'Saber Teeth'],
//
//   attak: function() {
//       console.log('player1' + " " + 'Fight');
//   }
// }
// const player2 = {
//   player: 2,
//   elHP, // ЕСЛИ ФУНКЦИЯ ВНЕШНЯЯ ИМЕЕТ ТАКОЕ ЖЕ ИМЯ КАК В ОБЪЕКТЕ, ТО МЫ МОЖЕМ НАПИСАТЬ ПРОСТО ИМЯ ФУНКЦИИ.
//   renderHP, //сделала renderHP методом объекта player2, renderHP вызывается по ключу объекта: renderHP
//   changeHP,
//   name: " Kitana",
//   hp: 100,
//   damageHp : 0,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
//   weapon: ['fire', 'sword'],
//   attak: function(attak) {
//     console.log('player2' + " " + 'Fight');
//   }
// }
// // кнопка рестарт, которая должна появиться после того, как кто-то проиграет или выиграет? она обновляет страницу
//
//
//
//
// function getTime() {
//     const date = new Date();
//     return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   }
//
//   function getTextLog(type, playerName1, playerName2) {
//     switch (type) {
//       case 'start':
//           return logs[type]
//               .replace('[time]', getTime())
//               .replace('[player1]', name1)
//               .replace('[player2]', name2)
//           break;
//       case 'hit':
//             return logs[type][getRandom(logs[type].length-1) - 1]
//             .replace('[playerKick]', name1)
//             .replace('[playerDefence]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
//             break;
//       case 'defence':
//             return logs[type][getRandom(logs[type].length)-1]
//                 .replace('[playerKick]', name1)
//                 .replace('[playerDefence]', name2)
//             break;
//
//       case 'end':
//             return logs[type][getRandom(logs[type].length-1)]
//                 .replace('[playerWins]', name1)
//                 .replace('[playerLose]', name2)// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
//             break;
//       case 'draw':
//               return logs[type];
//
//             break;
//   }
//
//
// function generateLogs(type, player1, player2) {
//     //const text = logs[type][0].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name); //сделать рандомным выбор элемента
//   //  const text = logs[type][getRandom(logs[type].length)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
//   cost text = getTextLog(type, player1.name, player2.name);
//
//
//   let el = '';
//   const {name : name1, hp : hp1} = player1;
//   const {name : name2, hp : hp2, damageHp} = player2;
//   // switch (type) {
//   //   case 'start':
//         // text = logs[type];
//         // text = text.replace('[time]', time)
//         // .replace('[player1]', name1)
//         // .replace('[player2]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
//         // el = `<p> ${text} </p>`;
//         // break;
//     // case 'hit':
//     //     text = logs[type][getRandom(logs[type].length-1) - 1]
//     //     .replace('[playerKick]', name1)
//     //     .replace('[playerDefence]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
//     //     console.log('hit');
//     //     el = `<p> ${time} ${text} ${-damageHp} [${hp2}/100] </p>`;// шаблонная строка чтобы избежать конкатенации строк при помощи оператора +
//     //     break;
//     // case 'defence':
//     //     text = logs[type][getRandom(logs[type].length)-1]
//     //     .replace('[playerKick]', name2)
//     //     .replace('[playerDefence]', name1);
//     //     console.log('defence');
//     //     el = `<p> ${time} ${text} ${-damageHp} [${hp2}/100] </p>`;// шаблонная строка чтобы избежать конкатенации строк при помощи оператора +
//     //     break;
//     // case 'draw':
//     //         text = logs[type];
//     //         el = `<p> ${time} ${text} </p>`;
//     //         break;
//     // case 'end':
//     //         text = logs[type][getRandom(logs[type].length-1)]
//     //         .replace('[playerWins]', name1)
//     //         .replace('[playerLose]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
//     //         console.log('end ' + text + ' ' + name1, + ' ' + name2);
//     //         el = `<p> ${time} ${text} </p>`;
//     //         break;
//     }
//     // console.log(text);
//     // const el = '<p>' + text + '</p>'; создаём новую подобную шаблонную строку
//
//     player2.damageHp = 0;
//     $chat.insertAdjacentHTML('afterbegin', el);
// }
// // export default generateLogs;
// //обработчик событий на сабмит
// $formFight.addEventListener('submit', function(e) {
//   e.preventDefault();
//   //console.dir($formFight); //убрала, потому что открывается в консоли в развернутом виде, и очень сильно мешает
//     const enemy = enemyAttak();
//     const player = playerAttack();
//     if (!isStart) {
//       generateLogs('start', player2, player1);
//       isStart = true;
//     }
//
//
//     if (player.defence !== enemy.hit) {
//           player1.changeHP(enemy.value);
//           player1.renderHP();
//           generateLogs('hit', player2, player1);
//           // generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
//         }
//     else if (player.defence == enemy.hit)
//     {
//       generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
//     }
//
//     if (enemy.defence !== player.hit ) {
//       player2.changeHP(player.value);
//       player2.renderHP();
//       generateLogs('hit', player1, player2);
//       // generateLogs('defence', player1, player2);
//         }
//       else if (enemy.defence == player.hit) {
//         generateLogs('defence', player1, player2);
//       }
//             showResult(player1, player2);
// })
//
// function init() {
//   $arenas.appendChild(createPlayer(player1));
//   $arenas.appendChild(createPlayer( player2));
//
//   generateLogs(type, player1, player2)
// }
//
// init();
//
//
// //utils.js
//
// // function getRandom(num) {
// //   return Math.ceil(Math.random()* num);
// // }
// const getRandom = (num) => Math.ceil(Math.random()* num);
// export default getRandom;
// const HIT = {
//   head: 30,
//   body:25,
//   foot:20,
// }
// // import generateLogs from './main.js'
// // генерация удара со стороны противника
// const ATTAK = ['head', 'body', 'foot'];
//
// const $arenas = document.querySelector(".arenas");
// const $formFight = document.querySelector('.control');
// const $formFightButton = document.querySelector(".button");
// const $chat = document.querySelector(".chat");
// let isStart = false;
//
// export function createReloadButton() {
//   const $reloadButtonDiv  = createElement('div', 'reloadWrap');
//   const $reloadButton = createElement('button', "button");
//
//   $reloadButton.innerText = 'Reload';
//
//   $reloadButton.addEventListener('click',function click() {
//                             window.location.reload()
//                             console.log('ты нажал на кнопку рестарт');
//                             } )
//   $reloadButtonDiv.appendChild($reloadButton);
//   $arenas.appendChild($reloadButtonDiv);
// }
//
//  // default createReloadButton;
//
//  export function elHP () {
//    return  document.querySelector('.player' + this.player + ' .life'); //возвращаем  document.querySelector, он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
//  }
//
//  export function renderHP() {
//    this.elHP().style.width = this.hp + '%'; // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp. this.hp указывает на hp объекта, в котором применяется
//  }
//
//  export function changeHP(HP) {
//      this.hp -= HP; //  это то же самое, что и this.hp = this.hp - HP;
//      if (this.hp <= 0) {
//          this.hp = 0;
//      }
//      this.damageHp = HP; //записали на сколько изменилосмь хп,
//  }
//
//  export function createElement( tag, className) {
//      const $tag = document.createElement(tag);
//      if (className) {
//        $tag.classList.add(className);
//      }
//      return $tag;
//    }
//
// export function createPlayer( playerFunc ) {
//    const $player1 = createElement('div', 'player' + playerFunc.player);
//    const $progressbar = createElement('div', 'progressbar');
//    const $character = createElement('div', 'character');
//    const $life = createElement('div', 'life');
//    const $name = createElement('div' , 'name');
//    const $img = createElement('img');
//
//    $life.style.width = playerFunc.hp + '%';
//    $name.innerText = playerFunc.name;
//
//    $img.src = playerFunc.img;
//
//    $player1.appendChild($progressbar);
//    $player1.appendChild($character);
//    $progressbar.appendChild($life);
//    $progressbar.appendChild($name);
//    $character.appendChild($img);
//    $player1.appendChild($character);
//
//    return $player1;
//  }
//
//
//
//  export function playerWins(name) {
//    const $winTitle = createElement('div', 'loseTitle');
//    if (name) {
//      $winTitle.innerText = name + ' wins!!!';
//    } else {
//      $winTitle.innerText = 'draw'
//
//    }
//    return $winTitle;
//    }
//
//
//    //функция- удар противника
//    export function enemyAttak() {
//      const hit = ATTAK[getRandom(3) - 1]; // куда бьёт компьютер?
//      const defence = ATTAK[getRandom(3) - 1]; // что защищает компьютер?
//      console.log('####: hit', hit );
//      console.log('####: defence', defence );
//
//      return {
//      value: getRandom(HIT[hit]), //бращаемся к объекту HIT, в который передедим куда бьёт компьютер
//      hit,
//      defence,
//      }
//    }
//
//    export function playerAttack() {
//        const attack= {}; //создаём пустой объект, потом наполняем
//        for (let item of $formFight) {
//            if (item.checked && item.name === 'hit') {
//            attack.value = getRandom(HIT[item.value]); // записываем в объект attack значените value , он содержит в себе getRandom.
//            attack.hit = item.value; // положили куда мы бьём
//            }
//            if ( item.checked && item.name === 'defence') {
//                attack.defence = item.value;
//            }
//                item.checked = false;
//          }
//          return attack;
//
//    }
//
//   export function showResult(player1, player2) {
//
//         //  if (player1.hp === player2.hp && player1.hp == 100) {
//         // generateLogs('start', player2, player1);
//
//          // }
//          if ( player1.hp === 0 || player2.hp === 0) {
//              $formFightButton.disabled = true;
//              createReloadButton();
//              }
//
//          if ((player1.hp < player2.hp) && player1.hp == 0) {
//             $arenas.appendChild(playerWins(player2.name));
//             console.log('(player1.hp < player2.hp) && player1.hp == 0');
//             generateLogs('end', player2, player1);
//
//           }
//          else if ((player1.hp > player2.hp) && player2.hp == 0) {
//            $arenas.appendChild(playerWins(player1.name));
//            console.log('(player1.hp < player2.hp) && player1.hp == 0');
//            generateLogs('end', player1, player2);
//          }
//          else if (player1.hp === 0 && player2.hp === 0) {
//            $arenas.appendChild(playerWins());
//            generateLogs('draw', player2, player1);
//          }
//    }
