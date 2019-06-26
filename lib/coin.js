class Coin {
    constructor(x,y,ctx,canvas) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
        this.height = 16;
        this.width = 16;
    }

    drawCoin() {
        let image = new Image();
        image.src = "./lib/assets/images/Coin.png";
        this.ctx.drawImage(
            image,
            this.x, this.y,
            this.width, this.height
        );
    }
}

export default Coin;