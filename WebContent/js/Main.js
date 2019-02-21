window.onload = function() {
	var game = new Phaser.Game(960, 540, Phaser.AUTO);

//  Add the States your game has.
//  game.state.add("Boot", Boot);
//  game.state.add("Menu", Menu);
//  game.state.add("Preload", Preload);

//	var viewPort = document.getElementById('viewport');
//	console.log(viewPort);
//	viewPort.setAttribute('content', 'width=800');
//	var canvas = document.getElementsByTagName(canvas);
//	console.log(canvas);
	game.state.add("Boot", Boot);
	game.state.add("Level", Level);
	
	game.state.start("Level");
};
