import {createElement} from '../utils/index.js';
class Player {
  constructor(props) {
    console.log(props);
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.player = props.player;
    this.selector = `player${this.player}`;
    this.rootSelector = props.rootSelector;
    }

     elHP = () => {
       return  document.querySelector(`.${this.selector} .life`); //возвращаем  document.querySelector, он ссылается на внутреннее поле player (this.player) и выводит 1 или 2
     }

    renderHP = () => {
       this.elHP().style.width = this.hp + '%'; // исползует elHP() для того, чтобы взять её содержимое и добавив style.width рисовать (изменять) hp. this.hp указывает на hp объекта, в котором применяется
     }

    changeHP = (randomNumber) => {
         this.hp -= randomNumber; //  это то же самое, что и this.hp = this.hp - HP;

         if (this.hp <= 0) {
             this.hp = 0;
         }
         // this.damageHp = HP; //записали на сколько изменилосмь хп,
     }
     createPlayer = () => {
        const $player = createElement('div',this.selector);
        const $progressbar = createElement('div', 'progressbar');
        const $character = createElement('div', 'character');
        const $life = createElement('div', 'life');
        const $name = createElement('div' , 'name');
        const $img = createElement('img');

        $life.style.width = this.hp + '%';
        $name.innerText = this.name;

        $img.src = this.img;

        $player.appendChild($progressbar);
        $player.appendChild($character);
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
        $character.appendChild($img);
        $player.appendChild($character);

        const $root = document.querySelector(`.${this.rootSelector}`);
        $root.appendChild($player);

        return $player;
      }
  }

 export default Player;
