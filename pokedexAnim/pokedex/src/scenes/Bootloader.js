class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader"
        });
    }

    init() {
        this.selec=0;
        console.log("Escena Bootloader");
        
    }
    
    preload() {
        this.load.path = "./assets/";
        //this.load.image('nepe', 'nepe.jpg');

        this.load.image('bulba', 'seleccion/bulba.png');
        this.load.image('OK', 'seleccion/Ok.png');
        this.load.image('pika', 'seleccion/pikaf.png');
        this.load.image('vapo', 'seleccion/vapo.png');
        this.load.audio("fondo","sounds/fondo.mp3");
        this.load.audio("bulba","sounds/bulba.mp3");
        this.load.audio("pikaa","sounds/pika.mp3");
        this.load.audio("vapo","sounds/vapo.mp3");
        this.load.image('CP','seleccion/pikacontrol.png');
        this.load.image('CB','seleccion/bulbacontrol.png');
        this.load.image('CV','seleccion/vapocontrol.png');
        this.load.image('fondo2', 'fondo2.png' );
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.teclaA = this.input.keyboard.addKey(keyCodes.A);
        this.load.atlas('pika1','pika_atlas/pika1.png','pika_atlas/pika_atlas.json');
        this.load.animation('pikaAnim','pika_atlas/pika_anim.json');
        this.load.atlas('pika2','pika2_PP3/pika2.png','pika2_PP3/pika2_atlas.json');
        this.load.animation('pika2Anim','pika2_PP3/pika2_anim.json');
        this.load.atlas('pika3','pika3_PP3/pika3.png','pika3_PP3/pika3_atlas.json');
        this.load.animation('pika3Anim','pika3_PP3/pika3_anim.json');
        this.load.atlas('pika4','pika4_PP3/pika4.png','pika4_PP3/pika4_atlas.json');
        this.load.animation('pika4Anim','pika4_PP3/pika4_anim.json');
        this.load.atlas('vapo4', 'vapo4_PP3/vapo4.png','vapo4_PP3/vapo4_atlas.json');
        this.load.animation('vapo4Anim', 'vapo4_PP3/vapo4_anim.json'); 
        this.load.atlas('vapo1', 'vapo1_PP3/vapo1.png','vapo1_PP3/vapo1_atlas.json');
        this.load.animation('vapo1Anim', 'vapo1_PP3/vapo1_anim.json'); 

        this.load.atlas('vapo2', 'vapo2_PP3/vapo2.png','vapo2_PP3/vapo2_atlas.json');
        this.load.animation('vapo2Anim', 'vapo2_PP3/vapo2_anim.json'); 
        
        this.load.atlas('vapo3', 'vapo3_PP3/vapo3.png','vapo3_PP3/vapo3_atlas.json');
        this.load.animation('vapo3Anim', 'vapo3_PP3/vapo3_anim.json'); 

        this.load.atlas('vapo4', 'vapo4_PP3/vapo4.png','vapo4_PP3/vapo4_atlas.json');
        this.load.animation('vapo4Anim', 'vapo4_PP3/vapo4_anim.json'); 

        
       this.load.atlas('bulba0', 'bulba0_PP3/bulba0.png','bulba0_PP3/bulba0_atlas.json');
       this.load.animation('bulba0Anim', 'bulba0_PP3/bulba0_anim.json'); 

       this.load.atlas('bulba1', 'bulba1_PP3/bulba1.png','bulba1_PP3/bulba1_atlas.json');
       this.load.animation('bulba1Anim', 'bulba1_PP3/bulba1_anim.json');

       this.load.atlas('bulba2', 'bulba2_PP3/bulba2.png','bulba2_PP3/bulba2_atlas.json');
       this.load.animation('bulba2Anim', 'bulba2_PP3/bulba2_anim.json');

       this.load.atlas('bulba3', 'bulba3_PP3/bulba3.png','bulba3_PP3/bulba3_atlas.json');
       this.load.animation('bulba3Anim', 'bulba3_PP3/bulba3_anim.json');
    }
    
    create() {
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.teclaA = this.input.keyboard.addKey(keyCodes.A);
        this.teclaS= this.input.keyboard.addKey(keyCodes.S);
        this.teclaD = this.input.keyboard.addKey(keyCodes.D);
    
        this.fondo2 = this.add.image(150,400, "fondo2");
        this.fondo2.setVisible(false);
        this.ruta = this.sound.add("fondo", {volume: 0.7});
        this.bulbas = this.sound.add("bulba");
        this.pikas = this.sound.add("pikaa");
        this.vapos = this.sound.add("vapo",{volume: 1.5});
        this.ruta.loop =true;
       /* this.nepe = this.add.image(250, 250, "nepe");
        this.nepe.setScale(2);
        this.nepe.setDepth(1);*/
       // this.ruta.play();
        this.cursor = this.input.keyboard.createCursorKeys();
        console.log(this.cursor);
        this.bulba = this.add.image(553, 354, "bulba").setInteractive();
        this.bulba.setScale(.14,.2);
        this.bulba.setTint('0x808080');
        this.pika = this.add.image(879, 354, "pika").setInteractive();
        this.pika.setScale(.14,.2);
        this.pika.setTint('0x808080');
        this.cpi = this.add.image(212, 225, "CP");
        this.cpi.setVisible(false);
        this.cbu = this.add.image(212, 225, "CB");
        this.cbu.setVisible(false);
        this.cva = this.add.image(212, 225, "CV");
        this.cva.setVisible(false);
      

        this.vapo = this.add.image(1225, 354, "vapo").setInteractive();
        this.vapo.setScale(.14,.2);
        this.vapo.setTint('0x808080');
        this.vapo.name = "v";
        this.pika.name ="p";
        this.bulba.name ="b";
        const eventos = Phaser.Input.Events;
        this.Ok = this.add.image(200,654,"OK").setInteractive();
        this.Ok.setScale(.7);
        this.Ok.name="ok";

        this.pika1 = this.add.sprite(215,455,'pika2').setScale(1.5);
        this.pika1.anims.play('pika2_walk');
        this.pika1.setVisible(false);
        
        this.vapo1 = this.add.sprite(215, 455, 'vapo1').setScale(); 
        this.vapo1.anims.play('vapo1_walk');
        this.vapo1.setVisible(false);
        
        this.bulba1 = this.add.sprite(215, 455, 'bulba0').setScale(.7); 
        this.bulba1.play('bulba0_walk');
        this.bulba1.setVisible(false);


        this.bulba.on(eventos.POINTER_MOVE, (evento) => {
            this.bulba.clearTint();
            this.selec=1;
            });
            this.bulba.on(eventos.POINTER_OUT, (evento) => {
                //this.bulba.clearTint();
                this.bulba.setTint('0x808080');
                
            });

            this.pika.on(eventos.POINTER_MOVE, (evento) => {
                this.pika.clearTint();
                this.selec=2;
                });
                this.pika.on(eventos.POINTER_OUT, (evento) => {
                    this.pika.setTint('0x808080');
                });
            this.vapo.on(eventos.POINTER_MOVE, (evento) => {
            this.vapo.clearTint();
            this.selec=3;
            });
            this.vapo.on(eventos.POINTER_OUT, (evento) => {
                this.vapo.setTint('0x808080');
             });
             this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, obj) => {
                if(this.selec==1 && obj.name != "ok")
                {
                    this.bulbas.play();
                    this.vapo.disableInteractive();
                    this.pika.disableInteractive();
                    this.vapo.name = "f";
                    this.pika.name ="f";
                    this.bulba1.setVisible(true);
                    this.cbu.setVisible(true);
                }
                if(this.selec==2 && obj.name != "ok")
                {
                    this.pikas.play();
                    this.bulba.disableInteractive();
                    this.vapo.disableInteractive();
                    this.vapo.name = "f";
                    this.bulba.name ="f";  
                    this.pika1.setVisible(true); 
                    this.cpi.setVisible(true);
                }
                if(this.selec==3 && obj.name != "ok")
                {
                    this.vapos.play();
                    this.bulba.disableInteractive();
                    this.pika.disableInteractive();
                    this.pika.name ="f";
                    this.bulba.name ="f";
                    this.vapo1.setVisible(true);
                    this.cva.setVisible(true);
                }
                if(obj.name == 'ok')
                {
                    this.pika.name ="p";
                    this.bulba.name ="b";
                    this.vapo.name = "v";
                    this.bulba.setInteractive();
                    this.pika.setInteractive();
                    this.vapo.setInteractive();
                    this.pika1.setVisible(false); 
                    this.vapo1.setVisible(false);
                    this.bulba1.setVisible(false);
                    this.cbu.setVisible(false);
                    this.cpi.setVisible(false);
                    this.cva.setVisible(false);
                }
                });
            this.cursor.right.on('down', () => {
                this.selec++;
                if(this.selec==4)
                {
                    this.selec=1;
                }
                
                }) ; 
                this.cursor.left.on('down', () => {
                    this.selec--;
                    if(this.selec<=0)
                    {
                        this.selec=3;
                    }
                    
                    }) ; 
                    this.cursor.shift.on('down', () => {
            
                            if(this.selec==1)
                            {
                                this.bulbas.play();
                                this.vapo.disableInteractive();
                                this.pika.disableInteractive();
                                this.vapo.name = "f";
                                this.pika.name ="f";
                                this.bulba1.setVisible(true);
                                this.cbu.setVisible(true);
                            }
                            if(this.selec==2)
                            {
                                this.pikas.play();
                                this.bulba.disableInteractive();
                                this.vapo.disableInteractive();
                                this.vapo.name = "f";
                                this.bulba.name ="f";
                                this.pika1.setVisible(true); 
                                this.cpi.setVisible(true);
                            }
                            if(this.selec==3)
                            {
                                this.vapos.play();
                                this.bulba.disableInteractive();
                                this.pika.disableInteractive();
                                this.pika.name ="f";
                                this.bulba.name ="f";
                                this.vapo1.setVisible(true);
                                this.cva.setVisible(true);
                            }
                            

                            }) ; 

                            this.teclaA.on('up', () => {

                                this.pika1.setScale(1.5);
                                this.pika1.play('pika2_walk');
                                this.vapo1.setScale(1);
                                this.vapo1.play("vapo1_walk")
                                this.bulba1.setScale(.7);
                                this.bulba1.play('bulba0_walk');
                                this.fondo2.setVisible(false);
    
                                });
                                this.teclaS.on('up', () => {
                                    this.pika1.setScale(1.5);
                                    this.pika1.play('pika2_walk');
                                    this.vapo1.setScale(1);
                                    this.vapo1.play("vapo1_walk");
                                    this.bulba1.setScale(.7);
                                this.bulba1.play('bulba0_walk');
                                this.fondo2.setVisible(false);

                                    });
                                    
                                this.teclaD.on('up', () => {
                                    this.pika1.setScale(1.5);
                                this.pika1.play('pika2_walk');
                                this.vapo1.setScale(1);
                                this.vapo1.play("vapo1_walk");
                                this.bulba1.setScale(.7);
                                this.bulba1.play('bulba0_walk');
                                this.fondo2.setVisible(false);

                        
                                    });
                                
                                
                           
    }

    update(time, delta) {
        if(this.selec ==1 && this.bulba.name == "b")
        {
            this.bulba.clearTint();
            this.pika.setTint('0x808080');
            this.vapo.setTint('0x808080');
        }
        if(this.selec ==2 && this.pika.name == "p")
        {
            this.pika.clearTint();
            this.bulba.setTint('0x808080');
            this.vapo.setTint('0x808080');
        }
        if(this.selec ==3 && this.vapo.name == "v")
        {
            this.vapo.clearTint();
            this.pika.setTint('0x808080');
            this.bulba.setTint('0x808080');
        }
        this.teclaA.on('down', () => {

            this.fondo2.setVisible(true);
            this.pika1.setScale(.4);
            this.pika1.play('pika1_walk');
            this.vapo1.setScale(2.5);
            this.vapo1.anims.play('vapo2_walk');
            this.bulba1.setScale(1.7);
            this.bulba1.play('bulba1_walk');
            this.timeline = this.tweens.createTimeline();
                this.timeline = this.tweens.timeline({
                    targets: [this.pika1],
                    paused: true,
                    speed: 20,
    
                    totalDuration: 1000,
                    tweens: [
                    {
                        x: 300,
                       // duration: 3000,
                    },
                    {
                    y: 300,
                    offset: 500
    
                    },
                    {
                    x: 100
                    },
                    {
                    y: 100
                    },
                    {
                    x:212,
                    },
                    {
                    y:455,
                    }
                    ]
                    });
                    this.timeline.play();
              
                    this.timeline = this.tweens.timeline({
                        targets: [this.bulba1],
                        paused: true,
                        speed: 20,
        
                       // totalDuration: 1000,
                        tweens: [
                        {
                            x: 300,
                           // duration: 3000,
                        },
                        {
                        y: 300,
                        offset: 500
        
                        },
                       {
                        x:212,
                        },
                        {
                        y:455,
                        }
                        ]
                        });
                        this.timeline.play();

                        this.timeline = this.tweens.timeline({
                            targets: [this.vapo1],
                            paused: true,
            
                            speed: 20,
            
                           // totalDuration: 1000,
                            tweens: [
                            {
                                y: 490,
                               // duration: 3000,
                            },
                          
                            {
                            y: 455,
                            offset: 500,
                            ease: 'Elastic',
                            },
                            ]
                            });
                            this.timeline.play();
           
            });
        this.teclaS.on('down', () => {
            this.fondo2.setVisible(true);
            this.pika1.setScale(1.5);
            this.pika1.play('pika3_walk');
            this.vapo1.anims.play('vapo3_walk');
            this.bulba1.play('bulba2_walk');

            this.timeline = this.tweens.timeline({
                targets: [this.pika1],
                paused: true,
                speed: 20,

               // totalDuration: 1000,
                tweens: [
                {
                    y: 100,
                   // duration: 3000,
                },
                {
                y: 455,
                offset: 500,
                ease: 'Elastic',
                }

                ]
                });
                this.timeline.play();
                this.timeline = this.tweens.timeline({
                    targets: [this.bulba1],
                    paused: true,
                    
                    speed: 20,
    
                   // totalDuration: 1000,
                    tweens: [
                    {
                        x: 490,
                       // duration: 3000,
                    },
                  
                    {
                    x: 212,
                    offset: 500,
                    ease: 'Elastic',
                    },

                    ]
                    });
                    this.timeline.play();

                this.timeline = this.tweens.timeline({ 
                    targets: [this.vapo1],
                    paused: true,
                    speed: 10,
    
                   totalDuration: 1000,
                    tweens: [
                    {
                        x: 1000,
                       // duration: 3000,
                    },
                    {
                    x: 212,
                    offset: 500,
                    ease: 'Elastic',
                    }
    
                    ]
                    });
                    this.timeline.play();
                
                
            });
            
        this.teclaD.on('down', () => {
            this.fondo2.setVisible(true);

            this.pika1.setScale(1.5);
            this.pika1.play('pika4_walk');
            this.vapo1.anims.play('vapo4_walk');
            this.bulba1.setScale(1.2);
            this.bulba1.play('bulba3_walk');

            this.timeline = this.tweens.timeline({
                targets: [this.pika1],
                paused: true,

                speed: 20,

               // totalDuration: 1000,
                tweens: [
                {
                    y: 490,
                   // duration: 3000,
                },
              
                {
                y: 455,
                offset: 500,
                ease: 'Elastic',
                },
                ]
                });
                this.timeline.play();

                this.timeline = this.tweens.timeline({
                    targets: [this.bulba1],
                    paused: true,
                    speed: 20,
    
                   // totalDuration: 1000,
                    tweens: [
                    {
                        y: 100,
                       // duration: 3000,
                    },
                    {
                    y: 455,
                    offset: 500,
                    ease: 'Elastic',
                    }
    
                    ]
                    });
                    this.timeline.play();

                    this.timeline = this.tweens.timeline({
                        targets: [this.vapo1],
                        paused: true,
                        speed: 20,
        
                       // totalDuration: 1000,
                        tweens: [
                        {
                        x: 0,
                        },
                        {
                            y: 300,
                           // duration: 3000,
                        },
 
                        {
                            x: 212,
                         },
                         {
                            y: 455,
                            },
        
                        ]
                        });
                        this.timeline.play();
        

            });
        
    }
}

export default Bootloader;