import * as Levels from './levels';
import Game from './game.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx, canvas, Levels.level1);
let splash = true;

if (splash) {
    let image = new Image();
    image.src = "./lib/assets/images/SplashScreen.png";
    image.onload = ()=>  {
        ctx.drawImage(image,0,0);
    };
    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 13 && splash === true){
            splash = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.draw();
        }
        if(e.keyCode === 13 && game.state.gameOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let newGame = new Game(ctx, canvas, Levels.level1);
            newGame.draw();
        }
    });
}