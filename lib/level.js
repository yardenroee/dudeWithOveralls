import Player from './dwo';
import Tile from './tile';
import Coin from './coin';
import Pole from './pole';
import Plant from './plant';
class Level {
    constructor(ctx, canvas, level) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.level = level
        this.player = new Player(85, 0, ctx, canvas); // each level should have a player key that initializes the player at a specific position
        this.persistTiles = this.persistTiles.bind(this);
        this.tiles = this.persistTiles();
        this.persistCoins = this.persistCoins.bind(this);
        this.coins = this.persistCoins();
        this.coinMax = this.persistCoins();
        this.persistPlants = this.persistPlants.bind(this);
        this.plants = this.persistPlants();
        this.coinCount = 0;
        this.pole = new Pole (level.poleX, level.poleY, this.ctx, this.canvas);
        this.levelComplete = false;
        this.gameOver = false;
        this.currentLevel = level.levelNum;
    }
    persistTiles() {
        let level = this.level;
        let tiles = [];
        for (let i = 0; i < level.tilesX.length; i++) {
            const x = level.tilesX[i];
            const y = level.tilesY[i];
            let tile = new Tile(x, this.canvas.height - y, this.ctx, this.canvas);
            tiles.push(tile);
        }
        return tiles;
    }
    persistCoins(){
        let level = this.level;
        let coins = [];
        for(let i = 0; i < level.coinsX.length; i++) {
            const x = level.coinsX[i];
            const y = level.coinsY[i];
            let coin = new Coin(x, this.canvas.height - y, this.ctx, this.canvas);
            coins.push(coin);
        }
        return coins;
    }
    persistPlants() {
        let level = this.level;
        let plants = [];
        for (let i = 0; i < level.plantsX.length; i++) {
            const x = level.plantsX[i];
            const y = level.plantsY[i];
            let plant = new Plant(x, this.canvas.height - y, this.ctx, this.canvas);
            plants.push(plant);
        }
        return plants;
    }
    drawLevel() {
        for (let i = 0; i < this.tiles.length; i++) {
            let tile = this.tiles[i];
            tile.drawTile();
        }
        for(let i = 0; i< this.coins.length; i++) {
            let coin = this.coins[i];
            coin.drawCoin();
        }

        for(let i = 0; i < this.plants.length; i++) {
            let plant = this.plants[i];
            plant.drawPlant();
        }
        this.pole.drawPole();
    }

    detectCollision() {
        const collidingTiles = [];
        const collidingCoins = [];
        for (let i = 0; i < this.tiles.length; i++) {
            const tile = this.tiles[i];
            let pastTileRight = (this.player.x > (tile.x + tile.width));
            let pastTileLeft = ((this.player.x + this.player.width) < tile.x);
            let pastTileBottom = ((this.player.y > tile.y + tile.height));
            let pastTileTop = (this.player.y + this.player.height < tile.y);
            if (!(pastTileLeft || pastTileRight) && !(pastTileTop || pastTileBottom)) {
                collidingTiles.push(tile);

                this.handleTileCollision(this.player, collidingTiles);
            }
        }

        for (let i = 0; i < this.coins.length; i++) {
            const coin = this.coins[i];
            let pastCoinRight = (this.player.x > (coin.x + coin.width));
            let pastCoinLeft = ((this.player.x + this.player.width) < coin.x);
            let pastCoinBottom = ((this.player.y > coin.y + coin.height));
            let pastCoinTop = (this.player.y + this.player.height < coin.y);
            if (!(pastCoinLeft || pastCoinRight) && !(pastCoinTop || pastCoinBottom)) {
                collidingCoins.push(coin);

                this.handleCoinCollision(this.player, collidingCoins);
            }
        }

        for (let i = 0; i < this.plants.length; i++) {
            const plant = this.plants[i];
            let pastPlantRight = (this.player.x > (plant.x + plant.width));
            let pastPlantLeft = ((this.player.x + this.player.width) < plant.x);
            let pastPlantBottom = ((this.player.y > plant.y + plant.height));
            let pastPlantTop = (this.player.y + this.player.height < plant.y);
            if (!(pastPlantLeft || pastPlantRight) && !(pastPlantTop || pastPlantBottom)) {
                this.handlePlantCollision();
            }
        }
        if(this.pole) {
            let pole = this.pole;
            let pastPoleRight = (this.player.x > (pole.x + pole.width));
            let pastPoleLeft = ((this.player.x + this.player.width) < pole.x);
            let pastPoleBottom = ((this.player.y > pole.y + pole.height));
            let pastPoleTop = (this.player.y + this.player.height < pole.y);
            if (!(pastPoleLeft || pastPoleRight) && !(pastPoleTop || pastPoleBottom)) {
                this.handlePoleCollision();
            }
        }
    }

    handlePoleCollision() {
        if(this.pole.active === true) {
            this.levelComplete = true;
        }
    }

    handleCoinCollision(player, collidingCoins) {
        collidingCoins.forEach(coin => {
            this.coins.splice(this.coins.indexOf(coin), 1);
            this.coinCount += 1;
            if(this.coinCount == this.coinMax.length) {
                this.pole.active = true;
            }
        })
    }
    handlePlantCollision() {
        this.player.dead = true
        this.gameOver = true;
    }

    handleTileCollision(player, collidingTiles) {
        const xColliders = [];
        const yColliders = [];
        collidingTiles.forEach(tile => {
            if ((player.x + player.width >= tile.x && player.x + player.width <= tile.x + tile.width) 
                && (tile.y < player.y && player.y + player.height <= tile.y + tile.height)) {
                xColliders.push(tile);
                //player right hand collision
            } else if (player.x <= tile.x + tile.width && player.x + player.width >= tile.x
                && (tile.y < player.y && player.y + player.height <= tile.y + tile.height)){
                xColliders.push(tile);
                //player left hand collision
            } else if (player.y + player.height >= tile.y && player.y + player.height <= tile.y + tile.height) {
                yColliders.push(tile);
                //player top collision 
            } else if (player.y + player.height >= tile.y + tile.height && player.y + player.height >= tile.y + tile.height) {
                yColliders.push(tile);
                //player bottom collision
            }
        });
        xColliders.forEach(tile => {
            this.handleXCollision(player, tile);
        });

        yColliders.forEach(tile => {
            this.handleYCollision(player, tile);
        });
    }

    handleXCollision(player, tile) {
        if (player.x > tile.x - player.width && player.x + player.width <= tile.x + tile.width
            && (tile.y < player.y && player.y <=tile.y+tile.height)) {
            player.x = tile.x - player.width;
            player.isColliding = true;
            // right collision
        } else if (player.x + player.width > tile.x + tile.width && ((tile.y < player.y && player.y <= tile.y + tile.height))) {
            player.x = tile.x + tile.width;
            player.isColliding = true;
            //left collision
        }

    }

    handleYCollision(player, tile) {
        if (player.y + player.height >= tile.y && player.y + player.height <= tile.y + tile.height) {
            player.y = tile.y - player.height;
            player.jumping = false;
            player.isColliding = true;
            //top collision
        } else if (player.y + player.height >= tile.y + tile.height && player.y + player.height >= tile.y + tile.height) {
            player.y = tile.y + tile.height;
            player.isColliding = true;
            // bottom collision
        }
    }
}

export default Level;
