var direction;
var direction2;
class Bootloader extends Phaser.Scene{
    constructor(){
    super({
    key: "Bootloader" //Nombre interno o clave de referencia
    });
    }
    init() {
        console.log("Soy init");
        }
        preload() {
            this.load.path = "./assets/"; //Ruta de todas las imagenes
            this.load.image("naruto", "naruto1.png"); //alias y archivo
            this.load.image("sasuke"); //Sin nombre de archivo, se toma por
            this.load.image("fondo","valle1.jpg");
            this.load.image("explo", "explosion.png");
            this.load.audio("musica", "musicapelea.mp3");
            
            //defecto el nombre del alias
            }
            create() {
            this.musica1 = this.sound.add("musica");
            this.musica1.play();
            this.fondo = this.add.image(0,0, "fondo" );
            this.fondo.setScale(1,1);
            this.fondo.setOrigin(0,0);
            this.sasuke = this.add.image(610, 130, "sasuke"); //atributo
            this.naruto = this.add.image(20, 130, "naruto"); //atributo
            this.explo = this.add.image(320, 130, "explo");
            
            this.explo.setScale(.9,.9);
            this.naruto.setScale(.7,.7);
            this.sasuke.setScale(.7,.7);

            this.sasuke.anima;
            this.naruto.anima;
            this.explo.setVisible(false);
            }
            moverJoshi(naruto, vel){
                this.naruto.x += vel;
            }
            
        update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        /*this.moverJoshi(this.gara1, 1);
        this.gara.flipX = 90;
        this.moverJoshi(this.gara2, 2);
        this.moverJoshi(this.gara3, 3);
        this.gara.x+=3;
        if(this.gara.x == 730){
            this.gara.flipX=true;
            this.gara.x-=3;
        }*/
        if(direction == true )
        {
            if(this.naruto.x <=315){
                this.naruto.x = this.naruto.x+5;
                

            }
            else{
                this.explo.setVisible(true);
                this.naruto.flipX=1;
                
                direction = !direction;
                
            }
        }
        else{
            if(this.naruto.x>=20){

                this.naruto.x=this.naruto.x-5;


            }
            else{

                this.naruto.flipX=0;
                this.explo.setVisible(false);

                direction = !direction;
            }
        }//nepe
        if(direction2 == true )
        {
            if(this.sasuke.x <=610){
                this.sasuke.x = this.sasuke.x+5;
            }
            else{
                this.sasuke.flipX=0;
                direction2 = !direction2;
            }
        }
        else{
            if(this.sasuke.x>=315){
                this.sasuke.x=this.sasuke.x-5;

            }
            else{
                this.sasuke.flipX=1;
                direction2 = !direction2;
            }
        }

        }
   }
   export default Bootloader;