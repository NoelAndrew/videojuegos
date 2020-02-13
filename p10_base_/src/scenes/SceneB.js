class SceneB extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneB'
    });
    }
    init() {
    console.log('Escena B');
    }
    create() {
        this.add.image(100, 100, 'separadorB');

    }
    update(time, delta) {
    }
    }
    export default SceneB;