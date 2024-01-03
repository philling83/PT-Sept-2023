const { expect } = require('chai');

const TTT = require("../class/ttt");
const Screen = require("../class/screen");

describe ('TTT game win logic', function () {

    let grid;

    it('records empty grid as no winner', function () {

        grid = [[' ',' ',' '],
                [' ',' ',' '],
                [' ',' ',' ']];

        expect(TTT.checkWin(grid)).to.be.false;

    });

    it('recognizes horizontal wins', function () {

        grid = [['X','X','X'],
                [' ',' ',' '],
                [' ',' ',' ']];

        expect(TTT.checkWin(grid)).to.equal('X');

        grid = [[' ',' ',' '],
                ['O','O','O'],
                [' ',' ',' ']];

        expect(TTT.checkWin(grid)).to.equal('O');


        grid = [[' ',' ',' '],
                [' ',' ',' '],
                ['X','X','X']];

        expect(TTT.checkWin(grid)).to.equal('X');

    });

    it('recognizes vertical wins', function () {

        grid = [['X',' ',' '],
                ['X',' ',' '],
                ['X',' ',' ']];

        expect(TTT.checkWin(grid)).to.equal('X');

        grid = [[' ','O',' '],
                [' ','O',' '],
                [' ','O',' ']];

        expect(TTT.checkWin(grid)).to.equal('O');


        grid = [[' ',' ','X'],
                [' ',' ','X'],
                [' ',' ','X']];

        expect(TTT.checkWin(grid)).to.equal('X');

    });


    it('recognizes diagonal wins', function () {

        grid = [['X',' ',' '],
                [' ','X',' '],
                [' ',' ','X']];

        expect(TTT.checkWin(grid)).to.equal('X');

        grid = [[' ',' ','O'],
                [' ','O',' '],
                ['O',' ',' ']];

        expect(TTT.checkWin(grid)).to.equal('O');

    });

    it('recognizes ties', function () {

        grid = [['X','O','X'],
                ['X','O','O'],
                ['O','X','O']];

        expect(TTT.checkWin(grid)).to.equal('T');

    });

    it('recognizes if there is no win yet', function () {

        grid = [['X','X',' '],
                ['X','O','O'],
                ['O','X','O']];

        expect(TTT.checkWin(grid)).to.be.false;

    });
});

describe ('TTT end game logic', function () {

    beforeEach(function () {
        new TTT();
    });

    it('sets a message when player X wins', function () {
        TTT.endGame('X');
        expect(Screen.message).to.equal('Player X wins!');
    });

    it('sets a message when player O wins', function () {
        TTT.endGame('O');
        expect(Screen.message).to.equal('Player O wins!');
    });

    it('sets a message when there is a tie', function () {
        TTT.endGame('T');
        expect(Screen.message).to.equal('Tie game!');
    });

    it('sets a game over message with any other input', function () {
        TTT.endGame('z');
        expect(Screen.message).to.equal('Game Over');
    });

});


describe ('TTT completing a move logic', function () {

    let ttt;

    before( function () {
        ttt = new TTT();
    });

    it('places the player\'s symbol in the correct grid cell', function () {
        ttt.doMove(2, 1);
        expect(ttt.grid[2][1]).to.equal('O');
        expect(Screen.grid[2][1]).to.equal('O');
    });

    it('O and X take turns for every move', function () {
        ttt.doMove(0, 0);
        expect(ttt.grid[0][0]).to.equal('X');
        expect(Screen.grid[0][0]).to.equal('X');

        ttt.doMove(1, 1);
        expect(ttt.grid[1][1]).to.equal('O');
        expect(Screen.grid[1][1]).to.equal('O');

        ttt.doMove(0, 2);
        expect(ttt.grid[0][2]).to.equal('X');
        expect(Screen.grid[0][2]).to.equal('X');
    });

    it('checks for a winner after every move, and ends game', function () {
        ttt.doMove(0, 1);
        expect(ttt.grid[0][1]).to.equal('O');
        expect(Screen.grid[0][1]).to.equal('O');
        expect(Screen.message).to.equal('Player O wins!');
    });

});

describe ('TTT selecting a cell', function () {

    let ttt;

    before( function () {
        ttt = new TTT();
    })

    it('initiates a move if the selected cell is still empty', function () {
        ttt.cursor.row = 1;
        ttt.cursor.col = 1;

        ttt.select();

        expect(ttt.grid[1][1]).to.equal('O');
        expect(Screen.grid[1][1]).to.equal('O');
    });

    it('sets a message about next player\'s turn', function () {
        expect(Screen.message).to.equal('Player X\'s turn');

        ttt.cursor.row = 2;
        ttt.cursor.col = 2;

        ttt.select();
        expect(Screen.message).to.equal('Player O\'s turn');
    });

    it('sets a message if the selected cell is not empty', function () {
        ttt.cursor.row = 1;
        ttt.cursor.col = 1;

        ttt.select();

        expect(ttt.grid[1][1]).to.equal('O');
        expect(Screen.grid[1][1]).to.equal('O');
        expect(Screen.message).to.equal('You cannot move there');

        ttt.cursor.row = 2;
        ttt.cursor.col = 2;

        ttt.select();

        expect(ttt.grid[2][2]).to.equal('X');
        expect(Screen.grid[2][2]).to.equal('X');
        expect(Screen.message).to.equal('You cannot move there');
    });

});
