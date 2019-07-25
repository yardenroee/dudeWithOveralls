# Dude With Overalls

* Background and Overview
    * Inspired by the game we all grew up on (and if you personally didn't, I feel bad for you), Super Mario Land.
    * The game will aim to replicate the notorious game but written using JavaScript.
* Functionality and MVP Features
    * Create canvas with background image of Super Mario.
    * Create mini levels with cinder blocks, spikes, and steps
    * Create Mario (Dude With Overalls so I don't get sued) as a moving character
    * DWO can move right left and jump up using arrow keys and WAD keys.
    * Create coins as elements collected in order to be able to move to next stage
    * Make DWO be able to get to an end point in each level that (with all coins collected) will pass him onto next stage           (flagpole)
    * Spikes take DWO's life and reset current stage play is on.
 
 * Wireframe 
   * ![alt text](https://i.ibb.co/zbD0gx7/Screen-Shot-2019-06-11-at-4-08-47-PM.png)
* Architecture and Technologies
    * Vanilla JavaScript
        * Will provide the game with the foundational logic as well as any calculations that need to take place in order to             win/lose game
    * HTML5 Canvas
        * An HTML tool that enables the developer to render visual images that incorporate elements of mobility and                      functionality within the page
        * Will enable the developer to render and create a visual representation of all the moving parts of the game following          their implemented JavaScript logic as well as their DOM manipulation.
     * Webpack 
        * Modular Bundler for JavaScript
        * Webpack depackages dependencies specified in its config file and transforms them into modules that help developers             build functionality in their applications. Especially important when addressing variations from machine to machine             as it helps bridge the gaps that may not be visible but are functionally different under the hood.

 * Implementation Timeline
    * Day 1
      * Finish readme.md.
      * Learn how to use canvas as well as how to put it in html.
      * Try to finish the visual layout for the game.
    * Day 2
      * Render all of the visual components that are static in the game (steps, spikes, flagpole)
      * Get DWO to move left, right, and up. render different sprite when jumpin up.
      * Make coins necessary to pass level.
      * Make flagpole necessary to pass level.
    * Day 3
      * Create more stages!
      * Aim to be done by Friday, no but seriously because I keep shabbat and won't have a lot of time on friday lol! 
