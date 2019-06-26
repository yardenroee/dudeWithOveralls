import * as Levels from './levels';
import Level from "./level";
class Game {
    constructor(ctx, canvas, level) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.level = new Level(ctx, canvas, level); // levels array at each succession of level change this.level
        this.levels = [Levels.level1, Levels.level2, Levels.level3];
        this.levelNum = this.level.currentLevel;
        this.player = this.level.player;
        this.draw = this.draw.bind(this);
        this.requestID = {};
        this.gameOver = this.gameOver.bind(this);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.updatePos();
        this.level.detectCollision();
        this.player.drawPlayer();
        this.level.drawLevel();
        if (this.level.levelComplete === true) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            new Game(this.ctx, this.canvas, this.levels[this.levelNum]).draw();


        } else {
            this.requestID[1] = requestAnimationFrame(this.draw);
        }
        if (this.level.gameOver === true) {
            let dead = new Image();
            dead.src = '../assets/images/Dead.png';
            this.ctx.drawImage(dead, this.player.x, this.player.y, this.player.width, this.player.height);
            var playerDeathScene= () => {
                this.player.y -= 7;
                this.player.controller.up = true;
                this.player.controller.left = false;
                this.player.controller.right = false;
            };
            setTimeout(playerDeathScene, 600);
            setTimeout(this.gameOver,1280);
        }
    }

    gameOver(){
        cancelAnimationFrame(this.requestID[1]);
        const drawReset = () => {
            let image = new Image();
            image.src = "../assets/images/YouLose.png";
            this.ctx.drawImage(image, 0,0);
        };
        setTimeout(drawReset, 1000);
    }
}


export default Game;