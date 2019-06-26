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
eval("__webpack_require__.r(__webpack_exports__);\nclass Animation {\n    constructor(frame_set, delay){\n        this.count = 0;\n        this.delay = delay;\n        this.frame = 0;\n        this.frame_index = 0;\n        this.frame_set = frame_set;\n    }\n\n    change(frame_set, delay = 15) {\n        if (this.frame_set !== frame_set) {\n            this.count = 0;\n            this.delay = delay;\n            this.frame_index = 0;\n            this.frame_set = frame_set;\n            this.frame = this.frame_set[this.frame_index];\n        }\n    }\n\n    update() {\n        this.count ++;\n        if (this.count >= this.delay) {\n            this.count = 0;\n            this.frame_index = (this.frame_index === this.frame_set.length -1) ? 0 : this.frame_index + 1;\n            this.frame = this.frame_set[this.frame_index];\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animation);\n\n//# sourceURL=webpack:///./lib/animation.js?");

/***/ }),

/***/ "./lib/coin.js":
/*!*********************!*\
  !*** ./lib/coin.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Coin {\n    constructor(x,y,ctx,canvas) {\n        this.x = x;\n        this.y = y;\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.height = 16;\n        this.width = 16;\n    }\n\n    drawCoin() {\n        let image = new Image();\n        image.src = \"/Users/yardennegri/Desktop/dude_with_overalls/assets/images/Coin.png\";\n        this.ctx.drawImage(\n            image,\n            this.x, this.y,\n            this.width, this.height\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coin);\n\n//# sourceURL=webpack:///./lib/coin.js?");

/***/ }),

/***/ "./lib/dwo.js":
/*!********************!*\
  !*** ./lib/dwo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./lib/animation.js\");\n\nconst SPRITE_SIZE = 16;\nclass Player {\n    constructor(x,y, ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.x = x;\n        this.y = y;\n        this.y_velocity = 0;\n        this.height = 30;\n        this.width = 30;\n        this.sprite_sheet = {\n            frame_sets: [[0],[1,2,3],[4],[5,6,7],[8], [9]], // [0] standing facing right, [1,2,3] right movement, [4] standing facing left, [5,6,7] moving left\n            image: new Image (),\n        }; \n        this.animation = new _animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"] (); \n        this.jumping = true;\n        this.isColliding = false;\n        this.updatePos = this.updatePos.bind(this);\n        this.onGround = false;\n        this.dead = false;\n        this.controller = {\n            left: false,\n            right: false,\n            up: false,\n            \n            keyListener: (e) => {\n                var key_state = (e.type == \"keydown\") ? true : false;\n                switch (e.keyCode) {\n                    case 37: //left arrow key\n                        this.controller.left = key_state;\n                        break;\n                    case 39: //right arrow key\n                        this.controller.right = key_state;\n                        break;\n                    case 38: //up arrow key\n                        this.controller.up = key_state;\n                        break;\n                }\n            },\n        };\n        document.addEventListener(\"keydown\", this.controller.keyListener);\n        document.addEventListener(\"keyup\", this.controller.keyListener);\n    }\n\n    drawPlayer() {\n        let sprite = this.sprite_sheet.image\n        sprite.src = \"/Users/yardennegri/Desktop/dude_with_overalls/assets/images/SpriteSheet.png\"\n        if (this.controller.right) {\n            this.animation.change(this.sprite_sheet.frame_sets[1], 8);\n        }\n\n        if (this.controller.left) {\n            this.animation.change(this.sprite_sheet.frame_sets[3], 8)\n        }\n\n        if (!this.controller.left && !this.controller.right && !this.controller.up) {\n            if (!this.controller.right) {\n                this.animation.change(this.sprite_sheet.frame_sets[2], 8)\n            }\n            if (!this.controller.left) {\n                this.animation.change(this.sprite_sheet.frame_sets[0], 8);\n            }\n        }\n        \n        if (this.jumping === true){\n            this.animation.change(this.sprite_sheet.frame_sets[4], 8)\n        }\n\n        if (this.jumping && this.controller.left) {\n            this.animation.change(this.sprite_sheet.frame_sets[5], 8)\n        }\n\n        this.ctx.drawImage(sprite, this.animation.frame * SPRITE_SIZE, 0, SPRITE_SIZE, SPRITE_SIZE, Math.floor(this.x), Math.floor(this.y), this.height, this.width);\n    }\n\n    updatePos() {\n        if(this.controller.left && this.x > 0) {\n            this.x -= 2.2;\n            this.onGround = true;\n            this.facingLeft = true;\n            this.facingRight = false;\n        }\n        if(this.controller.right && this.x < this.canvas.width-16) {\n            this.x += 2.2;\n            this.onGround = true;\n            this.facingRight = true;\n            this.facingLeft = false;\n        }\n        if (this.controller.up && !this.jumping) {\n            this.controller.up = false\n            this.y_velocity -= 20;\n            this.jumping = true;\n            this.onGround = false;\n            if (this.jumping && this.isColliding) {\n                this.y_velocity -= 15;\n                this.jumping = true;\n                this.onGround = false;\n            }\n        } \n\n        this.y_velocity += 1.5;\n        this.y += this.y_velocity;\n        this.y_velocity *= 0.88;\n        this.isColliding = false;\n        this.onGround = true;\n\n        if (this.y > this.canvas.height-159 -30) {\n            this.jumping = false;\n            this.y = this.canvas.height -159 -15;\n            this.y_velocity = 0;\n            this.onGround = true;\n        }\n\n        this.animation.update();\n\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./lib/dwo.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./lib/levels.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./lib/level.js\");\n\n\nclass Game {\n    constructor(ctx, canvas, level) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, level); // levels array at each succession of level change this.level\n        this.levels = [_levels__WEBPACK_IMPORTED_MODULE_0__[\"level1\"], _levels__WEBPACK_IMPORTED_MODULE_0__[\"level2\"], _levels__WEBPACK_IMPORTED_MODULE_0__[\"level3\"]];\n        this.levelNum = this.level.currentLevel;\n        this.player = this.level.player;\n        this.draw = this.draw.bind(this);\n        this.requestID = {};\n        this.gameOver = this.gameOver.bind(this);\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.player.updatePos();\n        this.level.detectCollision();\n        this.player.drawPlayer();\n        this.level.drawLevel();\n        if (this.level.levelComplete === true) {\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            new Game(this.ctx, this.canvas, this.levels[this.levelNum]).draw();\n\n\n        } else {\n            this.requestID[1] = requestAnimationFrame(this.draw);\n        }\n        if (this.level.gameOver === true) {\n            let dead = new Image();\n            dead.src = '/Users/yardennegri/Desktop/dude_with_overalls/assets/images/Dead.png';\n            this.ctx.drawImage(dead, this.player.x, this.player.y, this.player.width, this.player.height);\n            var playerDeathScene= () => {\n                this.player.y -= 7;\n                this.player.controller.up = true;\n                this.player.controller.left = false;\n                this.player.controller.right = false;\n            };\n            setTimeout(playerDeathScene, 600);\n            setTimeout(this.gameOver,1280);\n        }\n    }\n\n    gameOver(){\n        cancelAnimationFrame(this.requestID[1]);\n        const drawReset = () => {\n            let image = new Image();\n            image.src = \"/Users/yardennegri/Desktop/dude_with_overalls/assets/images/YouLose.png\";\n            this.ctx.drawImage(image, 0,0);\n        };\n        setTimeout(drawReset, 1000);\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dwo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dwo */ \"./lib/dwo.js\");\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile */ \"./lib/tile.js\");\n/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin */ \"./lib/coin.js\");\n/* harmony import */ var _pole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pole */ \"./lib/pole.js\");\n/* harmony import */ var _plant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plant */ \"./lib/plant.js\");\n\n\n\n\n\nclass Level {\n    constructor(ctx, canvas, level) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.level = level\n        this.player = new _dwo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](85, 0, ctx, canvas); // each level should have a player key that initializes the player at a specific position\n        this.persistTiles = this.persistTiles.bind(this);\n        this.tiles = this.persistTiles();\n        this.persistCoins = this.persistCoins.bind(this);\n        this.coins = this.persistCoins();\n        this.coinMax = this.persistCoins();\n        this.persistPlants = this.persistPlants.bind(this);\n        this.plants = this.persistPlants();\n        this.coinCount = 0;\n        this.pole = new _pole__WEBPACK_IMPORTED_MODULE_3__[\"default\"] (level.poleX, level.poleY, this.ctx, this.canvas);\n        this.levelComplete = false;\n        this.gameOver = false;\n        this.currentLevel = level.levelNum;\n    }\n    persistTiles() {\n        let level = this.level;\n        let tiles = [];\n        for (let i = 0; i < level.tilesX.length; i++) {\n            const x = level.tilesX[i];\n            const y = level.tilesY[i];\n            let tile = new _tile__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, this.canvas.height - y, this.ctx, this.canvas);\n            tiles.push(tile);\n        }\n        return tiles;\n    }\n    persistCoins(){\n        let level = this.level;\n        let coins = [];\n        for(let i = 0; i < level.coinsX.length; i++) {\n            const x = level.coinsX[i];\n            const y = level.coinsY[i];\n            let coin = new _coin__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x, this.canvas.height - y, this.ctx, this.canvas);\n            coins.push(coin);\n        }\n        return coins;\n    }\n    persistPlants() {\n        let level = this.level;\n        let plants = [];\n        for (let i = 0; i < level.plantsX.length; i++) {\n            const x = level.plantsX[i];\n            const y = level.plantsY[i];\n            let plant = new _plant__WEBPACK_IMPORTED_MODULE_4__[\"default\"](x, this.canvas.height - y, this.ctx, this.canvas);\n            plants.push(plant);\n        }\n        return plants;\n    }\n    drawLevel() {\n        for (let i = 0; i < this.tiles.length; i++) {\n            let tile = this.tiles[i];\n            tile.drawTile();\n        }\n        for(let i = 0; i< this.coins.length; i++) {\n            let coin = this.coins[i];\n            coin.drawCoin();\n        }\n\n        for(let i = 0; i < this.plants.length; i++) {\n            let plant = this.plants[i];\n            plant.drawPlant();\n        }\n        this.pole.drawPole();\n    }\n\n    detectCollision() {\n        const collidingTiles = [];\n        const collidingCoins = [];\n        for (let i = 0; i < this.tiles.length; i++) {\n            const tile = this.tiles[i];\n            let pastTileRight = (this.player.x > (tile.x + tile.width));\n            let pastTileLeft = ((this.player.x + this.player.width) < tile.x);\n            let pastTileBottom = ((this.player.y > tile.y + tile.height));\n            let pastTileTop = (this.player.y + this.player.height < tile.y);\n            if (!(pastTileLeft || pastTileRight) && !(pastTileTop || pastTileBottom)) {\n                collidingTiles.push(tile);\n\n                this.handleTileCollision(this.player, collidingTiles);\n            }\n        }\n\n        for (let i = 0; i < this.coins.length; i++) {\n            const coin = this.coins[i];\n            let pastCoinRight = (this.player.x > (coin.x + coin.width));\n            let pastCoinLeft = ((this.player.x + this.player.width) < coin.x);\n            let pastCoinBottom = ((this.player.y > coin.y + coin.height));\n            let pastCoinTop = (this.player.y + this.player.height < coin.y);\n            if (!(pastCoinLeft || pastCoinRight) && !(pastCoinTop || pastCoinBottom)) {\n                collidingCoins.push(coin);\n\n                this.handleCoinCollision(this.player, collidingCoins);\n            }\n        }\n\n        for (let i = 0; i < this.plants.length; i++) {\n            const plant = this.plants[i];\n            let pastPlantRight = (this.player.x > (plant.x + plant.width));\n            let pastPlantLeft = ((this.player.x + this.player.width) < plant.x);\n            let pastPlantBottom = ((this.player.y > plant.y + plant.height));\n            let pastPlantTop = (this.player.y + this.player.height < plant.y);\n            if (!(pastPlantLeft || pastPlantRight) && !(pastPlantTop || pastPlantBottom)) {\n                this.handlePlantCollision();\n            }\n        }\n        if(this.pole) {\n            let pole = this.pole;\n            let pastPoleRight = (this.player.x > (pole.x + pole.width));\n            let pastPoleLeft = ((this.player.x + this.player.width) < pole.x);\n            let pastPoleBottom = ((this.player.y > pole.y + pole.height));\n            let pastPoleTop = (this.player.y + this.player.height < pole.y);\n            if (!(pastPoleLeft || pastPoleRight) && !(pastPoleTop || pastPoleBottom)) {\n                this.handlePoleCollision();\n            }\n        }\n    }\n\n    handlePoleCollision() {\n        if(this.pole.active === true) {\n            this.levelComplete = true;\n        }\n    }\n\n    handleCoinCollision(player, collidingCoins) {\n        collidingCoins.forEach(coin => {\n            this.coins.splice(this.coins.indexOf(coin), 1);\n            this.coinCount += 1;\n            if(this.coinCount == this.coinMax.length) {\n                this.pole.active = true;\n            }\n        })\n    }\n    handlePlantCollision() {\n        this.player.dead = true\n        this.gameOver = true;\n    }\n\n    handleTileCollision(player, collidingTiles) {\n        const xColliders = [];\n        const yColliders = [];\n        collidingTiles.forEach(tile => {\n            if ((player.x + player.width >= tile.x && player.x + player.width <= tile.x + tile.width) \n                && (tile.y < player.y && player.y + player.height <= tile.y + tile.height)) {\n                xColliders.push(tile);\n                //player right hand collision\n            } else if (player.x <= tile.x + tile.width && player.x + player.width >= tile.x\n                && (tile.y < player.y && player.y + player.height <= tile.y + tile.height)){\n                xColliders.push(tile);\n                //player left hand collision\n            } else if (player.y + player.height >= tile.y && player.y + player.height <= tile.y + tile.height) {\n                yColliders.push(tile);\n                //player top collision \n            } else if (player.y + player.height >= tile.y + tile.height && player.y + player.height >= tile.y + tile.height) {\n                yColliders.push(tile);\n                //player bottom collision\n            }\n        });\n        xColliders.forEach(tile => {\n            this.handleXCollision(player, tile);\n        });\n\n        yColliders.forEach(tile => {\n            this.handleYCollision(player, tile);\n        });\n    }\n\n    handleXCollision(player, tile) {\n        if (player.x > tile.x - player.width && player.x + player.width <= tile.x + tile.width\n            && (tile.y < player.y && player.y <=tile.y+tile.height)) {\n            player.x = tile.x - player.width;\n            player.isColliding = true;\n            // right collision\n        } else if (player.x + player.width > tile.x + tile.width && ((tile.y < player.y && player.y <= tile.y + tile.height))) {\n            player.x = tile.x + tile.width;\n            player.isColliding = true;\n            //left collision\n        }\n\n    }\n\n    handleYCollision(player, tile) {\n        if (player.y + player.height >= tile.y && player.y + player.height <= tile.y + tile.height) {\n            player.y = tile.y - player.height;\n            player.jumping = false;\n            player.isColliding = true;\n            //top collision\n        } else if (player.y + player.height >= tile.y + tile.height && player.y + player.height >= tile.y + tile.height) {\n            player.y = tile.y + tile.height;\n            player.isColliding = true;\n            // bottom collision\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n\n//# sourceURL=webpack:///./lib/level.js?");

/***/ }),

/***/ "./lib/levels.js":
/*!***********************!*\
  !*** ./lib/levels.js ***!
  \***********************/
/*! exports provided: level1, level2, level3, level4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level2\", function() { return level2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level3\", function() { return level3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level4\", function() { return level4; });\nconst level1 = {\n    levelNum: 1,\n    tilesX: [\n        280, //1\n        312, //2\n        344, //3\n        312, //4\n        344, //5\n        344, //6\n        394 +50, // 50px gap //7\n        394 +50, //8 \n        394 +50, //9\n        426 +50, //10\n        426 +50, //11\n        458 +50, //12\n        658 +50, //13\n        708 +50, //14\n        760 +50, //15\n        812 +50, //16\n    ],\n    tilesY: [\n        159+16, // base is 159, 16 is half of the tile //1\n        159+16, //2\n        159+16, //3\n        191+16, //4\n        191+16, //5\n        223+16, //6\n        159+16, //7 \n        191+16, //8\n        223+16, //9\n        191+16, //10\n        159+16, //11\n        159+16, //12\n        159+16, //13\n        226+16, //14\n        226+16, //15\n        226+16, //16\n    ],\n\n    coinsX: [\n        280 + 6, //1\n        312 + 6, //4\n        344 + 6, //6\n        394 + 50 + 8, //9\n        426 + 50 + 8, //10\n        458 + 50 + 8, //12\n        658 + 50 + 8, //13\n        708 + 50 + 8, //14\n        760 + 50 + 8, //15\n        812 + 50 + 8, //16\n    ],\n\n    coinsY: [\n        159 + 16 + 40, // base is 159, 16 is half of the tile //1\n        191 + 16 + 40, //4\n        223 + 16 + 40, //6\n        223 + 16 + 40, //9\n        191 + 16 + 40, //10\n        159 + 16 + 40, //12\n        159 + 16 + 40, //13\n        226 + 16 + 40, //14\n        226 + 16 + 40, //15\n        226 + 16 + 40, //16\n\n    ],\n    plantsX: [\n        346 +32,\n        410,\n    ],\n    plantsY: [\n        159 +16,\n        159 + 16,\n    ],\n\n    poleX: 1000,\n    poleY: 349,\n\n};\n\nconst level2 = {\n    levelNum:2,\n    tilesX: [\n            280,\n            312,\n            342,\n            372,\n            406,\n            438,\n            470,\n            502,\n            534,\n            566,\n            598,\n            630,\n            662,\n            694,\n            726,\n            758,\n            790,\n            822,\n            854,\n            886,\n            // bottom row\n\n            342,\n            372,\n            404,\n            // right orthog\n\n            372,\n            342,\n            312,\n            216,\n            // left orthog + top\n\n            502,\n            568,\n            632,\n            568,\n            // mid\n\n            696,\n            760,\n            824,\n            888,\n            946,\n            1010,\n            // second right orthog\n        ] ,\n    tilesY: [\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            208,\n            //bottom row\n            \n            280,\n            312,\n            343,\n            // right orthog\n            \n            430,\n            462,\n            494,\n            494,\n            // left orthog + top\n\n            342,\n            406,\n            342,\n            278,\n            // mid\n\n            376,\n            408,\n            440,\n            472,\n            472,\n            472,\n            // second right orthog + top\n\n        ] ,\n    coinsX: [\n        280 +8,\n        312 +8,\n        342 +8,\n        372 +8,\n        406 +8,\n        438 +8,\n        470 +8,\n        502 +8,\n        534 +8,\n        566 +8,\n        598 +8,\n        630 +8,\n        662 +8,\n        694 +8,\n        726 +8,\n        758 +8,\n        790 +8,\n        822 +8,\n        854 +8,\n        886 +8,\n        // bottom row\n\n        404 +8,\n        //right orthog\n\n        312 +8,\n        216 +8,\n        //left orthog\n\n        568 +8,\n        568 +8,\n        //mid\n\n        696 +8,\n        760 +8,\n        824 +8,\n        888 +8,\n        946 +8,\n        1010 +8,\n        // second right orthog\n    ] ,\n    coinsY: [\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        159 + 8,\n        //bottom row\n\n        343 + 30,\n        //right orthog\n\n        494 + 30,\n        494 + 30,\n        // left orthog\n\n        406 + 30,\n        278 + 30,\n        //mid\n\n        376 + 30,\n        408 + 30,\n        440 + 30,\n        472 + 30,\n        472 + 30,\n        472 + 30,\n        // second right orthog + top\n    ] ,\n\n    plantsX: [],\n    plantsY: [],\n    poleX: 1100,\n    poleY: 349,\n};\n\n\nconst level3 = {\n    levelNum:3,\n    tilesX: [\n        280,\n        280,\n        344,\n        //right orthog\n        \n        344,\n        280,\n        344,\n        // top left\n\n        654,\n        718,\n        //top right\n\n        408,\n        480,\n        544,\n        608,\n        672,\n        // top mid\n\n        408,\n        480,\n        590,\n        //mid\n\n        707,\n        734,\n        734,\n        766,\n        //down orthog\n\n        344,\n        344,\n        408,\n        408,\n        480,\n        480,\n        590,\n        590,\n        654,\n        654,\n        //ground\n    ],\n    tilesY: [\n        175,\n        208,\n        272,\n        //right orthog\n\n        400,\n        464,\n        528,\n        // top left\n        \n        400,\n        464,\n        //top right\n\n        592,\n        528,\n        592,\n        528,\n        592,\n        //top mid\n\n        336,\n        336,\n        336,\n        //mid\n\n        240,\n        208,\n        175,\n        208,\n        //down orthog\n\n        175,\n        207,\n        175,\n        207,\n        175,\n        207,\n        175,\n        207,\n        175,\n        207,\n        //ground\n    ],\n    coinsX: [\n        280 +8,\n        408 +8, \n        590 +8,\n        707 +8,\n\n        768 +8,\n        //ground\n\n        280 +8,\n        //top left\n\n        408 + 8,\n        480 + 8,\n        544 + 8,\n        608 + 8,\n        672 + 8,\n        //top mid\n        718 + 8,\n        //top right\n    ],\n    coinsY: [\n        208 +30,\n        336 +30,\n        336 +30,\n        240 +30,\n\n        159 +8,\n        //ground\n\n        464 + 30,\n        //top left\n\n        592 + 30,\n        528 + 30,\n        592 + 30,\n        528 + 30,\n        592 + 30,\n        //top mid\n\n        464 + 30,\n        //top right\n    ],\n    plantsX: [\n        280 + 32,\n        344 + 32,\n        408 + 36,\n        480 + 39,\n        512 + 39,\n        590 + 32,\n        654 + 40,\n    ],\n    plantsY: [\n        159 + 16,\n        159 + 16,\n        159 + 16,\n        159 + 16,\n        159 + 16,\n        159 + 16,\n        159 + 16,\n        159 + 16,\n    ],\n    poleX: 1100,\n    poleY: 349,\n};\n\n\n\nconst level4 = {\n    levelNum: 4,\n    tilesX: [\n        342,\n        372,\n        404,\n        //right orthog\n        \n        344,\n        280,\n        //left\n    ],\n    tilesY: [\n        280,\n        312,\n        343,\n        //right orthog\n\n        175,\n        208,\n        //left\n    ],\n    coinsX: [\n        404 +8,\n    ],\n    coinsY: [\n        343 +30,\n    ],\n    plantsX: [\n        378,\n        410,\n        442,\n        474,\n        506,\n        538,\n        570,\n        602,\n        634,\n        666,\n        698,\n        730,\n        762,\n    ],\n    plantsY: [\n        159 + 16,\n        159 + 16, \n        159 + 16,\n        159 + 16, \n        159 + 16,\n        159 + 16, \n        159 + 16,\n        159 + 16, \n        159 + 16,\n        159 + 16, \n        159 + 16,\n        159 + 16, \n        159 + 16,\n    ],\n    poleX:  800,\n    poleY: 349,\n}\n\n\n\n//LEVEL TEMPLATE\n\n// const level = {\n//     tilesX: [\n\n//     ],\n//     tilesY: [\n\n//     ],\n//     coinsX: [\n\n//     ],\n//     coinsY: [\n\n//     ],\n//     plantsX: [\n\n//     ],\n//     plantsY: [\n\n//     ],\n//     poleX: ,\n//     poleY: 349,\n// }\n\n//# sourceURL=webpack:///./lib/levels.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ \"./lib/levels.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\n\nconst canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nlet splash = true;\n\nif (splash) {\n    let image = new Image();\n    image.src = \"/Users/yardennegri/Desktop/dude_with_overalls/assets/images/SplashScreen.png\";\n    image.onload = ()=>  {\n        ctx.drawImage(image,0,0);\n    }\n    document.addEventListener(\"keydown\", (e) => {\n        if(e.keyCode === 13) {\n            splash = false;\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            game();\n        }\n    });\n}\n\nconst game = () => {\n    const level1 = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas, _levels__WEBPACK_IMPORTED_MODULE_0__[\"level4\"]);\n    level1.draw();\n};\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/plant.js":
/*!**********************!*\
  !*** ./lib/plant.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ \"./lib/animation.js\");\n\nconst SPRITE_HEIGHT = 23;\nconst SPRITE_WIDTH = 20;\nclass Plant {\n    constructor(x,y,ctx, canvas) {\n        this.x = x;\n        this.y = y;\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.height = 32;\n        this.width = 32;\n        this.sprite_sheet = {\n            frame_sets: [[0,1]], // 0 open 1 closed\n            image: new Image(),\n        };\n        this.animation = new _animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); \n    }\n\n    drawPlant() {\n        let sprite = this.sprite_sheet.image;\n        sprite.src = '/Users/yardennegri/Desktop/dude_with_overalls/assets/images/PlantSprite.png';\n        this.animation.change(this.sprite_sheet.frame_sets[0],15);\n        this.ctx.drawImage(sprite, this.animation.frame * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, Math.floor(this.x), Math.floor(this.y), this.height, this.width);\n        this.animation.update();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plant);\n\n//# sourceURL=webpack:///./lib/plant.js?");

/***/ }),

/***/ "./lib/pole.js":
/*!*********************!*\
  !*** ./lib/pole.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pole {\n    constructor(x,y,ctx, canvas) {\n        this.x = x;\n        this.y = y;\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.active = false;\n        this.height = 160;\n        this.width = 30;\n    }\n\n    drawPole() {\n        let pole = new Image();\n        pole.src = \"/Users/yardennegri/Desktop/dude_with_overalls/assets/images/Pole.png\";\n        this.ctx.drawImage(\n            pole,\n            this.x, this.y,\n            this.width, this.height\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pole);\n\n//# sourceURL=webpack:///./lib/pole.js?");

/***/ }),

/***/ "./lib/tile.js":
/*!*********************!*\
  !*** ./lib/tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Tile {\n    constructor(x, y, ctx, canvas){\n        this.x = x;\n        this.y = y;\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.height = 32;\n        this.width = 32;\n        this.drawTile = this.drawTile.bind(this);\n    }\n\n    drawTile() {\n        let image = new Image();\n        image.src = '/Users/yardennegri/Desktop/dude_with_overalls/assets/images/Tile.png'\n        this.ctx.drawImage(\n            image,\n            this.x, this.y,\n            this.width, this.height\n        );\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n\n//# sourceURL=webpack:///./lib/tile.js?");

/***/ })

/******/ });