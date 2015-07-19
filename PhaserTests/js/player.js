function Player(x,y){
	player = game.add.sprite(x,y, 'zealot');

	player.scale.setTo(2,2);
	player.anchor.setTo(.5,.5);
	//Our animations, walking left and right.
	player.animations.add('right',[4,13,22,31,40,49,58,67],20,true);
	player.animations.add('up',[0,9,18,27,36,45,54,63],20,true);
	player.animations.add('down',[8,17,26,35,44,53,62,71],20,true);
	// We need to enable physics on the player
	game.physics.arcade.enable(player);
	player.body.setSize(18,28);

	return player;
}


function updatePlayer(player){
	cursors = game.input.keyboard.createCursorKeys();

	// Reset the players velocity (movement)
	player.body.velocity.x = 0;
	player.body.velocity.y = 0;

	if(game.input.pointer1.positionDown.x > game.input.pointer1.x && game.input.pointer1.x != -1){
		player.scale.x = -2;
		player.body.velocity.x = -300;
		player.animations.play('right');
	}else if(game.input.pointer1.positionDown.x < game.input.pointer1.x && game.input.pointer1.x != -1){
		player.scale.x = 2;
		player.body.velocity.x = 300;
		player.animations.play('right');
	}if(game.input.pointer1.positionDown.y > game.input.pointer1.y && game.input.pointer1.y != -1){
		player.body.velocity.y = -300;
		player.animations.play('up');
	}else if(game.input.pointer1.positionDown.y < game.input.pointer1.y && game.input.pointer1.y != -1){
		player.body.velocity.y = 300;
		player.animations.play('down');
	}else{
		player.animations.stop();
		player.frame = 8;
	}
}