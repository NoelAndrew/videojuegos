
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {
	
	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice  background and a loading progress bar
		this.bg = this.add.sprite(0, 0, 'bg');
		this.background = this.add.sprite(230, 295, 'preloaderBackground');
		this.preloadBar = this.add.sprite(230, 295, 'preloaderBar');
		this.usualsuspectsLogo = this.add.sprite(230, 139, 'usualsuspectsLogo');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.

		// Main Menu Assets
		this.load.spritesheet('playButton', 'assets/images/play_button.png', 287, 57);
		this.load.spritesheet('backButton', 'assets/images/back_button.png', 92, 43);

	    this.load.image('bg_dark', 'assets/images/bg_dark.png');
	    this.load.image('interiorTitle', 'assets/images/interior_title.png');

	    this.load.image('base', 'assets/images/base.png');
	

    	this.load.image('piece1', 'assets/images/piece1.png');
    	this.load.image('piece2', 'assets/images/piece2.png');
    	this.load.image('piece3', 'assets/images/piece3.png');
    	this.load.image('piece4', 'assets/images/piece4.png');
    	this.load.image('piece5', 'assets/images/piece5.png');
    	this.load.image('piece6', 'assets/images/piece6.png');
    	this.load.image('piece7', 'assets/images/piece7.png');
    	this.load.image('piece8', 'assets/images/piece8.png');
    	this.load.image('piece9', 'assets/images/piece9.png');

		this.load.image('piece10', 'assets/images/piece10.png');
    	this.load.image('piece11', 'assets/images/piece11.png');
		this.load.image('piece12', 'assets/images/piece12.png');
    	this.load.image('piece13', 'assets/images/piece13.png');
		this.load.image('piece14', 'assets/images/piece14.png');
		this.load.image('piece15', 'assets/images/piece15.png');
		this.load.audio("musica", "assets/images/opening.mp3");
		
    	this.load.image('basecolor', 'assets/images/basecolor.png');
		this.load.image('welldone', 'assets/images/welldone.png');
		

    	this.load.spritesheet('jigsawWin_anim', 'assets/images/jigsawWin_anim.png', 292, 292);
    	this.load.spritesheet('jigsawMenu_anim', 'assets/images/jigsawMenu_anim.png', 375, 376);


	},

	create: function () {

		//	Once the load has finished we disable the crop
		this.preloadBar.cropEnabled = false;
		this.state.start('MainMenu');
	

	},

	update: function () {

	}

};
