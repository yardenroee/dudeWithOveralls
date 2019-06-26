import Animation from './animation';
const SPRITE_SIZE = 16;
class Player {
    constructor(x,y, ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.y_velocity = 0;
        this.height = 30;
        this.width = 30;
        this.sprite_sheet = {
            frame_sets: [[0],[1,2,3],[4],[5,6,7],[8], [9]], // [0] standing facing right, [1,2,3] right movement, [4] standing facing left, [5,6,7] moving left
            image: new Image (),
        }; 
        this.animation = new Animation (); 
        this.jumping = true;
        this.isColliding = false;
        this.updatePos = this.updatePos.bind(this);
        this.onGround = false;
        this.dead = false;
        this.controller = {
            left: false,
            right: false,
            up: false,
            
            keyListener: (e) => {
                var key_state = (e.type == "keydown") ? true : false;
                switch (e.keyCode) {
                    case 37: //left arrow key
                        this.controller.left = key_state;
                        break;
                    case 39: //right arrow key
                        this.controller.right = key_state;
                        break;
                    case 38: //up arrow key
                        this.controller.up = key_state;
                        break;
                }
            },
        };
        document.addEventListener("keydown", this.controller.keyListener);
        document.addEventListener("keyup", this.controller.keyListener);
    }

    drawPlayer() {
        let sprite = this.sprite_sheet.image
        sprite.src = "./lib/assets/images/SpriteSheet.png";
        if (this.controller.right) {
            this.animation.change(this.sprite_sheet.frame_sets[1], 8);
        }

        if (this.controller.left) {
            this.animation.change(this.sprite_sheet.frame_sets[3], 8)
        }

        if (!this.controller.left && !this.controller.right && !this.controller.up) {
            if (!this.controller.right) {
                this.animation.change(this.sprite_sheet.frame_sets[2], 8)
            }
            if (!this.controller.left) {
                this.animation.change(this.sprite_sheet.frame_sets[0], 8);
            }
        }
        
        if (this.jumping === true){
            this.animation.change(this.sprite_sheet.frame_sets[4], 8)
        }

        if (this.jumping && this.controller.left) {
            this.animation.change(this.sprite_sheet.frame_sets[5], 8)
        }

        this.ctx.drawImage(sprite, this.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(this.x), Math.floor(this.y), this.height, this.width);
    }

    updatePos() {
        if(this.controller.left && this.x > 0) {
            this.x -= 2.2;
            this.onGround = true;
            this.facingLeft = true;
            this.facingRight = false;
        }
        if(this.controller.right && this.x < this.canvas.width-16) {
            this.x += 2.2;
            this.onGround = true;
            this.facingRight = true;
            this.facingLeft = false;
        }
        if (this.controller.up && !this.jumping) {
            this.controller.up = false
            this.y_velocity -= 20;
            this.jumping = true;
            this.onGround = false;
            if (this.jumping && this.isColliding) {
                this.y_velocity -= 15;
                this.jumping = true;
                this.onGround = false;
            }
        } 

        this.y_velocity += 1.5;
        this.y += this.y_velocity;
        this.y_velocity *= 0.88;
        this.isColliding = false;
        this.onGround = true;

        if (this.y > this.canvas.height-159 -30) {
            this.jumping = false;
            this.y = this.canvas.height -159 -15;
            this.y_velocity = 0;
            this.onGround = true;
        }

        this.animation.update();

    }
}
export default Player;