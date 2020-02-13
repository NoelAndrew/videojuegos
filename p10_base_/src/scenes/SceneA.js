class SceneA extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneA'
    });
    }
    init() {
    console.log('Escena A');
    }
    create() {
        this.add.image(100, 100, 'separadorA');

    }
    update(time, delta) {
    }
    }
    export default SceneA;