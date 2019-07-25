# Dude With Overalls
   ![alt text](https://github.com/yardenroee/yardenroee.github.io/blob/master/images/pic02.jpg)

## Overview

[Dude With Overalls](https://yardenroee.com/dudeWithOveralls/) was inspired by the game we all grew up on (and if you          personally didn't, I feel bad for you), Super Mario Land. A vanilla JavaScript platform game designed and written without      any API or game engines.  

## Technologies
  
   * JavaScript
   * HTML5 Canvas
   * Webpack 

## Clever things I did

   ### Tile Collision
   One of the greatest challenges of this project was understanding how to detect tile collision, and upon detection,            understanding how to handle it. Since this project was divided into classes with different responsibilities following OO      approach, having to handle the collision on the Level class was a must! I implemented a unique pattern for iterating          through the tiles of the entire level separating each tile based upon where the player intersects with it (either X-axis or    Y-axis) and handle each collision based upon where the player is located on the canvas.
   
   ![Imgur](https://i.imgur.com/Zw8pIwG.png)
   
   ### Sprite Animation
   I created an Animation class that has the capability to iterate through a sprite image based upon a set value of              milliseconds(15) and choose a specific segment of the sprite sheet at any given moment. The sprite sheet is divided into an    array with sets of images that are to change according to keydown events as well as the durarion of the event in              milliseconds.
   
   ![Imgur](https://i.imgur.com/x31aOsH.png)
   (Animation functionality)
   
   ![Imgur](https://i.imgur.com/WJLv9S1.png)
   (Drawing of animation)
