const { expect } = require('chai');

const Cursor = require("../class/cursor.js");

describe ('Cursor setup', function () {

    let cursor;

    beforeEach(function() {
        cursor = new Cursor();
    });


    it('initializes a 3 row x 3 column grid by default', function () {
        expect(cursor.numRows).to.equal(3);
        expect(cursor.numCols).to.equal(3);
    });

    it('cursor starts at position 0,0 upon initialization', function () {
        expect(cursor.row).to.equal(0);
        expect(cursor.col).to.equal(0);
    });

    it('sets default grid and cursor colors upon initialization', function () {
        expect(cursor.gridColor).to.equal('black');     // "\u001b[40m"
        expect(cursor.cursorColor).to.equal('yellow');  // "\u001b[43m"
    });

    it('can return current cursor position', function () {
        expect(cursor.position()).to.have.own.property('row');
        expect(cursor.position().row).equal(0);
        expect(cursor.position()).to.have.own.property('col');
        expect(cursor.position().col).equal(0);
    });

});
