const { expect } = require('chai');

const Screen = require("../class/screen");
const TTT = require("../class/ttt");
const Command = require("../class/command");

describe ('Defining Keypress Commands', function () {
    let ttt;

    before(function () {
        ttt = new TTT();
        ttt.cursor.row = 1;
        ttt.cursor.col = 1;
    });

    it('includes an up command that is bound to the cursor\'s up method', function () {
        expect(Screen.commands).to.have.own.property("up");
        expect(Screen.commands.up instanceof Command).to.be.true;
        expect(Screen.commands.up).to.have.own.property("key", "up");
        expect(Screen.commands.up).to.have.own.property("description");
        expect(Screen.commands.up).to.have.own.property("action");
        expect(Screen.commands.up.action).to.be.instanceOf(Function);

        Screen.commands.up.execute();
        expect(ttt.cursor.row).to.equal(0);
        expect(ttt.cursor.col).to.equal(1);
    });

    it('includes a down command that is bound to the cursor\'s down method', function () {
        expect(Screen.commands).to.have.own.property("down");
        expect(Screen.commands.down instanceof Command).to.be.true;
        expect(Screen.commands.down).to.have.own.property("key", "down");
        expect(Screen.commands.down).to.have.own.property("description");
        expect(Screen.commands.down).to.have.own.property("action");
        expect(Screen.commands.down.action).to.be.instanceOf(Function);

        Screen.commands.down.execute();
        expect(ttt.cursor.row).to.equal(1);
        expect(ttt.cursor.col).to.equal(1)
    });

    it('includes a left command that is bound to the cursor\'s left method', function () {
        expect(Screen.commands).to.have.own.property("left");
        expect(Screen.commands.left instanceof Command).to.be.true;
        expect(Screen.commands.left).to.have.own.property("key", "left");
        expect(Screen.commands.left).to.have.own.property("description");
        expect(Screen.commands.left).to.have.own.property("action");
        expect(Screen.commands.left.action).to.be.instanceOf(Function);

        Screen.commands.left.execute();
        expect(ttt.cursor.row).to.equal(1);
        expect(ttt.cursor.col).to.equal(0);
    });

    it('includes a right command that is bound to the cursor\'s right method', function () {
        expect(Screen.commands).to.have.own.property("right");
        expect(Screen.commands.right instanceof Command).to.be.true;
        expect(Screen.commands.right).to.have.own.property("key", "right");
        expect(Screen.commands.right).to.have.own.property("description");
        expect(Screen.commands.right).to.have.own.property("action");
        expect(Screen.commands.right.action).to.be.instanceOf(Function);

        Screen.commands.right.execute();
        expect(ttt.cursor.row).to.equal(1);
        expect(ttt.cursor.col).to.equal(1);
    });

    it('includes a return command that invokes the ttt\'s select method', function () {
        expect(Screen.commands).to.have.own.property("return");
        expect(Screen.commands.return instanceof Command).to.be.true;
        expect(Screen.commands.return).to.have.own.property("key", "return");
        expect(Screen.commands.return).to.have.own.property("description");
        expect(Screen.commands.return).to.have.own.property("action");
        expect(Screen.commands.return.action).to.be.instanceOf(Function);

        ttt.cursor.row = 2;
        ttt.cursor.col = 2;
        ttt.playerTurn = "X";

        Screen.commands.return.execute();
        expect(ttt.grid[2][2]).to.equal("X");
    });

});
