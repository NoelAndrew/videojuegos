var alto;
var id;
var alto1;
var id1;
class Bootloader extends Phaser.Scene{
    constructor(alpha, alpha1){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
        this.alpha = alpha;
        this.alpha1 = alpha1;
    }

    init() {
        console.log("Escena Bootloader");
        this.alpha=true;
        alto=true;
        alto1=true;
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image(["yoshi_fondo", "yoshi"]);  //Arreglo de imagenes
    }
    create() {
        this.yoshi = this.add.image(100, 100, "yoshi");
        this.yoshi_fondo = this.add.image(200, 100, "yoshi_fondo");
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        console.log(keyCodes);
       
                            this.cursor = this.input.keyboard.createCursorKeys();
                            
                             console.log(this.cursor); // Para ver el contenido      
                                 this.cursor.left.on('down', () => {
                                    console.log('Has presionado la tecla IZQUIERDA');
                                    this.yoshi.flipX=true;
                                    this.yoshi.x-=15;
                    }) ; 
                    this.cursor.right.on('down', () => {
                        console.log('Has presionado la tecla derecha');
                        this.yoshi.flipX=false;
                        this.yoshi.x+=15;
        }) ; 
        this.cursor.down.on('down', () => {
            console.log('Has presionado la tecla abajo');
            this.yoshi.y+=15;
}) ; 
this.cursor.up.on('down', () => {
    console.log('Has presionado la tecla arriba');
    this.yoshi.flipY=false;
    this.yoshi.y-=15;
}) ;

                            
                             
            this.teclaA = this.input.keyboard.addKey(keyCodes.A);
            this.teclaA.on('down', () => {
            console.log('Has presionado la tecla A');
            this.yoshi_fondo.flipX=true;
            this.yoshi_fondo.x-=15;
            });
            this.teclaA=this.input.keyboard.addKey(keyCodes.S);
            this.teclaA.on('down', () => {
                console.log('Has precionado la tecla S');
                this.yoshi_fondo.y+=15;
                });
                this.teclaA=this.input.keyboard.addKey(keyCodes.D);
            this.teclaA.on('down', () => {
                console.log('Has presionado la tecla D');
                this.yoshi_fondo.flipX=false;
                        this.yoshi_fondo.x+=15;

                });
                this.teclaA=this.input.keyboard.addKey(keyCodes.W);
            this.teclaA.on('down', () => {
                console.log('Has presionado la tecla W');
                this.yoshi_fondo.flipY=false;
                this.yoshi_fondo.y-=15;

                });
                this.combo = this.input.keyboard.createCombo(
                    [keyCodes.W, keyCodes.S, keyCodes.D],
                    {resetOnMatch: true}
                    );
                    
    this.combox = this.input.keyboard.createCombo(
        [keyCodes.UP, keyCodes.DOWN, keyCodes.RIGHT],
        {resetOnMatch: true}
        );
        
                        this.input.keyboard.on('keycombomatch',(event) =>
                        {
            
                          
                          if(event.keyCodes == this.combo.keyCodes)
                          {
                            if(alto)
                            {
                              id = setInterval(function(x)
                             {
                              if(this.alpha)
                              {
                                  x.setTint('0xff0000');
                              }
                              else
                              {
                                  x.setTint('0xffffff');
                              }
                              this.alpha = !this.alpha;
                             },150,this.yoshi_fondo);
                             setTimeout((x)=>{
                                 clearInterval(x);
                             },1100,id);
                             
                            }
                            else
                            {
                              clearInterval(id);
                              alto = !alto;
                            }
            
                          }
                          if(event.keyCodes == this.combox.keyCodes)
                          {
                            
                              id1 = setInterval(function(x)
                             {
                              if(this.alpha1)
                              {
                                  x.setTint('0xff00ff');
                              }
                              else
                              {
                                  x.setTint('0xffffff');
                              }
                              this.alpha1 = !this.alpha1;
                             },150,this.yoshi);
                             setTimeout((x,y)=>{
                                 clearInterval(x);
                             },1100,id1,this.yoshi);
                             
            
                          }
                        });
                        
            
           
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        
                    this.cursor.space.on('down', ()=>{
                        this.yoshi.setAlpha(.3);
                    });
                    this.cursor.space.on('up', ()=>{
                        this.yoshi.setAlpha(1);
                    });
                    this.cursor.shift.on('down', ()=>{
                        this.yoshi_fondo.setAlpha(.4);
                    });
                    this.cursor.shift.on('up', ()=>{
                        this.yoshi_fondo.setAlpha(1);
                    });
        
    }
}

export default Bootloader;