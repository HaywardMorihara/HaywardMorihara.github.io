function Zealot(x,y){
	zealot = game.add.sprite(x,y, 'zealot');
	zealot.scale.set(2,2);
	zealot.anchor.setTo(.5,.5);
	//Our animations, walking left and right.
	zealot.animations.add('right',[4,13,22,31,40,49,58,67],20,true);
	zealot.animations.add('up',[0,9,18,27,36,45,54,63],20,true);
	zealot.animations.add('down',[8,17,26,35,44,53,62,71],20,true);
	// We need to enable physics on the player
	game.physics.arcade.enable(zealot);

	

	return zealot;
}

function updateZealot(zealot){
	cursors = game.input.keyboard.createCursorKeys();

	// Reset the zealots velocity (movement)
	zealot.body.velocity.x = 0;
	zealot.body.velocity.y = 0;

	if(cursors.left.isDown){
		zealot.scale.x = -2;
		zealot.body.velocity.x = -300;
		zealot.animations.play('right');
	}else if(cursors.right.isDown){
		zealot.scale.x = 2;
		zealot.body.velocity.x = 300;
		zealot.animations.play('right');
	}else if(cursors.up.isDown){
		zealot.body.velocity.y = -300;
		zealot.animations.play('up');
	}else if(cursors.down.isDown){
		zealot.body.velocity.y = 300;
		zealot.animations.play('down');
	}else{
		zealot.animations.stop();
		zealot.frame = 8;
	}
}
