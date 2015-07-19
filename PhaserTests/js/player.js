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