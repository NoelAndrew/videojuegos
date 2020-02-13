class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    preload() {
        this.load.path = './assets/';      
        this.load.image(['yoshif', 'yoshi']);
        this.load.atlas('monedas',
        'moneda/monedas.png',
        'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim',
        'moneda/monedas_anim.json'
        );
    }
    create()  {
        this.grupo = this.physics.add.staticGroup({
            key: 'monedas',
            repeat: 5,
            setXY: {
            x: 150,
            y: 150,
            stepX: 50
            }
            });
            this.grupo.children.iterate( (moneda) => {
            moneda.setScale(4);
            } );
            this.grupo.playAnimation('moneda');
            this.add.tween({
                targets: this.grupo.getChildren(),
                y: 200,
                yoyo: true,
                duration: 500,
                repeat: -1,
                easy: 'Power1'
                });
                this.grupo.children.iterate( (moneda) => {
                    moneda.setScale(4);
                    //moneda.body.setAllowGravity(false);
                    } );
                    this.grupo.getChildren()[1].destroy();
    }
    createOLD() {
        //this.yoshi = this.add.image(100, 100, 'yoshi');
   

        this.moneda = this.add.sprite(100, 100, 'monedas');
        //this.moneda.anims.play('moneda');
        this.grupo = this.add.group();
        this.grupo.add(this.moneda);

        this.grupo = this.add.group({
            key: 'monedas',
            setXY: {
            x: 150,
            y: 150
            }
            });

            this.grupo.create(200, 200, 'monedas');

            this.grupo.children.iterate( (moneda) => {
                moneda.setScale(4);
                //moneda.anims.play('moneda');
                this.grupo.playAnimation('moneda');
                } );
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;