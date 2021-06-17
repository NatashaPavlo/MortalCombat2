import {getRandom, createElement, getTime} from '../utils/index.js';
import {HIT, ATTAK} from '../constants/index.js';
import Player from '../player/index.js';
import {createReloadButton,
        playerWins, playerAttack, enemyAttak} from '../settings.js';







// export default generateLogs;

//обработчик событий на сабмит


// init();




class Game {
  constructor() {
    this.$arenas = document.querySelector(".arenas");
    this.$formFight = document.querySelector('.control');
    this.$formFightButton = document.querySelector(".button");
    this.$chat = document.querySelector(".chat");
    this.player1 = new Player({
        player: 1,
        name: " Sonya",
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        rootSelector: 'arenas',
    });


    // let isStart = false;

    this.player2 = new Player ({
      player: 2,
      name: " Kitana",
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
      rootSelector: 'arenas',
    });

    this.$formFight.addEventListener('submit', (e) => {
      e.preventDefault();
      //console.dir($formFight); //убрала, потому что открывается в консоли в развернутом виде, и очень сильно мешает
        const enemy = enemyAttak();
        const player = playerAttack();
        // if (!isStart) {
        //   generateLogs('start', player2, player1);
        //   isStart = true;
        // }


        if (player.defence !== enemy.hit) {
          // console.log('this', this);
              this.player1.changeHP(enemy.value);
              this.player1.renderHP();
              this.generateLogs('hit', this.player2, this.player1, enemy.value);
              // generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
            }
        else if (player.defence == enemy.hit)
        {
          this.generateLogs('defence', this.player2, this.player1, 0);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
        }

        if (enemy.defence !== player.hit ) {
          this.player2.changeHP(player.value);
          this.player2.renderHP();
          this.generateLogs('hit', this.player1, this.player2, player.value);
          // generateLogs('defence', player1, player2);
            }
          else if (enemy.defence == player.hit) {
            this.generateLogs('defence', this.player1, this.player2, 0);
          }
          this.showResult();
    })

  }


  showResult = () => {

        //  if (player1.hp === player2.hp && player1.hp == 100) {
        // generateLogs('start', player2, player1);

         // }
         if ( this.player1.hp === 0 || this.player2.hp === 0) {
             this.$formFightButton.disabled = true;
             createReloadButton();
             }

         if ((this.player1.hp < this.player2.hp) && this.player1.hp == 0) {
            this.$arenas.appendChild(playerWins(this.player2.name));
            console.log('(player1.hp < player2.hp) && player1.hp == 0');
            this.generateLogs('end', this.player2, this.player1);

          }
         else if ((this.player1.hp > this.player2.hp) && this.player2.hp == 0) {
           this.$arenas.appendChild(playerWins(this.player1.name));
           console.log('(player1.hp < player2.hp) && player1.hp == 0');
           this.generateLogs('end', this.player1, this.player2);
         }
         else if (this.player1.hp === 0 && this.player2.hp === 0) {
           this.$arenas.appendChild(playerWins());
           this.generateLogs('draw', this.player1, this.player2, 0);
         }
   }


  getTextLog = (type, playerName1, playerName2) => {
         const {name : name1, hp : hp1} = this.player1;
         const {name : name2, hp : hp2, damageHp} = this.player2;

         switch (type) {
           case 'start':
               return logs[type]
                   .replace('[time]', getTime())
                   .replace('[player1]', name1)
                   .replace('[player2]', name2)
               break;
           case 'hit':
                 return logs[type][getRandom(logs[type].length-1) - 1]
                 .replace('[playerKick]', name1)
                 .replace('[playerDefence]', name2);// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
                 break;
           case 'defence':
                 return logs[type][getRandom(logs[type].length)-1]
                     .replace('[playerKick]', name1)
                     .replace('[playerDefence]', name2)
                 break;

           case 'end':
                 return logs[type][getRandom(logs[type].length-1)]
                     .replace('[playerWins]', name1)
                     .replace('[playerLose]', name2)// .replace это спец метод, который в аргументах принимает(1- что мы будем заменять, 2- на что заменяем)
                 break;
           case 'draw':
                   return logs[type];

                 break;
               }
  }



  generateLogs = (type, player1, player2, valueAttack) => {
    let text = this.getTextLog(type, player1.name, player2.name);
    switch (type) {
      case 'hit':
          text =`${getTime()} ${text} -${valueAttack}[${player2.hp}/100]`;
          break;
      case 'defence':
      case 'end':
      case 'draw':
          text =`${getTime()} ${text}`
    }
    const el = `<p>${text}</p>`;
    this.$chat.insertAdjacentHTML('afterbegin', el);
  }



  init = () => {
    this.player1.createPlayer();
    this.player2.createPlayer();


    this.generateLogs("start", this.player1, this.player2, 0);
  }

  start = () => {
    this.init();
  }
}

export default Game;


// game = ()=> {
//   this.$arenas = document.querySelector('.arenas');
//   this.$formFight = document.querySelector('.control');
//   this.$chat = document.querySelector('.chat');
//   this.init() {
//   player1.createPlayer();
//   player2.createPlayer();
//   generateLogs("start", player1, player2)
// }
//   this.$formFight.addEventListener = ('submit', function(e) => {
//   e.preventDefault();
//     const {hit: hitEnemy, defence: defenceEnemy,value: valueEnemy} = enemyAttak();
//     const {hit, defence, value} = playerAttack();
//
//     if (defence !== hitEnemy) {
//           player1.changeHP(valueEnemy);
//           player1.renderHP();
//           generateLogs('hit', player2, player1, valueEnemy);
//           // generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
//         } else {
//           generateLogs('defence', player2, player1);// вторым аргументом player2- бьёт, третьим аргументом player1- защищается
//         }
//
//     if (defenceEnemy !== hit ) {
//       player2.changeHP(value);
//       player2.renderHP();
//       generateLogs('hit', player1, player2, value);
//       // generateLogs('defence', player1, player2);
//         }
//       else {
//         generateLogs('defence', player1, player2);
//       }
//       showResult(player1, player2);
//     })
// }
