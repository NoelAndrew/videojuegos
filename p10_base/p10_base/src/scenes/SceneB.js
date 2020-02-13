class SceneB extends Phaser.Scene{
    constructor(){
        super({
            key: 'SceneB'
        });
    }
    init() {
        console.log('Escena B');
        //this.load.image(['separadorA', 'separadorB', 'separadorC']);
    }
    create() {
        this.add.image(100, 100, 'separadorB');
    }
    update(time, delta) {

    }
}
export default SceneB;