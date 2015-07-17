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
	zealot.body.setSize(18,28);
	zealot.body.collideWorldBounds = true;
	

	return zealot;
}

var zealotSpeed = 300;

function updateZealot(zealot,player){
	// Reset the zealots velocity (movement)
	zealot.body.velocity.x = 0;
	zealot.body.velocity.y = 0;

	if(player.body.x < zealot.body.x && inAttackRangeX(zealot,player)){
		zealot.scale.x = -2;
		zealot.body.velocity.x = -zealotSpeed;
		zealot.animations.play('right');
	}else if(player.body.x > zealot.body.x && inAttackRangeX(zealot,player)){
		zealot.scale.x = 2;
		zealot.body.velocity.x = zealotSpeed;
		zealot.animations.play('right');
	}else if(player.body.y < zealot.body.y  && inAttackRangeY(zealot,player)){
		zealot.body.velocity.y = -zealotSpeed;
		zealot.animations.play('up');
	}else if(player.body.y > zealot.body.y && inAttackRangeY(zealot,player)){
		zealot.body.velocity.y = zealotSpeed;
		zealot.animations.play('down');
	}else{
		zealot.animations.stop();
		zealot.frame = 8;
	}
}

function inAttackRangeX(zealot,player){
	var rangeX = zealot.body.width/2;
	return Math.abs(player.body.x - zealot.body.x) > rangeX;
}

function inAttackRangeY(zealot,player){
	var rangeY = zealot.body.height/2;
	return Math.abs(player.body.y - zealot.body.y) > rangeY;
}