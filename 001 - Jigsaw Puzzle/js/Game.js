
BasicGame.Game = function (game) {

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator


};

BasicGame.Game.prototype = {

	create: function () {

    

        this.piecesleft = 15;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        
        this.bg = this.add.sprite(0, 0, 'bg');
        this.interiorTitle = this.add.sprite(40, 8, 'interiorTitle');
        this.backButton = this.add.button(568, 19, 'backButton', this.backToMenu, this, 1, 0, 1);
        this.backButton.input.useHandCursor = true;
        this.bg_dark = this.add.sprite(0, 0, 'bg_dark');
        this.base = this.game.add.sprite(368, 121, 'base');

        this.musica = this.sound.add("musica");
        this.musica.play();
        this.piece1 = this.game.add.sprite(24, 269, 'piece1');
        this.piece2 = this.game.add.sprite(244, 149, 'piece2');
        this.piece3 = this.game.add.sprite(161, 115, 'piece3');
        this.piece4 = this.game.add.sprite(27, 104, 'piece4');
        this.piece5 = this.game.add.sprite(70, 161, 'piece5');
        this.piece6 = this.game.add.sprite(203, 291, 'piece6');
        this.piece7 = this.game.add.sprite(203, 201, 'piece7');
        this.piece8 = this.game.add.sprite(154, 249, 'piece8');
        this.piece9 = this.game.add.sprite(58, 331, 'piece9');
        this.piece10 = this.game.add.sprite(100, 350, 'piece10');
        this.piece11 = this.game.add.sprite(70, 150, 'piece11');
        this.piece12 = this.game.add.sprite(205, 300, 'piece12');
        this.piece13 = this.game.add.sprite(210, 250, 'piece13');
        this.piece14 = this.game.add.sprite(260, 150, 'piece14');
        this.piece15 = this.game.add.sprite(300, 130, 'piece15');
 


        this.piece1.finalPositionX = 368;
        this.piece1.finalPositionY = 121;

        this.piece2.finalPositionX = 465;
        this.piece2.finalPositionY = 121;

        this.piece3.finalPositionX = 562;
        this.piece3.finalPositionY = 121;

        this.piece4.finalPositionX = 368;
        this.piece4.finalPositionY = 198;

        this.piece5.finalPositionX = 465;
        this.piece5.finalPositionY = 198;

        this.piece6.finalPositionX = 562;
        this.piece6.finalPositionY = 198;

        this.piece7.finalPositionX = 368;
        this.piece7.finalPositionY = 275;

        this.piece8.finalPositionX = 465;
        this.piece8.finalPositionY = 275;

        this.piece9.finalPositionX = 562;
        this.piece9.finalPositionY = 275;

        this.piece10.finalPositionX = 368;
        this.piece10.finalPositionY = 352;

        this.piece11.finalPositionX = 465;
        this.piece11.finalPositionY = 352;

        this.piece12.finalPositionX = 562;
        this.piece12.finalPositionY = 352;

        this.piece13.finalPositionX = 368;
        this.piece13.finalPositionY = 429;

        this.piece14.finalPositionX = 465;
        this.piece14.finalPositionY = 429;

        this.piece15.finalPositionX = 562;
        this.piece15.finalPositionY = 429;

        for (var i = 1; i <= 15; i++) {

            this['piece' + i].originX = this['piece' + i].x;
            this['piece' + i].inputEnabled = true;
            this['piece' + i].input.enableDrag(false, true);
            this['piece' + i].events.onDragStop.add(this.pieceDragStop, this);

        };

	},


    // cuando paramos el drag
    pieceDragStop: function(item) {

        // CalculaMOS la distancia entre el valor inicial y final
        this.totalDistance = this.game.physics.arcade.distanceToXY( item , item.finalPositionX, item.finalPositionY);

        // si la distancia es menor a 50 pix se acomoda, sino, regresa al oringen
        if (this.totalDistance < 70) {

            this.game.add.tween(item).to({x: item.finalPositionX, y: item.finalPositionY }, 600, Phaser.Easing.Back.Out, true);
           //Se bloquea
            item.inputEnabled = false;
            // reducimos el contador
            this.piecesleft--;

            // ganaste
            if (this.piecesleft === 0) {

                // Mensaje de exito;
                this.welldone = this.game.add.sprite(179.5, 251.5, 'welldone');
                this.welldone.anchor.setTo(0.5, 0.5);
                this.game.add.tween(this.welldone.scale).from({x: 0, y: 0 }, 500, Phaser.Easing.Back.Out, true);

            
            };

        } else { 

            this.game.add.tween(item).to({x: item.originX, y: item.originY }, 500, Phaser.Easing.Back.Out, true);

        };
    },

	update: function () {

	},

    backToMenu: function (pointer) {

        this.state.start('MainMenu');

    }

};
