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
        this.load.image(["yoshif", "yoshi"]);


        this.load.atlas('tomato', 'tomato_atlas/tomato.png','tomato_atlas/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');

        this.load.atlas('pika', 'pika_atlas/pika.png','pika_atlas/pika_atlas.json');
        this.load.animation('pikaAnim', 'pika_atlas/pika_anim.json');
    }

    create() {
        //this.tomato = this.add.sprite(100, 100, 'tomato', 0).setScale(4)

        //ATLAS
       this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);

        this.anims.create({
            key: 'tomato_walk',
            frames: this.anims.generateFrameNames('tomato', {
                prefix: 'animacion_tomato_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        /*this.tomato.anims.play('tomato_walk'); */

        this.tomato.anims.play('tomato_walk');

        //PIKA
        this.pika = this.add.sprite(100, 200, 'pika').setScale(.3);

        this.anims.create({
            key: 'pika_walk',
            frames: this.anims.generateFrameNames('pika', {
                prefix: 'animacion_pika_1_0',
                start: 0,
                end: 7
            }),
            repeat: -1,
            frameRate: 10
        });
        this.pika.anims.play('pika_walk');
    }

    update(time, delta) {

    }
}

export default Bootloader;
