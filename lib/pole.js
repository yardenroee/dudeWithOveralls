class Pole {
    constructor(x,y,ctx, canvas) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = canvas;
        this.active = false;
        this.height = 160;
        this.width = 30;
    }

    drawPole() {
        let pole = new Image();
        pole.src = "../assets/images/Pole.png";
        this.ctx.drawImage(
            pole,
            this.x, this.y,
            this.width, this.height
        );
    }
}

export default Pole;