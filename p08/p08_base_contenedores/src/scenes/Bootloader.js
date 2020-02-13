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
    create(){
       

        this.contenedor = this.add.image(300, 170, 'contenedor');//contenedor grafico
        this.texto = this.add.text(190, 155, 'PUNTOS 0', {
            fontSize: 30
            });
            this.yoshi = this.add.image(390, 170, 'yoshi')
            .setDepth(2)
            .setScale(0.7);
        const container = this.add.container(0, -300);//contenedor logico
       

        container.add([
            this.contenedor,
            this.yoshi,
            this.texto
            ]);

            this.add.tween({
                targets: [container],
                ease: 'Bounce',
                y: 0
                });
        
    }
   /* createOLD() {
        this.contenedor = this.add.image(200, 100, 'contenedor');
        this.texto = this.add.text(90, 90, 'PUNTOS 0', {
            fontSize: 30
            });
            this.yoshi = this.add.image(300, 100, 'yoshi')
            .setDepth(2)
            .setScale(0.7);

            const container = this.add.container(0, -300);

            container.add([
                this.contenedor,
                this.yoshi,
                this.texto
                ]);

                this.add.tween({
                    targets: [container],
                    ease: 'bounce',
                    y: 100
                    });
          /*  this.add.tween({
                targets: [this.yoshi, this.contenedor, this.texto],
                y: 200
                });*/
        //this.yoshi = this.add.image(100, 100, 'yoshi');
    //}
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;