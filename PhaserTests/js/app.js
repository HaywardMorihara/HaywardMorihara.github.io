var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.spritesheet('zealot', 'assets/zealot.png', 39, 41);
	game.load.audio('penguinStep','assets/PenguinStep1.wav');
	//game.load.audio('music','assets/TheBlueSkiesYonder.mp3');
	game.load.spritesheet('penguin','assets/penguin-mario.png',25,34 )
}

var player;
var penguins;

function create() {

	game.stage.backgroundColor = '#ffffff';

	moveSound = game.add.audio('penguinStep');
	//music = game.add.audio('music');
	//music.play();
	
	game.input.addPointer();

	game.physics.startSystem(Phaser.Physics.ARCADE);

	

	player = Player(game.width/2,game.height/2);
	player.body.collideWorldBounds = true;

	penguins = game.add.group();
	//zealots.enableBody = true;
}

function update() {

	if(Math.random() > 0.75){
		var penguin = Penguin(game.width,game.height*Math.random());
		penguins.add(penguin);
	}

	game.physics.arcade.collide(player,penguins);
	game.physics.arcade.collide(penguin,penguins);
	updatePlayer(player);
	penguins.forEachAlive(updatePenguin,this,player);
}

function render(){
	game.debug.body(player);
	game.debug.pointer(game.input.pointer1);
}