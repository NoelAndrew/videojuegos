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
            this.load.image("yoshi", "yoshi.png"); //alias y archivo
            this.load.image("yoshi_fondo"); //Sin nombre de archivo, se toma por
            //defecto el nombre del alias
            }
            create() {
            this.yoshi = this.add.image(130, 130, "yoshi_fondo"); //atributo
            this.yoshif = this.add.image(100, 100, "yoshi"); //atributo
            }
            moverJoshi(yoshif, vel){
                this.yoshif.x += vel;
            }
            
        update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        this.moverJoshi(this.yoshif1, 1);
        this.moverJoshi(this.yoshif2, 2);
        this.moverJoshi(this.yoshif3, 3);

        }
   }
   export default Bootloader;