class Scene_A extends Phaser.Scene{
    constructor(){
        super({
            key: 'Scene_A'
        });
    }

    init() {
        console.log('Escena A');
    }
    preload() {
        this.load.path = './assets/';      
       
    }
    create(){
        this.registry.events.emit('evento',200);


    }
    update(time, delta) {

    }
}

export default Scene_A;