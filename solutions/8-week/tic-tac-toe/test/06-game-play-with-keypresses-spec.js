const { expect } = require('chai');
require('events').defaultMaxListeners = 12;

const Screen = require("../class/screen");
const TTT = require("../class/ttt");

describe ('Game play with key press commands', function () {
    let ttt;

    beforeEach(function () {
        ttt = new TTT();
    });


    it('a series of arrow keypresses move around the board correctly', function() {
        ttt.cursor.row = 0;
        ttt.cursor.col = 0;

        Screen.commands.down.execute();
        Screen.commands.down.execute();
        Screen.commands.right.execute();
        Screen.commands.up.execute();
        Screen.commands.left.execute();

        expect(ttt.cursor.row).to.equal(1);
        expect(ttt.cursor.col).to.equal(0);
    })

    it('a series of arrow and return keypresses result in proper turn-taking', function() {
        ttt.cursor.row = 0;
        ttt.cursor.col = 0;
        this.playerTurn = "O";

        Screen.commands.right.execute();
        Screen.commands.down.execute();
        Screen.commands.right.execute();
        Screen.commands.up.execute();
        Screen.commands.left.execute();

        expect(ttt.cursor.row).to.equal(0);
        expect(ttt.cursor.col).to.equal(1);

        Screen.commands.return.execute();

        expect(ttt.grid[0][1]).to.equal("O");
        expect(ttt.playerTurn).to.equal("X");

        Screen.commands.right.execute();
        Screen.commands.down.execute();

        expect(ttt.cursor.row).to.equal(1);
        expect(ttt.cursor.col).to.equal(2);

        Screen.commands.return.execute();

        expect(ttt.grid[1][2]).to.equal("X");
        expect(ttt.playerTurn).to.equal("O");
    });

});
