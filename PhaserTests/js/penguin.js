function Penguin(x,y){
	penguin = game.add.sprite(x,y, 'penguin');

	penguin.scale.set(3,3);
	penguin.anchor.setTo(.5,.5);
	//Our animations, walking left and right.
	//zealot.animations.add('right',[4,13,22,31,40,49,58,67],20,true);
	//zealot.animations.add('up',[0,9,18,27,36,45,54,63],20,true);
	//zealot.animations.add('down',[8,17,26,35,44,53,62,71],20,true);
	// We need to enable physics on the player
	game.physics.arcade.enable(penguin);
	//zealot.body.setSize(18,28);

	penguin.animations.add('left',[0,1,2,3,4,5,6,7],20,true);

	return penguin;
}

var penguinSpeed = 200;

function updatePenguin(penguin,player){

	if(penguin.body.x < 0){
		//Are they actually getting killed?
		penguin.kill();
	}

	// Reset the penguin's velocity (movement)
	penguin.body.velocity.x = 0;
	penguin.body.velocity.y = 0;

	penguin.body.velocity.x = -penguinSpeed;
	penguin.animations.play('left');

	moveSound.play('',0,1,false,false);

	/*
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
	*/
}

function inAttackRangeX(zealot,player){
	var rangeX = zealot.body.width/2;
	return Math.abs(player.body.x - zealot.body.x) > rangeX;
}

function inAttackRangeY(zealot,player){
	var rangeY = zealot.body.height/2;
	return Math.abs(player.body.y - zealot.body.y) > rangeY;
}