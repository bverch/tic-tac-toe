var chai = require('chai');
var ticTacToe = require('../tic-tac-toe.js');
var assert = require('assert');

describe('basic functionality', function() {
  it ('should initialize an empty board of size 3', function() {
    var myBoard = new ticTacToe.Board;
    assert.equal(myBoard.storage.length, 3);
    assert.equal(myBoard.storage[0].length, 3);
    assert.equal(myBoard.storage[1].length, 3);
    assert.equal(myBoard.storage[2].length, 3);
  });
  it ('should make a move on a board', function() {
    var myBoard = new ticTacToe.Board;
    myBoard.move(0, 1);
    assert.equal(myBoard.storage[0][1], 'x');
  });
  it ('should alternate moves between players', function() {
    var myBoard = new ticTacToe.Board;
    myBoard.move(0, 1);
    assert.equal(myBoard.storage[0][1], 'x');
    myBoard.move(0, 0);
    assert.equal(myBoard.storage[0][0], 'o');
    myBoard.move(1, 0);
    assert.equal(myBoard.storage[1][0], 'x');
  });
  it ('should not overwrite moves that have already happened', function() {
    var myBoard = new ticTacToe.Board;
    myBoard.move(0, 1);
    assert.equal(myBoard.storage[0][1], 'x');
    myBoard.move(0, 1);
    assert.equal(myBoard.storage[0][1], 'x');
    myBoard.move(0, 0);
    assert.equal(myBoard.storage[0][0], 'o');
  });
});
describe('winning', function() {
  it ('should detect if a victory has occurred', function() {
    var myBoard = new ticTacToe.Board;
    myBoard.move(0, 0);
    myBoard.move(1, 0);
    myBoard.move(0, 1);
    myBoard.move(2, 0);
    myBoard.move(0, 2);
    assert.equal(myBoard.checkVictory() !== false, true);
  });
});