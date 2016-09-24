//This needs to be used more where controller code is 
//renamce 'controller' in index.html

//support Gamecube controllers on Windows AND Mac, and alternative controller solution
//maybe arrows and WASD?
//never actually tested that Mac still works..

//Temporary solution: just use arrows for player one

var leftKey;
var rightKey;
var upKey;
var downKey

var aKey;
var dKey;
var wKey;
var sKey;


function initializeControllerJS(game) {
	leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
	dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
	wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
	sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
}


function determineCStickLR(controller, player) {
	var cStickLR = controller.axis(player.playerNumber - 1);
	if(!cStickLR){
	    if(aKey.isDown && player.playerNumber == 1 ||
	    	leftKey.isDown && player.playerNumber == 2) {
	    	cStickLR = -1;
	    }else if (dKey.isDown && player.playerNumber == 1 ||
	    	rightKey.isDown && player.playerNumber == 2){
	    	cStickLR = 1;
	    }else{
	    	cStickLR = 0;
	    }
	}
	console.log(cStickLR);
	return cStickLR;
}

function determineCStickUD(controller, player) {
	var cStickUD = controller.axis(player.playerNumber == 1? 4 : player.playerNumber == 2? 6 : player.playerNumber == 3? 5 : 7);
	if(!cStickUD){ 
	    if(sKey.isDown && player.playerNumber == 1 ||
	    	downKey.isDown && player.playerNumber == 2) {
	    	cStickUD = 1;
	    }else if (wKey.isDown && player.playerNumber == 1 ||
	    			upKey.isDown && player.playerNumber == 2){
	    	cStickUD = -1;
	    }else{
	    	cStickUD = 0;
	    }
	}
	return cStickUD;
}

