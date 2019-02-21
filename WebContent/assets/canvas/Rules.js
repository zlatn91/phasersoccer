
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * Rules.
 */
function Rules() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Rules_proto = Object.create(Phaser.State.prototype);
Rules.prototype = Rules_proto;
Rules.prototype.constructor = Rules;

Rules.prototype.init = function () {
	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

Rules.prototype.preload = function () {
	
};

Rules.prototype.create = function () {
	this.game.input.onDown.add(startGame, this);
};

/* --- end generated code --- */
// -- user code here --
function startGame(){
	this.game.state.start("Level");
}