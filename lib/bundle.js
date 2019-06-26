/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/animation.js":
/*!**************************!*\
  !*** ./lib/animation.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Animation {
    constructor(frame_set, delay){
        this.count = 0;
        this.delay = delay;
        this.frame = 0;
        this.frame_index = 0;
        this.frame_set = frame_set;
    }

    change(frame_set, delay = 15) {
        if (this.frame_set !== frame_set) {
            this.count = 0;
            this.delay = delay;
            this.frame_index = 0;
            this.frame_set = frame_set;
            this.frame = this.frame_set[this.frame_index];
        }
    }

    update() {
        this.count ++;
        if (this.count >= this.delay) {
            this.count = 0;
            this.frame_index = (this.frame_index === this.frame_set.length -1) ? 0 : this.frame_index + 1;
            this.frame = this.frame_set[this.frame_index];
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./lib/coin.js":
/*!*********************!*\
  !*** ./lib/coin.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Coin);

/***/ }),

/***/ "./lib/dwo.js":
/*!********************!*\
  !*** ./lib/dwo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./lib/animation.js");

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
        this.animation = new _animation__WEBPACK_IMPORTED_MODULE_0__["default"] (); 
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
/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ "./lib/levels.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./lib/level.js");


class Game {
    constructor(ctx, canvas, level) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.level = new _level__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas, level); // levels array at each succession of level change this.level
        this.levels = [_levels__WEBPACK_IMPORTED_MODULE_0__["level1"], _levels__WEBPACK_IMPORTED_MODULE_0__["level2"], _levels__WEBPACK_IMPORTED_MODULE_0__["level3"]];
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
            dead.src = './lib/assets/images/Dead.png';
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
            image.src = "./lib/assets/images/YouLose.png";
            this.ctx.drawImage(image, 0,0);
        };
        setTimeout(drawReset, 1000);
    }
}


/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dwo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dwo */ "./lib/dwo.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ "./lib/tile.js");
/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ "./lib/coin.js");
/* harmony import */ var _pole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pole */ "./lib/pole.js");
/* harmony import */ var _plant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plant */ "./lib/plant.js");





class Level {
    constructor(ctx, canvas, level) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.level = level
        this.player = new _dwo__WEBPACK_IMPORTED_MODULE_0__["default"](85, 0, ctx, canvas); // each level should have a player key that initializes the player at a specific position
        this.persistTiles = this.persistTiles.bind(this);
        this.tiles = this.persistTiles();
        this.persistCoins = this.persistCoins.bind(this);
        this.coins = this.persistCoins();
        this.coinMax = this.persistCoins();
        this.persistPlants = this.persistPlants.bind(this);
        this.plants = this.persistPlants();
        this.coinCount = 0;
        this.pole = new _pole__WEBPACK_IMPORTED_MODULE_3__["default"] (level.poleX, level.poleY, this.ctx, this.canvas);
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
            let tile = new _tile__WEBPACK_IMPORTED_MODULE_1__["default"](x, this.canvas.height - y, this.ctx, this.canvas);
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
            let coin = new _coin__WEBPACK_IMPORTED_MODULE_2__["default"](x, this.canvas.height - y, this.ctx, this.canvas);
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
            let plant = new _plant__WEBPACK_IMPORTED_MODULE_4__["default"](x, this.canvas.height - y, this.ctx, this.canvas);
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

/* harmony default export */ __webpack_exports__["default"] = (Level);


/***/ }),

/***/ "./lib/levels.js":
/*!***********************!*\
  !*** ./lib/levels.js ***!
  \***********************/
/*! exports provided: level1, level2, level3, level4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level1", function() { return level1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level2", function() { return level2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level3", function() { return level3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level4", function() { return level4; });
const level1 = {
    levelNum: 1,
    tilesX: [
        280, //1
        312, //2
        344, //3
        312, //4
        344, //5
        344, //6
        394 +50, // 50px gap //7
        394 +50, //8 
        394 +50, //9
        426 +50, //10
        426 +50, //11
        458 +50, //12
        658 +50, //13
        708 +50, //14
        760 +50, //15
        812 +50, //16
    ],
    tilesY: [
        159+16, // base is 159, 16 is half of the tile //1
        159+16, //2
        159+16, //3
        191+16, //4
        191+16, //5
        223+16, //6
        159+16, //7 
        191+16, //8
        223+16, //9
        191+16, //10
        159+16, //11
        159+16, //12
        159+16, //13
        226+16, //14
        226+16, //15
        226+16, //16
    ],

    coinsX: [
        280 + 6, //1
        312 + 6, //4
        344 + 6, //6
        394 + 50 + 8, //9
        426 + 50 + 8, //10
        458 + 50 + 8, //12
        658 + 50 + 8, //13
        708 + 50 + 8, //14
        760 + 50 + 8, //15
        812 + 50 + 8, //16
    ],

    coinsY: [
        159 + 16 + 40, // base is 159, 16 is half of the tile //1
        191 + 16 + 40, //4
        223 + 16 + 40, //6
        223 + 16 + 40, //9
        191 + 16 + 40, //10
        159 + 16 + 40, //12
        159 + 16 + 40, //13
        226 + 16 + 40, //14
        226 + 16 + 40, //15
        226 + 16 + 40, //16

    ],
    plantsX: [
        346 +32,
        410,
    ],
    plantsY: [
        159 +16,
        159 + 16,
    ],

    poleX: 1000,
    poleY: 349,

};

const level2 = {
    levelNum:2,
    tilesX: [
            280,
            312,
            342,
            372,
            406,
            438,
            470,
            502,
            534,
            566,
            598,
            630,
            662,
            694,
            726,
            758,
            790,
            822,
            854,
            886,
            // bottom row

            342,
            372,
            404,
            // right orthog

            372,
            342,
            312,
            216,
            // left orthog + top

            502,
            568,
            632,
            568,
            // mid

            696,
            760,
            824,
            888,
            946,
            1010,
            // second right orthog
        ] ,
    tilesY: [
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            208,
            //bottom row
            
            280,
            312,
            343,
            // right orthog
            
            430,
            462,
            494,
            494,
            // left orthog + top

            342,
            406,
            342,
            278,
            // mid

            376,
            408,
            440,
            472,
            472,
            472,
            // second right orthog + top

        ] ,
    coinsX: [
        280 +8,
        312 +8,
        342 +8,
        372 +8,
        406 +8,
        438 +8,
        470 +8,
        502 +8,
        534 +8,
        566 +8,
        598 +8,
        630 +8,
        662 +8,
        694 +8,
        726 +8,
        758 +8,
        790 +8,
        822 +8,
        854 +8,
        886 +8,
        // bottom row

        404 +8,
        //right orthog

        312 +8,
        216 +8,
        //left orthog

        568 +8,
        568 +8,
        //mid

        696 +8,
        760 +8,
        824 +8,
        888 +8,
        946 +8,
        1010 +8,
        // second right orthog
    ] ,
    coinsY: [
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        159 + 8,
        //bottom row

        343 + 30,
        //right orthog

        494 + 30,
        494 + 30,
        // left orthog

        406 + 30,
        278 + 30,
        //mid

        376 + 30,
        408 + 30,
        440 + 30,
        472 + 30,
        472 + 30,
        472 + 30,
        // second right orthog + top
    ] ,

    plantsX: [],
    plantsY: [],
    poleX: 1100,
    poleY: 349,
};


const level3 = {
    levelNum:3,
    tilesX: [
        280,
        280,
        344,
        //right orthog
        
        344,
        280,
        344,
        // top left

        654,
        718,
        //top right

        408,
        480,
        544,
        608,
        672,
        // top mid

        408,
        480,
        590,
        //mid

        707,
        734,
        734,
        766,
        //down orthog

        344,
        344,
        408,
        408,
        480,
        480,
        590,
        590,
        654,
        654,
        //ground
    ],
    tilesY: [
        175,
        208,
        272,
        //right orthog

        400,
        464,
        528,
        // top left
        
        400,
        464,
        //top right

        592,
        528,
        592,
        528,
        592,
        //top mid

        336,
        336,
        336,
        //mid

        240,
        208,
        175,
        208,
        //down orthog

        175,
        207,
        175,
        207,
        175,
        207,
        175,
        207,
        175,
        207,
        //ground
    ],
    coinsX: [
        280 +8,
        408 +8, 
        590 +8,
        707 +8,

        768 +8,
        //ground

        280 +8,
        //top left

        408 + 8,
        480 + 8,
        544 + 8,
        608 + 8,
        672 + 8,
        //top mid
        718 + 8,
        //top right
    ],
    coinsY: [
        208 +30,
        336 +30,
        336 +30,
        240 +30,

        159 +8,
        //ground

        464 + 30,
        //top left

        592 + 30,
        528 + 30,
        592 + 30,
        528 + 30,
        592 + 30,
        //top mid

        464 + 30,
        //top right
    ],
    plantsX: [
        280 + 32,
        344 + 32,
        408 + 36,
        480 + 39,
        512 + 39,
        590 + 32,
        654 + 40,
    ],
    plantsY: [
        159 + 16,
        159 + 16,
        159 + 16,
        159 + 16,
        159 + 16,
        159 + 16,
        159 + 16,
        159 + 16,
    ],
    poleX: 1100,
    poleY: 349,
};



const level4 = {
    levelNum: 4,
    tilesX: [
        342,
        372,
        404,
        //right orthog
        
        344,
        280,
        //left
    ],
    tilesY: [
        280,
        312,
        343,
        //right orthog

        175,
        208,
        //left
    ],
    coinsX: [
        404 +8,
    ],
    coinsY: [
        343 +30,
    ],
    plantsX: [
        378,
        410,
        442,
        474,
        506,
        538,
        570,
        602,
        634,
        666,
        698,
        730,
        762,
    ],
    plantsY: [
        159 + 16,
        159 + 16, 
        159 + 16,
        159 + 16, 
        159 + 16,
        159 + 16, 
        159 + 16,
        159 + 16, 
        159 + 16,
        159 + 16, 
        159 + 16,
        159 + 16, 
        159 + 16,
    ],
    poleX:  800,
    poleY: 349,
}



//LEVEL TEMPLATE

// const level = {
//     tilesX: [

//     ],
//     tilesY: [

//     ],
//     coinsX: [

//     ],
//     coinsY: [

//     ],
//     plantsX: [

//     ],
//     plantsY: [

//     ],
//     poleX: ,
//     poleY: 349,
// }

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ "./lib/levels.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let splash = true;

if (splash) {
    let image = new Image();
    image.src = "./lib/assets/images/SplashScreen.png";
    image.onload = ()=>  {
        ctx.drawImage(image,0,0);
    }
    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 13) {
            splash = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game();
        }
    });
}

const game = () => {
    const level1 = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas, _levels__WEBPACK_IMPORTED_MODULE_0__["level1"]);
    level1.draw();
};

/***/ }),

/***/ "./lib/plant.js":
/*!**********************!*\
  !*** ./lib/plant.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./lib/animation.js");

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
        this.animation = new _animation__WEBPACK_IMPORTED_MODULE_0__["default"](); 
    }

    drawPlant() {
        let sprite = this.sprite_sheet.image;
        sprite.src = './lib/assets/images/PlantSprite.png';
        this.animation.change(this.sprite_sheet.frame_sets[0],15);
        this.ctx.drawImage(sprite, this.animation.frame * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, Math.floor(this.x), Math.floor(this.y), this.height, this.width);
        this.animation.update();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Plant);

/***/ }),

/***/ "./lib/pole.js":
/*!*********************!*\
  !*** ./lib/pole.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        pole.src = "./lib/assets/images/Pole.png";
        this.ctx.drawImage(
            pole,
            this.x, this.y,
            this.width, this.height
        );
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Pole);

/***/ }),

/***/ "./lib/tile.js":
/*!*********************!*\
  !*** ./lib/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Tile);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map