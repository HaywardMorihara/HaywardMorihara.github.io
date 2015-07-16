var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('ground', 'assets/background1.jpg');
	game.load.spritesheet('zealot', 'assets/zealot.png', 39, 41);
}

var player;

function create() {
	
	//We're going to be using physics, so enable the Arcade Physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);

	// A simple background for our game
	ground = game.add.sprite(0,0,'ground');
	ground.height = game.height;
	ground.width = game.width;

	// The player and its settings
	player = Zealot(game.width/2,game.height/2)
}

function update() {
	updateZealot(player);
}