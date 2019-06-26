import Animation from './animation'
const SPRITE_HEIGHT = 23;
const SPRITE_WIDTH = 20;
class Plant {
    constructor(x,y,ctx, canvas) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = canvas;
        this.height = 32;
        this.width = 32;
        this.sprite_sheet = {
            frame_sets: [[0,1]], // 0 open 1 closed
            image: new Image(),
        };
        this.animation = new Animation(); 
    }

    drawPlant() {
        let sprite = this.sprite_sheet.image;
        sprite.src = '../assets/images/PlantSprite.png';
        this.animation.change(this.sprite_sheet.frame_sets[0],15);
        this.ctx.drawImage(sprite, this.animation.frame * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, Math.floor(this.x), Math.floor(this.y), this.height, this.width);
        this.animation.update();
    }
}

export default Plant;