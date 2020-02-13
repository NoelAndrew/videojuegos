class SceneC extends Phaser.Scene{
    constructor(){
    super({
    key: 'SceneC'
    });
    }
    init() {
    console.log('Escena C');
    }
    create() {
        this.add.image(100, 100, 'separadorC');

    }
    update(time, delta) {
    }
    }
    export default SceneC;