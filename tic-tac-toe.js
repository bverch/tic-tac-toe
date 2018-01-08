var Board = function(n = 3) {
  this.storage = new Array(n);
  this.player = 'x';
  for (var i = 0; i < this.storage.length; i++) {
    this.storage[i] = new Array(n);
    this.storage[i].fill('');
  }
}

Board.prototype.move = function(i, j){
  if (!this.storage[i][j]) {
    this.storage[i][j] = this.player;
    this.changePlayers();
  }
  this.printBoard();
}

Board.prototype.changePlayers = function() {
  this.player = this.player === 'x' ? 'o':'x';
}

Board.prototype.printBoard = function() {
  for (var i = 0; i < this.storage.length; i++) {
    var boardRow = '';
    for (var j = 0; j < this.storage.length; j++) {
      if (this.storage[i][j]) {
        boardRow += this.storage[i][j];
      } else {
        boardRow += '_';
      }
    }
    console.log(boardRow);
  }
}

Board.prototype.checkVictory = function() {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[0][i] === 'x' && this.storage[1][i] === 'x' && this.storage[2][i] === 'x') {
      return true;
    }
    if (this.storage[i][0] === 'x' && this.storage[i][1] === 'x' && this.storage[i][2] === 'x') {
      return true;
    }
  }
  if (this.storage[0][0] === 'x' && this.storage[1][1] === 'x' && this.storage[2][2] === 'x') {
    return true;
  }
  if (this.storage[0][2] === 'x' && this.storage[1][1] === 'x' && this.storage[2][0] === 'x') {
    return true;
  }
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[0][i] === 'o' && this.storage[1][i] === 'o' && this.storage[2][i] === 'o') {
      return true;
    }
    if (this.storage[i][0] === 'o' && this.storage[i][1] === 'o' && this.storage[i][2] === 'o') {
      return true;
    }
  }
  if (this.storage[0][0] === 'o' && this.storage[1][1] === 'o' && this.storage[2][2] === 'o') {
    return true;
  }
  if (this.storage[0][2] === 'o' && this.storage[1][1] === 'o' && this.storage[2][0] === 'o') {
    return true;
  }
  return false;
}

exports.Board = Board;