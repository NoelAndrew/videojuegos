var id, id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15,id16,id17,id18,id19;
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
        this.contador = 0;
        this.aciertos = 0;
    }
    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        this.load.image(["yoshif", "yoshi"]);  //Arreglo de imagenes
        this.load.audio("musica", "blizzard.mp3");
        this.load.image("goku4", "goku4.png"); //alias y archivo
        this.load.image("bardock", "bardock.png"); //alias y archivo
        this.load.image("black", "black.png"); //alias y archivo
        this.load.image("goku4_1", "goku4.png"); //alias y archivo
        this.load.image("gohan", "gohan.png"); //alias y archivo
        this.load.image("gogeta", "gogeta.png"); //alias y archivo
        this.load.image("gokub", "gokublue.png"); //alias y archivo
        this.load.image("vegeta", "vegeta.png");
        this.load.image("gyk", "gyk.png");
        this.load.image("gohan_1", "gohan.png"); //alias y archivo
        this.load.image("rose", "rose.png"); //alias y archivo
        this.load.image("fondo", "fondo.png");


        //abajo
        this.load.image("gokub_1", "gokublue.png"); //alias y archivo
        this.load.image("bardock_1", "bardock.png"); //alias y archivo
        this.load.image("broly", "broly.png"); //alias y archivo
        this.load.image("gogeta_1", "gogeta.png"); //alias y archivo
        this.load.image("gyk_1", "gyk.png");
        this.load.image("black_1", "black.png"); //alias y archivo
        this.load.image("broly_1", "broly.png"); //alias y archivo
        this.load.image("rose_1", "rose.png"); //alias y archivo
        this.load.image("vegeta_1", "vegeta.png");
        //atras
        this.load.image("carta", "carta.png");
        this.load.image("carta1", "carta.png");
        this.load.image("carta2", "carta.png");
        this.load.image("carta3", "carta.png");
        this.load.image("carta4", "carta.png");
        this.load.image("carta5", "carta.png");
        this.load.image("carta6", "carta.png");
        this.load.image("carta7", "carta.png");
        this.load.image("carta8", "carta.png");
        this.load.image("carta9", "carta.png");
        this.load.image("carta10", "carta.png");
        this.load.image("carta11", "carta.png");
        this.load.image("carta12", "carta.png");
        this.load.image("carta13", "carta.png");
        this.load.image("carta14", "carta.png");
        this.load.image("carta15", "carta.png");
        this.load.image("carta16", "carta.png");
        this.load.image("carta17", "carta.png");
        this.load.image("carta18", "carta.png");
        this.load.image("carta19", "carta.png");
        this.load.image("sheng", "sheng.png");

    }
    create() {


        this.musica1 = this.sound.add("musica");
            this.musica1.play();
        this.fondo = this.add.image(0,0, "fondo" );
            this.fondo.setScale(1,1);
            this.fondo.setOrigin(0,0);
        this.goku4 = this.add.image(100, 150, "goku4").setInteractive();
        this.bardock = this.add.image(230, 150, "bardock").setInteractive();
        this.black = this.add.image(360, 150, "black").setInteractive();
        this.goku4_1 =  this.add.image(490, 150, "goku4_1").setInteractive();
        this.gohan =  this.add.image(620, 150, "gohan").setInteractive();
        this.gogeta =  this.add.image(750, 150, "gogeta").setInteractive();
        this.gokublue = this.add.image(880, 150, "gokub").setInteractive();
        this.vegeta = this.add.image(1010, 150, "vegeta").setInteractive();
        this.gohan_1 =  this.add.image(1140, 150, "gohan_1").setInteractive();
        this.rose =  this.add.image(1270, 150, "rose").setInteractive();


        //abajo
        this.gokublue_1 = this.add.image(100, 400, "gokub_1").setInteractive();
        this.bardock_1 = this.add.image(230, 400, "bardock_1").setInteractive();
        this.broly = this.add.image(360, 400, "broly").setInteractive();
        this.gogeta_1 = this.add.image(490, 400, "gogeta_1").setInteractive();
        this.gyk_1 = this.add.image(620, 400, "gyk_1").setInteractive();
        this.black_1 = this.add.image(750, 400, "black_1").setInteractive();
        this.broly_1 = this.add.image(880, 400, "broly_1").setInteractive();
        this.rose_1 =  this.add.image(1010, 400, "rose_1").setInteractive();
        this.gyk = this.add.image(1140, 400, "gyk").setInteractive();
        this.vegeta_1 = this.add.image(1270, 400, "vegeta_1").setInteractive();

        //cartas
        this.carta = this.add.image(100, 150, "carta").setInteractive();    
        this.carta.name="goku4";
        this.carta1 = this.add.image(230, 150, "carta1").setInteractive();
        this.carta1.name="bardock";
        this.carta2 = this.add.image(360, 150, "carta2").setInteractive();
        this.carta2.name="black";
        this.carta3 = this.add.image(490, 150, "carta3").setInteractive();
        this.carta3.name="goku4";
        this.carta4 = this.add.image(620, 150, "carta4").setInteractive();
        this.carta4.name="gohan";
        this.carta5 = this.add.image(750, 150, "carta5").setInteractive();
        this.carta5.name="gogeta";
        this.carta6 = this.add.image(880, 150, "carta6").setInteractive();
        this.carta6.name="gokub";
        this.carta7 = this.add.image(1010, 150, "carta7").setInteractive();
        this.carta7.name="vegeta";
        this.carta8 = this.add.image(1140, 150, "carta8").setInteractive();
        this.carta8.name="gohan";
        this.carta9 = this.add.image(1270, 150, "carta9").setInteractive();
        this.carta9.name="rose";
        this.carta10 = this.add.image(100, 400, "carta10").setInteractive();
        this.carta10.name="gokub";
        this.carta11 = this.add.image(230, 400, "carta11").setInteractive();
        this.carta11.name="bardock";
        this.carta12 = this.add.image(360, 400, "carta12").setInteractive();
        this.carta12.name="broly";
        this.carta13 = this.add.image(490, 400, "carta13").setInteractive();
        this.carta13.name="gogeta";
        this.carta14 = this.add.image(620, 400, "carta14").setInteractive();
        this.carta14.name="gyk";
        this.carta15 = this.add.image(750, 400, "carta15").setInteractive();
        this.carta15.name="black";
        this.carta16 = this.add.image(880, 400, "carta16").setInteractive();
        this.carta16.name="broly";
        this.carta17 = this.add.image(1010, 400, "carta17").setInteractive();
        this.carta17.name="rose";
        this.carta18 = this.add.image(1140, 400, "carta18").setInteractive();
        this.carta18.name="gyk";
        this.carta19 = this.add.image(1270, 400, "carta19").setInteractive();
        this.carta19.name="vegeta";



        this.goku4.setScale(.6,.8);
        this.bardock.setScale(.6,.8);
        this.black.setScale(.6,.8);
        this.goku4_1.setScale(.6,.8);
        this.gohan.setScale(.6,.8);
        this.gogeta.setScale(.6,.8);
        this.gokublue.setScale(.6,.8);
        this.vegeta.setScale(.6,.8);
        this.gyk.setScale(.6,.8);
        this.gohan_1.setScale(.6,.8);
        this.rose.setScale (.6,.8);

        //abajo
        this.gokublue_1.setScale(.6,.8);
        this.bardock_1.setScale(.6,.8);
        this.broly.setScale(.6,.8);
        this.gogeta_1.setScale(.6,.8);
        this.gyk_1.setScale(.6,.8);
        this.black_1.setScale(.6,.8);
        this.broly_1.setScale(.6,.8);
        this.rose_1.setScale (.6,.8);
        this.vegeta_1.setScale(.6,.8);

        //carta
        this.carta.setScale(.6,.8);
        this.carta1.setScale(.6,.8);
        this.carta2.setScale(.6,.8);
        this.carta3.setScale(.6,.8);
        this.carta4.setScale(.6,.8);
        this.carta5.setScale(.6,.8);
        this.carta6.setScale(.6,.8);
        this.carta7.setScale(.6,.8);
        this.carta8.setScale(.6,.8);
        this.carta9.setScale(.6,.8);
        this.carta10.setScale(.6,.8);
        this.carta11.setScale(.6,.8);
        this.carta12.setScale(.6,.8);
        this.carta13.setScale(.6,.8);
        this.carta14.setScale(.6,.8);
        this.carta15.setScale(.6,.8);
        this.carta16.setScale(.6,.8);
        this.carta17.setScale(.6,.8);
        this.carta18.setScale(.6,.8);
        this.carta19.setScale(.6,.8);

//sobre las cartas

   










//vuelta a las cartas
/*

        const eventos = Phaser.Input.Events;///creamos la constante eventos
        const teclado = Phaser.Input.Keyboard;
        this.cont=0;
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
        {
            if(this.carta==GameObject)
            {
             this.carta.setVisible(false);
             this.cont++;
             console.log(this.cont);
             this.id=1;
            }
            if(this.carta1==GameObject)
            {
                this.carta1.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id2=2;
            }
            if(this.carta2==GameObject)
            {
                this.carta2.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id3=3;
            }
            if(this.carta3==GameObject)
            {
                this.carta3.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id4=1;
            }
            if(this.carta4==GameObject)
            {
                this.carta4.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id5=4;
            }
            if(this.carta5==GameObject)
            {
                this.carta5.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id6=5;
            }
            if(this.carta6==GameObject)
            {
                this.carta6.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id7=6;
            }
            if(this.carta7==GameObject)
            {
                this.carta7.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id8=7;
            }
            if(this.carta8==GameObject)
            {
                this.carta8.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id9=5;
            }
            if(this.carta9==GameObject)
            {
                this.carta9.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id10=10;
            }
            if(this.carta10==GameObject)
            {
                this.carta10.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id11=6;
            }
            if(this.carta11==GameObject)
            {
                this.carta11.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id12=2;
            }
            if(this.carta12==GameObject)
            {
                this.carta12.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id13=13;
            }
            if(this.carta13==GameObject)
            {
                this.carta13.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id14=5;
            }
            if(this.carta14==GameObject)
            {
                this.carta14.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id15=15;
            }
            if(this.carta15==GameObject)
            {
                this.carta15.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id16=3;
            }
            if(this.carta16==GameObject)
            {
                this.carta16.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id17=13;
            }
            if(this.carta17==GameObject)
            {
                this.carta17.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id18=10;
            }
            if(this.carta18==GameObject)
            {
                this.carta18.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id19=15;
            }
            if(this.carta19==GameObject)
            {
                this.carta19.setVisible(false);
                this.cont++;
                console.log(this.cont);
                this.id20=7;
            }
            if(this.id==this.id4 || this.id4==this.id)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
                
            }
            
            
            if(this.id2==this.id11 || this.id11==this.id2)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id3==this.id15 || this.id15==this.id3)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id5==this.id9 || this.id9==this.id5)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id6==this.id14 || this.id14==this.id6)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id7==this.id11 || this.id7==this.id11)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id9==this.id18 || this.id17==this.id9)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id13==this.id17 || this.id17==this.id13)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }
            if(this.id15==this.id19 || this.id19==this.id15)
            {
                console.log('coincidencia');
            }
            else{
                console.log('');
            }

        });
        this.carta.on(eventos.POINTER_MOVE, (evento) => {
            this.carta.setScale(.8,1);
            });
            this.carta.on(eventos.POINTER_OUT, (evento) => {
                this.carta.setScale(.6,.8);
                });
         
        this.carta1.on(eventos.POINTER_MOVE, (evento) => {
            this.carta1.setScale(.8,1);
            });
            this.carta1.on(eventos.POINTER_OUT, (evento) => {
                this.carta1.setScale(.6,.8);
                });
         
        this.carta2.on(eventos.POINTER_MOVE, (evento) => {
            this.carta2.setScale(.8,1);
            });
            this.carta2.on(eventos.POINTER_OUT, (evento) => {
                this.carta2.setScale(.6,.8);
                });
                 
        this.carta3.on(eventos.POINTER_MOVE, (evento) => {
            this.carta3.setScale(.8,1);
            });
            this.carta3.on(eventos.POINTER_OUT, (evento) => {
                this.carta3.setScale(.6,.8);
                });
         
        this.carta4.on(eventos.POINTER_MOVE, (evento) => {
            this.carta4.setScale(.8,1);
            });
            this.carta4.on(eventos.POINTER_OUT, (evento) => {
                this.carta4.setScale(.6,.8);
                });
         
        this.carta5.on(eventos.POINTER_MOVE, (evento) => {
            this.carta5.setScale(.8,1);
            });
            this.carta5.on(eventos.POINTER_OUT, (evento) => {
                this.carta5.setScale(.6,.8);
                });
                 
        this.carta6.on(eventos.POINTER_MOVE, (evento) => {
            this.carta6.setScale(.8,1);
            });
            this.carta6.on(eventos.POINTER_OUT, (evento) => {
                this.carta6.setScale(.6,.8);
                });
         
        this.carta7.on(eventos.POINTER_MOVE, (evento) => {
            this.carta7.setScale(.8,1);
            });
            this.carta7.on(eventos.POINTER_OUT, (evento) => {
                this.carta7.setScale(.6,.8);
                });
         
        this.carta8.on(eventos.POINTER_MOVE, (evento) => {
            this.carta8.setScale(.8,1);
            });
            this.carta8.on(eventos.POINTER_OUT, (evento) => {
                this.carta8.setScale(.6,.8);
                });
         
        this.carta9.on(eventos.POINTER_MOVE, (evento) => {
            this.carta9.setScale(.8,1);
            });
            this.carta9.on(eventos.POINTER_OUT, (evento) => {
                this.carta9.setScale(.6,.8);
                });
         
        this.carta10.on(eventos.POINTER_MOVE, (evento) => {
            this.carta10.setScale(.8,1);
            });
            this.carta10.on(eventos.POINTER_OUT, (evento) => {
                this.carta10.setScale(.6,.8);
                });
                 
        this.carta11.on(eventos.POINTER_MOVE, (evento) => {
            this.carta11.setScale(.8,1);
            });
            this.carta11.on(eventos.POINTER_OUT, (evento) => {
                this.carta11.setScale(.6,.8);
                });
         
        this.carta12.on(eventos.POINTER_MOVE, (evento) => {
            this.carta12.setScale(.8,1);
            });
            this.carta12.on(eventos.POINTER_OUT, (evento) => {
                this.carta12.setScale(.6,.8);
                });
         
        this.carta13.on(eventos.POINTER_MOVE, (evento) => {
            this.carta13.setScale(.8,1);
            });
            this.carta13.on(eventos.POINTER_OUT, (evento) => {
                this.carta13.setScale(.6,.8);
                });
         
        this.carta14.on(eventos.POINTER_MOVE, (evento) => {
            this.carta14.setScale(.8,1);
            });
            this.carta14.on(eventos.POINTER_OUT, (evento) => {
                this.carta14.setScale(.6,.8);
                });
         
        this.carta15.on(eventos.POINTER_MOVE, (evento) => {
            this.carta15.setScale(.8,1);
            });
            this.carta15.on(eventos.POINTER_OUT, (evento) => {
                this.carta15.setScale(.6,.8);
                });
         
        this.carta16.on(eventos.POINTER_MOVE, (evento) => {
            this.carta16.setScale(.8,1);
            });
            this.carta16.on(eventos.POINTER_OUT, (evento) => {
                this.carta16.setScale(.6,.8);
                });
         
        this.carta17.on(eventos.POINTER_MOVE, (evento) => {
            this.carta17.setScale(.8,1);
            });
            this.carta17.on(eventos.POINTER_OUT, (evento) => {
                this.carta17.setScale(.6,.8);
                });
         
        this.carta18.on(eventos.POINTER_MOVE, (evento) => {
            this.carta18.setScale(.8,1);
            });
            this.carta18.on(eventos.POINTER_OUT, (evento) => {
                this.carta18.setScale(.6,.8);
                });
         
        this.carta19.on(eventos.POINTER_MOVE, (evento) => {
            this.carta19.setScale(.8,1);
            });
            this.carta19.on(eventos.POINTER_OUT, (evento) => {
                this.carta19.setScale(.6,.8);
                });
   
            */
           //sobre las cartas
           this.texto = "Esferas: "  ;
this.stilo = {fill: "#ffffff"};
this.stilo1 = {fill: "#ffffff", align: "center"};


this.textomostrao = this.add.text(0,0, this.texto, this.stilo);

   


//vuelta a las cartas
        const eventos = Phaser.Input.Events;///creamos la constante eventos
        const teclado = Phaser.Input.Keyboard;
        this.cont=0;
        this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
        {
            
            if(GameObject.name != "")
            {
                if(this.contador < 2)
            {
                console.log(GameObject.name);
                GameObject.setVisible(false);
                this.cartas[this.contador] = GameObject;
                this.contador++;

                
            }
            if(this.contador > 1)
            {
                this.input.mouse.requestPointerLock();
                setTimeout(() => {
                    if(this.cartas[0].name == this.cartas[1].name)
                {
                    console.log("Coincidencia");
                    this.aciertos++;
                    if(this.aciertos == 10)
                    {
                        this.textomostrao.destroy();
                        this.texto = "Invocaste a Sheng Long";
                        this.sheng = this.add.image(0,0, "sheng" );
                        this.sheng.setScale(1,1);
                        this.sheng.setOrigin(0,0);
                        this.textomostrao = this.add.text(750,300, this.texto, this.stilo1);
                        
                    }
                    else
                    {
                    this.texto = "Esferas: "+this.aciertos;
                    this.textomostrao.destroy();
                    this.textomostrao = this.add.text(0,0, this.texto, this.stilo);
                    console.log(this.texto);
                    }
                    
                }
                else
                {
                    this.cartas[0].setVisible(true);
                    this.cartas[1].setVisible(true);
                    
                
                }
                this.contador=0;
                this.input.mouse.releasePointerLock();
                }, 200);
                
            }
            }
            
        });
        

   
           this.carta.on(eventos.POINTER_MOVE, (evento) => {
            this.carta.setScale(.8,1);
            });
            this.carta.on(eventos.POINTER_OUT, (evento) => {
                this.carta.setScale(.6,.8);
                });
         
        this.carta1.on(eventos.POINTER_MOVE, (evento) => {
            this.carta1.setScale(.8,1);
            });
            this.carta1.on(eventos.POINTER_OUT, (evento) => {
                this.carta1.setScale(.6,.8);
                });
         
        this.carta2.on(eventos.POINTER_MOVE, (evento) => {
            this.carta2.setScale(.8,1);
            });
            this.carta2.on(eventos.POINTER_OUT, (evento) => {
                this.carta2.setScale(.6,.8);
                });
                 
        this.carta3.on(eventos.POINTER_MOVE, (evento) => {
            this.carta3.setScale(.8,1);
            });
            this.carta3.on(eventos.POINTER_OUT, (evento) => {
                this.carta3.setScale(.6,.8);
                });
         
        this.carta4.on(eventos.POINTER_MOVE, (evento) => {
            this.carta4.setScale(.8,1);
            });
            this.carta4.on(eventos.POINTER_OUT, (evento) => {
                this.carta4.setScale(.6,.8);
                });
         
        this.carta5.on(eventos.POINTER_MOVE, (evento) => {
            this.carta5.setScale(.8,1);
            });
            this.carta5.on(eventos.POINTER_OUT, (evento) => {
                this.carta5.setScale(.6,.8);
                });
                 
        this.carta6.on(eventos.POINTER_MOVE, (evento) => {
            this.carta6.setScale(.8,1);
            });
            this.carta6.on(eventos.POINTER_OUT, (evento) => {
                this.carta6.setScale(.6,.8);
                });
         
        this.carta7.on(eventos.POINTER_MOVE, (evento) => {
            this.carta7.setScale(.8,1);
            });
            this.carta7.on(eventos.POINTER_OUT, (evento) => {
                this.carta7.setScale(.6,.8);
                });
         
        this.carta8.on(eventos.POINTER_MOVE, (evento) => {
            this.carta8.setScale(.8,1);
            });
            this.carta8.on(eventos.POINTER_OUT, (evento) => {
                this.carta8.setScale(.6,.8);
                });
         
        this.carta9.on(eventos.POINTER_MOVE, (evento) => {
            this.carta9.setScale(.8,1);
            });
            this.carta9.on(eventos.POINTER_OUT, (evento) => {
                this.carta9.setScale(.6,.8);
                });
         
        this.carta10.on(eventos.POINTER_MOVE, (evento) => {
            this.carta10.setScale(.8,1);
            });
            this.carta10.on(eventos.POINTER_OUT, (evento) => {
                this.carta10.setScale(.6,.8);
                });
                 
        this.carta11.on(eventos.POINTER_MOVE, (evento) => {
            this.carta11.setScale(.8,1);
            });
            this.carta11.on(eventos.POINTER_OUT, (evento) => {
                this.carta11.setScale(.6,.8);
                });
         
        this.carta12.on(eventos.POINTER_MOVE, (evento) => {
            this.carta12.setScale(.8,1);
            });
            this.carta12.on(eventos.POINTER_OUT, (evento) => {
                this.carta12.setScale(.6,.8);
                });
         
        this.carta13.on(eventos.POINTER_MOVE, (evento) => {
            this.carta13.setScale(.8,1);
            });
            this.carta13.on(eventos.POINTER_OUT, (evento) => {
                this.carta13.setScale(.6,.8);
                });
         
        this.carta14.on(eventos.POINTER_MOVE, (evento) => {
            this.carta14.setScale(.8,1);
            });
            this.carta14.on(eventos.POINTER_OUT, (evento) => {
                this.carta14.setScale(.6,.8);
                });
         
        this.carta15.on(eventos.POINTER_MOVE, (evento) => {
            this.carta15.setScale(.8,1);
            });
            this.carta15.on(eventos.POINTER_OUT, (evento) => {
                this.carta15.setScale(.6,.8);
                });
         
        this.carta16.on(eventos.POINTER_MOVE, (evento) => {
            this.carta16.setScale(.8,1);
            });
            this.carta16.on(eventos.POINTER_OUT, (evento) => {
                this.carta16.setScale(.6,.8);
                });
         
        this.carta17.on(eventos.POINTER_MOVE, (evento) => {
            this.carta17.setScale(.8,1);
            });
            this.carta17.on(eventos.POINTER_OUT, (evento) => {
                this.carta17.setScale(.6,.8);
                });
         
        this.carta18.on(eventos.POINTER_MOVE, (evento) => {
            this.carta18.setScale(.8,1);
            });
            this.carta18.on(eventos.POINTER_OUT, (evento) => {
                this.carta18.setScale(.6,.8);
                });
         
        this.carta19.on(eventos.POINTER_MOVE, (evento) => {
            this.carta19.setScale(.8,1);
            });
            this.carta19.on(eventos.POINTER_OUT, (evento) => {
                this.carta19.setScale(.6,.8);
                });
           
           
        
        }
    
        
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        
      
    }
}

export default Bootloader