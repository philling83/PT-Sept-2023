const Screen = require("./screen");

class Cursor {
  constructor(numRows = 3, numCols = 3) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';       // "\u001b[40m"
    this.cursorColor = 'yellow';    // "\u001b[43m"
  };

  position() {
    return { row: this.row, col: this.col };
  };

  up() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    this.row > 0 ? this.row -= 1 : this.row;
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  };

  down() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    this.row < 2 ? this.row += 1 : this.row;
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  };

  left() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    this.col > 0 ? this.col -= 1 : this.col;
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  };

  right() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    this.col < 2 ? this.col += 1 : this.col;
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  };
};

module.exports = Cursor;