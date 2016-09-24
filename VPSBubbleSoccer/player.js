var playerScale = .75;
var playerSpeedValue = 10;
var playerDampeningValue = 10;
var playerBounce = .5;

function initializePlayer(game,playerNumber,x,y) {
    var playerGroup = game.add.group();

    var player = playerGroup.create(x,y,'player'+playerNumber);
    player.scale.setTo(playerScale,playerScale);
    player.speedValue = playerSpeedValue;
    player.dampening = playerDampeningValue;
    player.playerNumber = playerNumber

    player.bubble = playerGroup.create(x,y,'bubble');
    player.bubble.scale.setTo(playerScale,playerScale);
    playerGroup.sendToBack(player.bubble);

    return player;
}

function initializePlayerAnim(player) {
    player.walkingRightAnim = player.animations.add('player_walking_right',[0,1,2,3,4,5,6]);
    player.walkingUpAnim = player.animations.add('player_walking_up',[7,8,9,10,11,12,13]);
    player.walkingDownAnim = player.animations.add('player_walking_down',[14,15,16,17,18,19,20]);
    player.walkingLeftAnim = player.animations.add('player_walking_left',[21,22,23,24,25,26,27]);
}

function initializePlayerPhysics(player) {
    player.body.bounce.setTo(playerBounce,playerBounce);
    player.body.collideWorldBounds = true;
    //player.body.setSize(0,0,30,30);
    //player.body.setCircle(45);
}

function updatePlayer(player, controller) {
	var cStickLR = determineCStickLR(controller,player);
    var cStickUD = determineCStickUD(controller,player);

	if(player.body.velocity.x > 0 && cStickLR <= 0) {
		if (player.body.velocity.x - player.dampening < 0) {
			player.body.velocity.x = 0;
		}else{
			player.body.velocity.x -= player.dampening;
		}
	}else if(player.body.velocity.x < 0 && cStickLR >= 0) {
		if (player.body.velocity.x + player.dampening > 0) {
			player.body.velocity.x = 0;
		}else{
			player.body.velocity.x += player.dampening;
		}
	}
	player.body.velocity.x += cStickLR * player.speedValue;

	if(player.body.velocity.y > 0 && cStickUD <=0) {
		if (player.body.velocity.y - player.dampening < 0) {
			player.body.velocity.y = 0;
		}else{
			player.body.velocity.y -= player.dampening;
		}
	} else if(player.body.velocity.y < 0 && cStickUD >= 0) {
		if (player.body.velocity.y + player.dampening > 0) {
			player.body.velocity.y = 0;
		}else{
			player.body.velocity.y += player.dampening;
		}
	}
	player.body.velocity.y += cStickUD * player.speedValue;

    player.bubble.x = player.body.position.x-5;//better way to do this?
    player.bubble.y = player.body.position.y+5;//probablt
}

function animatePlayer(player, controller) {
    var cStickLR = determineCStickLR(controller,player);
    var cStickUD = determineCStickUD(controller,player);

	var fps = 5 + Math.min(1, Math.max(Math.abs(player.body.velocity.x), Math.abs(player.body.velocity.y)) / 200) * 20;
    if(player.body.velocity.x == 0 && player.body.velocity.y == 0) {
        player.walkingRightAnim.stop();
        player.walkingUpAnim.stop();
        player.walkingDownAnim.stop();
        player.walkingLeftAnim.stop();
    }else{
        if(Math.abs(cStickLR) > Math.abs(cStickUD)){
            player.walkingUpAnim.stop();
            player.walkingDownAnim.stop();
            if(cStickLR > 0) {
                player.walkingLeftAnim.stop();
                playAnimation(player.walkingRightAnim,fps);
            }else{
                player.walkingRightAnim.stop();
                playAnimation(player.walkingLeftAnim,fps);
            }
        }else if (Math.abs(cStickLR) < Math.abs(cStickUD)){
            player.walkingLeftAnim.stop();
            player.walkingRightAnim.stop();
            if(cStickUD > 0) {
                player.walkingUpAnim.stop();
                playAnimation(player.walkingDownAnim,fps);
            }else{
                player.walkingDownAnim.stop();
                playAnimation(player.walkingUpAnim,fps);
            }
        }
    }
}

function playAnimation(animation, fps) {
    if(animation.isPlaying) {
        animation.speed = fps;
    } else {
        animation.play(fps, true);
    }
}

//old code that did direction based on velocity, not the direction controller pointing
        // if(Math.abs(player.body.velocity.x) > Math.abs(player.body.velocity.y)) {
        //  player.walkingUpAnim.stop();
        //  player.walkingDownAnim.stop();
        //     if(player.body.velocity.x > 0) {
        //      player.walkingLeftAnim.stop();
        //         if(player.walkingRightAnim.isPlaying) {
        //          player.walkingRightAnim.speed = fps;
        //      } else {
        //          player.walkingRightAnim.play(fps, true);
        //      }
        //      }else{
        //          player.walkingRightAnim.stop();
        //         if(player.walkingLeftAnim.isPlaying) {
        //          player.walkingLeftAnim.speed = fps;
        //      } else {
        //          player.walkingLeftAnim.play(fps, true);
        //      }
        //     }
        // }else{
        //  player.walkingRightAnim.stop();
        //  player.walkingLeftAnim.stop();
        //     if(player.body.velocity.y > 0) {
        //      player.walkingUpAnim.stop();
        //         if(player.walkingDownAnim.isPlaying) {
        //          player.walkingDownAnim.speed = fps;
        //      } else {
        //          player.walkingDownAnim.play(fps, true);
        //       }
        //     }else{
        //      player.walkingDownAnim.stop();
        //         if(player.walkingUpAnim.isPlaying) {
        //          player.walkingUpAnim.speed = fps;
        //      } else {
        //               player.walkingUpAnim.play(fps, true);
        //      }
        //     }
        // }