class Tile {
    constructor(x, y, ctx, canvas){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
        this.height = 32;
        this.width = 32;
        this.drawTile = this.drawTile.bind(this);
    }

    drawTile() {
        let image = new Image();
        image.src = './lib/assets/images/Tile.png';
        this.ctx.drawImage(
            image,
            this.x, this.y,
            this.width, this.height
        );
    }
}

export default Tile;
