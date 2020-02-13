class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Escena Bootloader");
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image(["yoshif", "yoshi"]);  //Arreglo de imagenes
        this.load.image("drop", "drop.png");
        
    }
    create() {
       
        this.yoshi = this.add.image(100, 100, "yoshi").setInteractive();
    this.input.setDraggable(this.yoshi);
   
    const eventos = Phaser.Input.Events;
    this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
        obj.setScale(0.9);
        });
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
            });
            this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
                obj.setScale(1.0);
                if ( !dropzone ) {
                    obj.x = obj.input.dragStartX;
                    obj.y = obj.input.dragStartY;
                    }
                });
                this.drop = this.add.image(100, 250, 'drop');
    this.drop.setDepth(-1);
    this.drop.setInteractive();
    this.drop.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
    dropzone.clearTint();
    });
    this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
        obj.x = dropzone.x;
        obj.y = dropzone.y;
        });
        
        
                    
            
        

    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;