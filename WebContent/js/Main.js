window.onload = function() {
	var game = new Phaser.Game(960, 540, Phaser.AUTO);
	
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Level", Level);
	
	game.state.start("Boot");
};
