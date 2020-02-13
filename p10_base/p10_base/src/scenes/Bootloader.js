import SceneC from "../scenes/SceneC.js"

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
        this.load.image(['separadorA', 'separadorB', 'separadorC']);
    }

    create() {
        this.scene.add('SceneC', SceneC);
        this.scene.start('SceneA');
        this.scene.launch('SceneB');
        this.scene.launch('SceneC');//queda en el primero
        /*console.log(this.scene.manager.scenes);
        //this.scene.moveDown('SceneC');
        console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        this.scene.moveUp('SceneA');
        console.log(this.scene.manager.scenes.map( x => x.scene.key ));*/
        //this.scene.swapPosition('SceneA', 'SceneC');
        //this.scene.bringToTop('SceneA');
        //this.scene.sendToBack('SceneC');
        //this.scene.moveAbove('SceneA', 'SceneC');//boot,A,C,B
        //this.scene.moveBelow('SceneA', 'SceneC');//Boot,C,A,B
        console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        //this.scene.stop('SceneC');
        //this.scene.remove('SceneC');

        /*setTimeout(() => {
            this.scene.pause('SceneA');
        }, 2000);

        setTimeout(() => {
            this.scene.resume('SceneA');
        }, 4000);
        
        setTimeout(() => {
            this.scene.sleep('SceneA');
        }, 2000);*/

        setTimeout(() => {
            this.scene.wake('SceneA');
        }, 4000);
              
    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        console.log(time);
    }
}

export default Bootloader;