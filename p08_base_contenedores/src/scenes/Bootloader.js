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
        this.load.image('contenedor', 'contenedor.png');

    }
    /*create() {
       
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this.texto = this.add.text(90, 90, 'PUNTOS 0', {
            fontSize: 30
            });
            this.yoshi = this.add.image(300, 100, 'yoshi').setDepth(2).setScale(0.7);
           /* this.add.tween({
                targets: [this.yoshi, this.contenedor, this.texto],
                y: 200
                });
        const container = this.add.container(0, -300);   
        container.add([
            this.contenedor,
            this.yoshi,
            this.texto
            ]);
            this.add.tween({
                targets: [container],
                ease: 'Bounce',
                y: 100
                });
    }*/
    create(){
        const container = this.add.container(320, 0); 
        this.contenedor = this.add.image(0, 0, 'contenedor');
        this.texto = this.add.text(-145, -10, 'PUNTOS 0', {
            fontSize: 30
            });
            this.yoshi = this.add.image(80, 0, 'yoshi').setDepth(2).setScale(0.7);
        container.add([
            this.contenedor,
            this.texto,
            this.yoshi
            ]);
            this.add.tween({
                targets: [container],
                ease: 'Bounce',
                y: 180
                });
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}