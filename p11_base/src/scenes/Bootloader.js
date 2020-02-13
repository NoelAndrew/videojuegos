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
        this.registry.events.on('evento',(dato)=>{
            console.log(dato);
        });
    }
    create_old() {
        this.data.set('vidas',36);
        this.data.set('monedas',5);
       /* console.log(this.data.list)
        this.data.setValue('vidas',5);
        console.log(this.data.list);
        this.data.list.vidas-=2;
        console.log(this.data.list);
        this.data.remove('monedas');
        console.log(this.data.list);
        console.log(this.data.getAll());
        */
       console.log(this.data.query());
       console.log(this.data.query('vidas'));
       console.log(this.data.query('monedas'));
       this.data.set('monsters',3);
       console.log(this.data.query('mon')); //muestra los datos que inician con mon :o
       this.data.reset();
       console.log(this.data.list);

    }
    create(){
        this.scene.start('Scene_A')
    }
    update(time, delta) {
        
    }
}

export default Bootloader;