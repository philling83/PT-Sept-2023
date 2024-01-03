const { expect } = require('chai');

const TTT = require("../class/ttt");
const Cursor = require("../class/cursor");
const Screen = require("../class/screen");


describe ('TTT game setup', function() {
    let ttt;

    before(function () {
        ttt = new TTT();
    });

    it ('always starts a game with player O', function () {
        expect(ttt.playerTurn).to.equal("O");
    });

    it ('always starts a game with an empty grid', function () {

        expect(ttt.grid).to.be.an('array');
        expect(ttt.grid).to.have.length(3);
        ttt.grid.forEach((row) => {
            expect(row).to.be.an('array');
            expect(row).to.have.length(3);
            row.forEach((cell) => {
                expect(cell).to.be.a('string');
                expect(cell).to.equal(' ');
            });
        });
    });

    it ('always starts a game with a new cursor', function () {
        expect(ttt.cursor instanceof Cursor).to.be.true;
    });

    it ('initializes a new screen upon game setup', function () {
        expect(Screen.initialized).to.be.true;
    });

    it ('sets new gridlines upon game setup', function () {
        expect(Screen.gridLines).to.be.true;
    });

    it ('sets a new screen message upon game setup', function () {
        expect(Screen.message).to.equal("Player O's turn");
    });

    it ('sets a background color of yellow to the cursor start position (0,0)', function () {
        expect(Screen.backgroundColors[0][0]).to.equal("\u001b[43m"); // yellow
    });

});
