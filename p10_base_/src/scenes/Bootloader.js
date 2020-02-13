import SceneC from "../scenes/SceneC"

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
        this.scene.launch('SceneC');
        //this.scene.launch('SceneC');
      /*  console.log(this.scene.manager.scenes);
        this.scene.moveDown('SceneC');
        console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        this.scene.moveUp('SceneA');
    console.log(this.scene.manager.scenes.map( x => x.scene.key ));
    //this.scene.swapPosition('SceneA', 'SceneC');
this.scene.bringToTop('SceneA');
console.log(this.scene.manager.scenes.map( x => x.scene.key ));
this.scene.moveBelow('SceneA', 'SceneC');

this.scene.stop('SceneC');
this.scene.remove('SceneC');
*/

        

    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        console.log(time);
        /*setTimeout(() => {
            this.scene.pause('SceneA');
            }, 1000);
            setTimeout(() => {
                this.scene.resume('SceneA');
                }, 4000);*/
                setTimeout(() => {
                    this.scene.sleep('SceneA');
                    }, 2000);
                    setTimeout(() => {
                        this.scene.wake('SceneA');
                        }, 4000);
                        
    }
}

export default Bootloader;