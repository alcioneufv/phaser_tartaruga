var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet('formiga', 'ant.png', { frameWidth: 25, frameHeight: 25 });
    this.load.spritesheet('tarta', 'Turtle.png', { frameWidth: 50, frameHeight: 50 });
    this.load.image('rochas', 'rochas.png');

}

var cursors;
var player;
var formiga;
var direcao;

const keys = [  'idle', 'left', 'right', 'up', 'down' ];

function create() {

    back = this.add.image(300, 300, 'rochas');

    // Cria a tartaruga
    //*******************

    this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('tarta', { frames: [ 0, 1 ] }),
            frameRate: 8,
            repeat: -1
        });
    
    this.add.sprite(0, 0, 'tarta')
            .play('idle');
    /*
    player = this.add.sprite(50, 50, 'tarta', 1);

    player.animations.add('left', [6,7], 10, true);
    player.animations.add('right', [4,5], 10, true);
    player.animations.add('up', [0,1], 10, true);
    player.animations.add('down', [2,3], 10, true);

    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.set(1);
    player.body.collideWorldBounds = true;
*/
    //  Cria o signal de colisao
 //   player.body.onWorldBounds = new Phaser.Signal();

    //  escuta o sinal
//    player.body.onWorldBounds.add(hitWorldBounds, this);

    // Cria a formiga
    //******************
/*    formiga = game.add.sprite(100, 100, 'formiga', 1);
    formiga.smoothed = false;

    formiga.animations.add('downf', [6,7], 10, true);
    formiga.animations.add('upf', [4,5], 10, true);
    formiga.animations.add('leftf', [0,1], 10, true);
    formiga.animations.add('rightf', [2,3], 10, true);

    game.physics.enable(formiga, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    */
}

/*
function hitWorldBounds (sprite) {

    sprite.play('flash');
}

function update() {

    player.body.velocity.set(0);
    formiga.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x =  -100;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 100;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }

    d=Math.floor(Math.random()*100)%50;

   if (d==10 || d==20 || d==30 || d ==40 || d==41) {
        direcao=d;
   }
    
    if (direcao==10) {
        formiga.x =  Math.max(0, formiga.x-5);
        formiga.play('leftf',20,true);
    } else if (direcao==20){
        formiga.x =  Math.min(game.world.width, formiga.x+5);
        formiga.play('rightf',20,true);
    } else if (direcao==30){
        formiga.y =  Math.max(0, formiga.y-5);
        formiga.play('upf',20,true);
    } else if (direcao==40){
        formiga.y =  Math.min(game.world.height, formiga.y+5);
        formiga.play('downf',20,true);
    } else  if (direcao==41) {
         formiga.animations.stop(); 
    }

    game.physics.arcade.collide(player, formiga, collisionHandler, null, this);

}

function collisionHandler (obj1, obj2) {

    formiga.x=30;
    formiga.y=30;

}

function render() {

    game.debug.text(direcao, 32, 32);

}
*/
