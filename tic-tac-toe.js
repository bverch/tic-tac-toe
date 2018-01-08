var Board = function(n = 3) {
  this.storage = new Array(n);
  this.player = 'x';
  for (var i = 0; i < this.storage.length; i++) {
    this.storage[i] = new Array(n);
  }
}

Board.prototype.move = function(i, j){
  this.storage[i][j] = this.player;
  this.changePlayers();
}

Board.prototype.changePlayers = function() {
  this.player = this.player === 'x' ? 'o':'x';
}

var myBoard = new Board();
myBoard.move(0,0);
myBoard.move(0,2);
myBoard.move(1,2);
console.log(myBoard.storage);