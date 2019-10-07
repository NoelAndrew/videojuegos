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
        this.load.image('bulba', 'assets/seleccion/bulba.png');
        this.load.image('bulbab', 'assets/seleccion/bulbab.png');
        this.load.image('pika', 'assets/seleccion/pika.png');
        this.load.image('pikab', 'assets/seleccion/pikab.png');
        this.load.image('vapo', 'assets/seleccion/vapo.png');
        this.load.image('vapob', 'assets/seleccion/vapoB.png');



    }
    
    create() {
        this.bulba = this.add.image(400, 140, "bulba").setInteractive();
        this.bulba.setScale(.05, .05);
        this.bulbab = this.add.image(400, 140, "bulbab").setInteractive();
        this.bulbab.setScale (.05, .05);

        this.pika = this.add.image(600, 140, "pika").setInteractive();
        this.pika.setScale (.05, .05);

        this.pikab = this.add.image(600, 140, "pikab").setInteractive();
        this.pikab.setScale (.05, .05);

        this.vapo = this.add.image(800, 140, "vapo").setInteractive();
        this.vapo.setScale (.05, .05);
        this.vapob = this.add.image(800, 140, "vapob").setInteractive();
        this.vapob.setScale (.05, .05);

        const eventos = Phaser.Input.Events;

        this.bulbab.on(eventos.POINTER_MOVE, (evento) => {
            this.bulbab.setVisible(false);
            });
            this.bulbab.on(eventos.POINTER_OUT, (evento) => {
                this.bulbab.setVisible(true);
            });

            this.pikab.on(eventos.POINTER_MOVE, (evento) => {
                this.pikab.setVisible(false);
                });
                this.pikab.on(eventos.POINTER_OUT, (evento) => {
                    this.pikab.setVisible(true);
                });
            this.vapob.on(eventos.POINTER_MOVE, (evento) => {
            this.vapob.setVisible(false);
            });
            this.vapob.on(eventos.POINTER_OUT, (evento) => {
            this.vapob.setVisible(true);
             });
    


             // this.tomato.anims.play('tomato_walk');

    }

    update(time, delta) {
        
    }
}

export default Bootloader;