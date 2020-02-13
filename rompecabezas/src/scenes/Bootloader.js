var id, id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15,id16
class Bootloader extends Phaser.Scene{
    constructor(contador, cartas, texto, aciertos){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
        this.contador = contador;
        this.cartas = cartas;
        this.cartas = new Array(2);
        this.texto = texto;
        this.aciertos = aciertos;
    }

    init() {
        console.log("Escena Bootloader");
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image("drop", "drop.png");
        this.load.image("drop2", "drop.png");
        this.load.image("drop3", "drop.png");
        this.load.image("drop4", "drop.png");
        this.load.image("drop5", "drop.png");
        this.load.image("drop6", "drop.png");
        this.load.image("drop7", "drop.png");
        this.load.image("drop8", "drop.png");
        this.load.image("drop9", "drop.png");
        this.load.image("drop10", "drop.png");
        this.load.image("drop11", "drop.png");
        this.load.image("drop12", "drop.png");
        this.load.image("drop13", "drop.png");
        this.load.image("drop14", "drop.png");
        this.load.image("drop15", "drop.png");
        this.load.image("drop16", "drop.png");
        this.load.image("drop17", "drop.png");
        this.load.image("drop18", "drop.png");

 





        this.load.image("p1", "p1_01.png");
        this.load.image("p2", "p1_02.gif");
        this.load.image("p3", "p1_03.gif");
        this.load.image("p4", "p1_04.gif");
        this.load.image("p5", "p1_05.gif");
        this.load.image("p6", "p1_06.gif");
        this.load.image("p7", "p1_07.gif");
        this.load.image("p8", "p1_08.gif");
        this.load.image("p9", "p1_09.gif");
        this.load.image("p10", "p1_10.gif");
        this.load.image("p11", "p1_11.gif");
        this.load.image("p12", "p1_12.gif");
        this.load.image("p13", "p1_13.gif");
        this.load.image("p14", "p1_14.gif");
        this.load.image("p15", "p1_15.gif");
        this.load.image("p16", "p1_16.png");

        this.load.audio("musica", "opening.mp3");

        this.load.image("fondo", "fondo.jpg");

    }
    create() {

        this.musica1 = this.sound.add("musica");
        this.musica1.play();
    this.p1 = this.add.image(600, 100, "p1").setInteractive();
    this.p2 = this.add.image(600, 110, "p2").setInteractive();
    this.p3 = this.add.image(600, 120, "p3").setInteractive();
    this.p4 = this.add.image(600, 130, "p4").setInteractive();
    this.p5 = this.add.image(600, 140, "p5").setInteractive();
    this.p6 = this.add.image(600, 150, "p6").setInteractive();
    this.p7 = this.add.image(600, 160, "p7").setInteractive();
    this.p8 = this.add.image(600, 170, "p8").setInteractive();
    this.p9 = this.add.image(600, 180, "p9").setInteractive();
    this.p10 = this.add.image(600, 190, "p10").setInteractive();
    this.p11 = this.add.image(600, 200, "p11").setInteractive();
    this.p12 = this.add.image(600, 210, "p12").setInteractive();
    this.p13 = this.add.image(600, 220, "p13").setInteractive();
    this.p14 = this.add.image(600, 230, "p14").setInteractive();
    this.p15 = this.add.image(600, 240, "p15").setInteractive();
    this.p16 = this.add.image(600, 250, "p16").setInteractive();

    this.drop3 = this.add.image("drop3", "drop.png");
    this.drop3.name="p1";



    this.input.setDraggable(this.p1);
    this.input.setDraggable(this.p2);
    this.input.setDraggable(this.p3);
    this.input.setDraggable(this.p4);
    this.input.setDraggable(this.p5);
    this.input.setDraggable(this.p6);
    this.input.setDraggable(this.p7);
    this.input.setDraggable(this.p8);
    this.input.setDraggable(this.p9);
    this.input.setDraggable(this.p10);
    this.input.setDraggable(this.p11);
    this.input.setDraggable(this.p12);
    this.input.setDraggable(this.p13);
    this.input.setDraggable(this.p14);
    this.input.setDraggable(this.p15);
    this.input.setDraggable(this.p16);


   
    const eventos = Phaser.Input.Events;
    this.cont=0;

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
    //3          
    this.drop = this.add.image(100, 250, 'drop');
    this.drop.setDepth(-1);
    this.drop.setInteractive();
 
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
            this.drop.input.dropZone = true;
    this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
    dropzone.clearTint();
    });
    this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
        obj.x = dropzone.x;
        obj.y = dropzone.y;
        });
        
       //2 
        this.drop2 = this.add.image(100, 161, 'drop2');
        this.drop2.setDepth(-1);
        this.drop2.setInteractive();
        this.drop2.input.dropZone = true;
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        });
        //1
        this.drop3 = this.add.image(100, 71, 'drop3');
        this.drop3.setDepth(-1);
        this.drop3.setInteractive();
        this.drop3.input.dropZone = true;

        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        });
        //4
        this.drop4 = this.add.image(100, 339, 'drop4');
        this.drop4.setDepth(-1);
        this.drop4.setInteractive();
        this.drop4.input.dropZone = true;
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        }); 
        //7
        this.drop5 = this.add.image(190, 250, 'drop5');
        this.drop5.setDepth(-1);
        this.drop5.setInteractive();
        this.drop5.input.dropZone = true;
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        }); 
        /*
        this.drop6 = this.add.image(190, 160, 'drop6');
        this.drop6.setDepth(-1);
        this.drop6.setInteractive();
        this.drop6.input.dropZone = true;
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        }); */

//10
        this.drop7 = this.add.image(280, 160, 'drop7');
        this.drop7.setDepth(-1);
        this.drop7.setInteractive();
        this.drop7.input.dropZone = true;
        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
        dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
        dropzone.clearTint();
        }); 
//11

        this.drop8 = this.add.image(280, 250, 'drop8');
    this.drop8.setDepth(-1);
    this.drop8.setInteractive();
    this.drop8.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
    dropzone.clearTint();
    });

//2-1
/*
    this.drop17 = this.add.image(190, 71, 'drop17');
    this.drop17.setDepth(-1);
    this.drop17.setInteractive();
    this.drop17.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });*/
//9
    this.drop9 = this.add.image(280, 71, 'drop9');
    this.drop9.setDepth(-1);
    this.drop9.setInteractive();
    this.drop9.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
//6
    this.drop10 = this.add.image(190, 160, 'drop10');
    this.drop10.setDepth(-1);
    this.drop10.setInteractive();
    this.drop10.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    //5
    this.drop11 = this.add.image(190, 71, 'drop11');
    this.drop11.setDepth(-1);
    this.drop11.setInteractive();
    this.drop11.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    //8
    this.drop12 = this.add.image(190, 339, 'drop12');
    this.drop12.setDepth(-1);
    this.drop12.setInteractive();
    this.drop12.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    
    //13
    this.drop13 = this.add.image(370, 71, 'drop13');
    this.drop13.setDepth(-1);
    this.drop13.setInteractive();
    this.drop13.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    //3-1
    //14
    this.drop14 = this.add.image(370, 160, 'drop14');
    this.drop14.setDepth(-1);
    this.drop14.setInteractive();
    this.drop14.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    //5
    this.drop15 = this.add.image(370, 250, 'drop15');
    this.drop15.setDepth(-1);
    this.drop15.setInteractive();
    this.drop15.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
    //3-3
    //16
    this.drop16 = this.add.image(370, 339, 'drop16');
    this.drop16.setDepth(-1);
    this.drop16.setInteractive();
    this.drop16.input.dropZone = true;
    this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
    dropzone.setTint(0xff0000);
    });
//3-4
//12
        this.drop18 = this.add.image(280, 339, 'drop18');
    this.drop18.setDepth(-1);
    this.drop18.setInteractive();
    this.drop18.input.dropZone = true;
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