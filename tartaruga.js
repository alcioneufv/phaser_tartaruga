var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        update: update,
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
    
    cursors = this.input.keyboard.createCursorKeys();


    // Cria a tartaruga
    //*******************
    this.anims.create({ key: 'idle', frames: this.anims.generateFrameNumbers('tarta', { start: 0, end: 1 }), frameRate: 5, repeat: -1 });
    this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('tarta',  { start: 6, end: 7 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('tarta', { start: 4, end: 5 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'up', frames: this.anims.generateFrameNumbers('tarta',  { start: 0, end: 1 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'down', frames: this.anims.generateFrameNumbers('tarta',  { start: 2, end: 3 }), frameRate: 10, repeat: -1 });
    
    player = this.physics.add.sprite(300, 300, 'tarta').play('idle');

    player.setCollideWorldBounds(true);

    // Cria a formiga
    //******************
    this.anims.create({ key: 'fidle', frames: this.anims.generateFrameNumbers('formiga', { frames: [ 0, 1 ] }), frameRate: 5, repeat: -1 });
    this.anims.create({ key: 'fleft', frames: this.anims.generateFrameNumbers('formiga', { frames: [ 0, 1 ] }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'fright', frames: this.anims.generateFrameNumbers('formiga', { frames: [ 2, 3 ] }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'fup', frames: this.anims.generateFrameNumbers('formiga', { frames: [ 4, 5 ] }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'fdown', frames: this.anims.generateFrameNumbers('formiga', { frames: [ 6, 7 ] }), frameRate: 10, repeat: -1 });

    formiga = this.physics.add.sprite(50, 50, 'formiga').play('fidle');
    formiga.setCollideWorldBounds(true);
    
    this.physics.add.collider(player, formiga);
}

function update ()
{
    let n = Math.floor(Math.random() * 20);
    
    if (n==1)
    {
        formiga.setVelocityX(0);
        formiga.setVelocityY(0);
        n = Math.floor(Math.random() * 11) % 5
        if (n==0) { formiga.play('fidle'); }
        if (n==1) { formiga.play('fleft'); formiga.setVelocityX(-100);}
        if (n==2) { formiga.play('fright'); formiga.setVelocityX(100);}
        if (n==3) { formiga.play('fup'); formiga.setVelocityY(-100);}
        if (n==4) { formiga.play('fdown'); formiga.setVelocityY(100);}
    }
    
    player.setVelocityX(0);
    player.setVelocityY(0);
    
    if (cursors.left.isDown)
    {
        player.setVelocityX(-300);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(300);
        player.anims.play('right', true);
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-300);
        player.anims.play('up', true);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(300);
        player.anims.play('down', true);
    }
}
