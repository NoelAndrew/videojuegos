class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader"
        });
    }

    init() {
        console.log("Escena Bootloader");
    }
    
    preload() {
        this.load.path = "./assets/";

       this.load.atlas('bulba0', 'bulba0_PP3/bulba0.png','bulba0_PP3/bulba0_atlas.json');
        this.load.animation('bulba0Anim', 'bulba0_PP3/bulba0_anim.json'); 

        this.load.atlas('bulba1', 'bulba1_PP3/bulba1.png','bulba1_PP3/bulba1_atlas.json');
        this.load.animation('bulba1Anim', 'bulba1_PP3/bulba1_anim.json');

        this.load.atlas('bulba2', 'bulba2_PP3/bulba2.png','bulba2_PP3/bulba2_atlas.json');
        this.load.animation('bulba2Anim', 'bulba2_PP3/bulba2_anim.json');

        this.load.atlas('bulba3', 'bulba3_PP3/bulba3.png','bulba3_PP3/bulba3_atlas.json');
        this.load.animation('bulba3Anim', 'bulba3_PP3/bulba3_anim.json');


        this.load.atlas('vapo4', 'vapo4_PP3/vapo4.png','vapo4_PP3/vapo4_atlas.json');
        this.load.animation('vapo4Anim', 'vapo4_PP3/vapo4_anim.json'); 

        this.load.atlas('vapo1', 'vapo1_PP3/vapo1.png','vapo1_PP3/vapo1_atlas.json');
        this.load.animation('vapo1Anim', 'vapo1_PP3/vapo1_anim.json'); 

        this.load.atlas('vapo2', 'vapo2_PP3/vapo2.png','vapo2_PP3/vapo2_atlas.json');
        this.load.animation('vapo2Anim', 'vapo2_PP3/vapo2_anim.json'); 
        
        this.load.atlas('vapo3', 'vapo3_PP3/vapo3.png','vapo3_PP3/vapo3_atlas.json');
        this.load.animation('vapo3Anim', 'vapo3_PP3/vapo3_anim.json'); 

        this.load.atlas('vapo4', 'vapo4_PP3/vapo4.png','vapo4_PP3/vapo4_atlas.json');
        this.load.animation('vapo4Anim', 'vapo4_PP3/vapo4_anim.json'); 

    }
    
    create() {
        
        this.bulba0 = this.add.sprite(300, 100, 'bulba0').setScale(.3); 

        this.anims.create({
            key: 'bulba0_walk',
            frames: this.anims.generateFrameNames('bulba0', {
                prefix: 'animacion_bulba0_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.bulba0.anims.play('bulba0_walk');

        this.bulba1 = this.add.sprite(100, 100, 'bulba1').setScale(.3); 

        this.anims.create({
            key: 'bulba1_walk',
            frames: this.anims.generateFrameNames('bulba1', {
                prefix: 'animacion_bulba1_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.bulba1.anims.play('bulba1_walk');

        this.bulba2 = this.add.sprite(200, 100, 'bulba2').setScale(.3); 

        this.anims.create({
            key: 'bulba2_walk',
            frames: this.anims.generateFrameNames('bulba2', {
                prefix: 'animacion_bulba2_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.bulba2.anims.play('bulba2_walk');

        this.bulba3 = this.add.sprite(400, 100, 'bulba3').setScale(.3); 

        this.anims.create({
            key: 'bulba3_walk',
            frames: this.anims.generateFrameNames('bulba3', {
                prefix: 'animacion_bulba3_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.bulba3.anims.play('bulba3_walk');


/*


        this.vapo1 = this.add.sprite(200, 100, 'vapo1').setScale(.3); 

        this.anims.create({
            key: 'vapo1_walk',
            frames: this.anims.generateFrameNames('vapo1', {
                prefix: 'animacion_vapo1_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.vapo1.anims.play('vapo1_walk');

        this.vapo2 = this.add.sprite(300, 100, 'vapo2').setScale(.8); 

        this.anims.create({
            key: 'vapo2_walk',
            frames: this.anims.generateFrameNames('vapo2', {
                prefix: 'animacion_vapo2_1_0',
                start: 0,
                end: 40
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.vapo2.anims.play('vapo2_walk');

        this.vapo3 = this.add.sprite(400, 100, 'vapo3').setScale(.3); 

        this.anims.create({
            key: 'vapo3_walk',
            frames: this.anims.generateFrameNames('vapo3', {
                prefix: 'animacion_vapo3_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.vapo3.anims.play('vapo3_walk'); 

        this.vapo4 = this.add.sprite(200, 100, 'vapo4').setScale(.3); 

        this.anims.create({
            key: 'vapo4_walk',
            frames: this.anims.generateFrameNames('vapo4', {
                prefix: 'animacion_vapo4_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        }); 
        this.vapo4.anims.play('vapo4_walk');*/

    }


    update(time, delta) {
        
    }
}

export default Bootloader;