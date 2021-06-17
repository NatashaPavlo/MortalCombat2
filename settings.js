// function getRandom(num) {
//   return Math.ceil(Math.random()* num);
// }
const getRandom = (num) => Math.ceil(Math.random()* num);
export default getRandom;
import {HIT, ATTAK} from './constants/index.js';
import {createElement} from './utils/index.js';
// import generateLogs from './main.js'
// генерация удара со стороны противника


const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector('.control');
const $formFightButton = document.querySelector(".button");
const $chat = document.querySelector(".chat");
let isStart = false;

export function createReloadButton() {
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

 // default createReloadButton;


 export function playerWins(name) {
   const $winTitle = createElement('div', 'loseTitle');
   if (name) {
     $winTitle.innerText = name + ' wins!!!';
   } else {
     $winTitle.innerText = 'draw'

   }
   return $winTitle;
   }

   //функция- удар противника
   export function enemyAttak() {
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

   export function playerAttack() {
       const attack= {}; //создаём пустой объект, потом наполняем
       for (let item of $formFight) {
           if (item.checked && item.name === 'hit') {
           attack.value = getRandom(HIT[item.value]); // записываем в объект attack значените value , он содержит в себе getRandom.
           attack.hit = item.value; // положили куда мы бьём
           }
           if ( item.checked && item.name === 'defence') {
               attack.defence = item.value;
           }
               // item.checked = false;
         }
         return attack;

   }






  // import {player1, player2} from './main.js';
