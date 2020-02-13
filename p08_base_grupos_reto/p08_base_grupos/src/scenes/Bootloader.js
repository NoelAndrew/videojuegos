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

        this.load.image(['yoshif', 'yoshi']);
        this.load.atlas('monedas',
        'moneda/monedas.png',
        'moneda/monedas_atlas.json');
        this.load.atlas('Coaxoch', 'coaxoch_atlas/coaxoch.png','coaxoch_atlas/coaxoch_atlas.json');
        this.load.animation('CoaxochAnim', 'coaxoch_atlas/coaxoch_anim.json');
        this.load.atlas('monedas',
        'moneda/monedas.png',
        'moneda/monedas_atlas.json');
        this.load.animation('monedaAnim',
        'moneda/monedas_anim.json'
        );
        this.load.image(["tierra", "tierra_b"]);
    }
    create()  {
        this.coaxoch = this.physics.add.sprite(200,200, 'Coaxoch');
        this.coaxoch.setDepth(1);
        this.grupo = this.physics.add.staticGroup({
            key: 'monedas',
            repeat: 5,
            setXY: {
            x: 150,
            y: 150,
            stepX: 50
            }
            });
            this.grupo.children.iterate( (moneda) => {
            moneda.setScale(4);
            } );
            this.grupo.playAnimation('moneda');
            this.add.tween({
                targets: this.grupo.getChildren(),
                y: 200,
                yoyo: true,
                duration: 500,
                repeat: -1,
                easy: 'Power1'
                });
                this.grupo.children.iterate( (moneda) => {
                    moneda.setScale(4);
                    //moneda.body.setAllowGravity(false);
                    } );
                    this.grupo.getChildren()[1].destroy();
                    var x=31;
        
                    this.coaxoch = this.physics.add.sprite(200,200, 'Coaxoch');
                    this.coaxoch.setDepth(1);
                    //this.coaxoch.play('coaxorun_walk');
                
                    for(var i=0; i<=23;i++)
                    {
                    var y=684;
                    this.tierra = this.physics.add.staticGroup();
                    this.tierra.create(x, 624, 'tierra').refreshBody();
                    this.physics.add.collider(this.coaxoch,this.tierra);
                    for(var a=0; a<=2;a++)
                    {
                        this.tierra2 = this.add.image(x,y,"tierra_b");
                        this.tierra2.setDepth(1);
                        y+=64;
                        
                    }
                    x+=64;
                    this.tierra.setDepth(1); 
            
                    }
                    this.Fondo = this.add.image(600, 500, "Nivel_1"); 
                    this.Fondo.setDepth(0);
            
                    // Sección donde se Agregaran Fisicas
            
                    this.coaxoch.setBounce(.1);
            
            
                    // Fin Seccion Fisicas
            
    }
    createOLD() {
        //this.yoshi = this.add.image(100, 100, 'yoshi');
   

        this.moneda = this.add.sprite(100, 100, 'monedas');
        //this.moneda.anims.play('moneda');
        this.grupo = this.add.group();
        this.grupo.add(this.moneda);

        this.grupo = this.add.group({
            key: 'monedas',
            setXY: {
            x: 150,
            y: 150
            }
            });

            this.grupo.create(200, 200, 'monedas');

            this.grupo.children.iterate( (moneda) => {
                moneda.setScale(4);
                //moneda.anims.play('moneda');
                this.grupo.playAnimation('moneda');
                } );
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;