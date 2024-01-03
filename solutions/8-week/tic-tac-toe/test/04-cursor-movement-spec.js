const { expect } = require('chai');

const Cursor = require("../class/cursor.js");
const Screen = require("../class/screen");
const TTT = require("../class/ttt");

describe ('Cursor movement', function () {
    let cursor;

    beforeEach(function () {
        cursor = new Cursor();
    })

    describe('DOWN inputs', function () {

        it('correctly processes down inputs', function () {
            cursor.down();
            expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

            cursor.down();
            expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);

            cursor.down();
            expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
        });

    })

    describe('UP inputs', function () {

        it('correctly processes up inputs', function () {
            cursor.up();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

            cursor.down();
            expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

            cursor.up();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
        });

    });

    describe('RIGHT inputs', function () {

        it('correctly processes right inputs', function () {
            cursor.right();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

            cursor.right();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

            cursor.right();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
        });

    });

    describe('LEFT inputs', function () {

        it('correctly processes left inputs', function () {
            cursor.left();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

            cursor.right();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

            cursor.left();
            expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
        });

    });

});

describe ('Cursor and grid color', function () {
    let ttt;

    before(function () {
        ttt = new TTT();
    });

    describe('Color update on DOWN moves', function () {

        it('cursor starting position (0, 0) is yellow', function () {
            expect(Screen.backgroundColors[0][0]).to.equal("\u001b[43m"); // yellow
            expect(Screen.backgroundColors[1][0]).to.equal("\u001b[40m"); // black
        });

        it('cursor new position is yellow', function () {
            ttt.cursor.down();
            expect([ttt.cursor.row, ttt.cursor.col]).to.deep.equal([1, 0]);
            expect(Screen.backgroundColors[1][0]).to.equal("\u001b[43m"); // yellow
        });

        it('cursor old position is black', function () {
            expect(Screen.backgroundColors[0][0]).to.equal("\u001b[40m"); // black
        });

    });

    describe('Color update on RIGHT moves', function () {
        it('cursor starting position (1, 0) is yellow', function () {
            expect(Screen.backgroundColors[1][0]).to.equal("\u001b[43m"); // yellow
            expect(Screen.backgroundColors[0][0]).to.equal("\u001b[40m"); // black
        });


        it('cursor new position is yellow', function () {
            ttt.cursor.right();
            expect([ttt.cursor.row, ttt.cursor.col]).to.deep.equal([1, 1]);
            expect(Screen.backgroundColors[1][1]).to.equal("\u001b[43m"); // yellow
        });

        it('cursor old position is black', function () {
            expect(Screen.backgroundColors[1][0]).to.equal("\u001b[40m"); // black
        });

    });

    describe('Color update on UP moves', function () {

        it('cursor starting position (1, 1) is yellow', function () {
            expect(Screen.backgroundColors[1][1]).to.equal("\u001b[43m"); // yellow
            expect(Screen.backgroundColors[0][1]).to.equal("\u001b[40m"); // black
        });


        it('cursor new position is yellow', function () {
            ttt.cursor.up();
            expect([ttt.cursor.row, ttt.cursor.col]).to.deep.equal([0, 1]);
            expect(Screen.backgroundColors[0][1]).to.equal("\u001b[43m"); // yellow
        });

        it('cursor old position is black', function () {
            expect(Screen.backgroundColors[1][1]).to.equal("\u001b[40m"); // black
        });
    });

    describe('Color update on LEFT moves', function () {
        it('cursor starting position (0, 1) is yellow', function () {
            expect(Screen.backgroundColors[0][1]).to.equal("\u001b[43m"); // yellow
            expect(Screen.backgroundColors[0][0]).to.equal("\u001b[40m"); // black
        });


        it('cursor new position is yellow', function () {
            ttt.cursor.left();
            expect([ttt.cursor.row, ttt.cursor.col]).to.deep.equal([0, 0]);
            expect(Screen.backgroundColors[0][0]).to.equal("\u001b[43m"); // yellow
        });

        it('cursor old position is black', function () {
            expect(Screen.backgroundColors[0][1]).to.equal("\u001b[40m"); // black
        });

    });

});
