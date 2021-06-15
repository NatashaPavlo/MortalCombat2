// function getRandom(num) {
//   return Math.ceil(Math.random()* num);
// }
const getRandom = (num) => Math.ceil(Math.random()* num);
export default getRandom;
const HIT = {
  head: 30,
  body:25,
  foot:20,
}
import generateLogs from './main.js'
// генерация удара со стороны противника
const ATTAK = ['head', 'body', 'foot'];

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

 export function elHP () {
   return  document.querySelector('.player' + this.player + ' .life'); //возвращаем  document.querySelector, он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
 }

 export function renderHP() {
   this.elHP().style.width = this.hp + '%'; // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp. this.hp указывает на hp объекта, в котором применяется
 }

 export function changeHP(HP) {
     this.hp -= HP; //  это то же самое, что и this.hp = this.hp - HP;
     if (this.hp <= 0) {
         this.hp = 0;
     }
     this.damageHp = HP; //записали на сколько изменилосмь хп,
 }

 export function createElement( tag, className) {
     const $tag = document.createElement(tag);
     if (className) {
       $tag.classList.add(className);
     }
     return $tag;
   }

export function createPlayer( playerFunc ) {
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
               item.checked = false;
         }
         return attack;

   }

  export function showResult(player1, player2) {

        //  if (player1.hp === player2.hp && player1.hp == 100) {
        // generateLogs('start', player2, player1);

         // }
         if ( player1.hp === 0 || player2.hp === 0) {
             $formFightButton.disabled = true;
             createReloadButton();
             }

         if ((player1.hp < player2.hp) && player1.hp == 0) {
            $arenas.appendChild(playerWins(player2.name));
            console.log('(player1.hp < player2.hp) && player1.hp == 0');
            generateLogs('end', player2, player1);

          }
         else if ((player1.hp > player2.hp) && player2.hp == 0) {
           $arenas.appendChild(playerWins(player1.name));
           console.log('(player1.hp < player2.hp) && player1.hp == 0');
           generateLogs('end', player1, player2);
         }
         else if (player1.hp === 0 && player2.hp === 0) {
           $arenas.appendChild(playerWins());
           generateLogs('draw', player2, player1);
         }
   }
