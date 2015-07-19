var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
	game.load.image('ground', 'assets/background1.jpg');
	game.load.spritesheet('zealot', 'assets/zealot.png', 39, 41);
}

var player;
var zealots;

function create() {
	
	game.input.addPointer();

	game.physics.startSystem(Phaser.Physics.ARCADE);

	ground = game.add.sprite(0,0,'ground');
	ground.height = game.height;
	ground.width = game.width;

	player = Zealot(game.width/2,game.height/2);
	player.body.collideWorldBounds = true;

	zealots = game.add.group();
	//zealots.enableBody = true;
}

function update() {

	if(Math.random() > 0.5){
		var zealot = Zealot(game.width,game.height*Math.random());
		zealots.add(zealot);
	}

	game.physics.arcade.collide(player,zealots);
	game.physics.arcade.collide(zealots,zealots);
	updatePlayer(player);
	zealots.forEachAlive(updateZealot,this,player);
}

function render(){
	game.debug.body(player);
	game.debug.pointer(game.input.pointer1);
}