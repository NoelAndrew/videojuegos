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
    }

    createOLD() {
        this.yoshi = this.add.image(100, 100, 'yoshi');
        this.yoshif = this.add.image(160, 100, 'yoshif');
        this.tweens = this.add.tween({
            targets: [this.yoshi/*, this.yoshif*/],
            //ease: 'Bounce',
            y: 300,
           /* x: {
            value: 200,
            ease: 'Elastic',
            duration: 3000
            },*/
            repeat: 0,
            //yoyo: true,
            //delay: 1000,
            //hold: 1000,
            //repeatDelay: 1000,
            //duration: 5000,
            onComplete: (tween, obj, target) => {
                target.setTint(0xff0000);
                console.log('Se completa el tween');
                },
                onCompleteParams: [this.yoshi]
                
            
            });
    }
    create() {
        this.yoshi = this.add.image(100, 100, 'yoshi');
        this.timeline = this.tweens.createTimeline();
        /*this.timeline.add({
        targets: [this.yoshi],
        x: 300
        });*/
        /*this.timeline.add({
            targets: [this.yoshi],
            
            x: 300,
            ease: 'Bounce'
            });
            this.timeline.add({
            targets: [this.yoshi],
            y: 300
            });
            this.timeline.add({
            targets: [this.yoshi],
            x: 100
            });
            this.timeline.add({
            targets: [this.yoshi],
            y: 100
            });
            this.timeline.play();*/
            this.timeline = this.tweens.timeline({
                targets: [this.yoshi],
                paused: true,
                loop: -1,

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
                x: 100
                },
                {
                y: 100
                }
                ]
                });
                this.timeline.play();

        }


    update(time, delta) {
        
    }
}

export default Bootloader;