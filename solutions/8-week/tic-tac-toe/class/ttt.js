const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {
  constructor() {
    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']];

    this.cursor = new Cursor(3, 3);

    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    Screen.setBackgroundColor(0, 0, "yellow");

    Screen.addCommand('up', 'move the cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move the cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move the cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move the cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('return', 'select your move', this.select.bind(this));

    Screen.render();
  };

  static checkWin(grid) {
    // recognizes horizontal wins
    if (grid[0][0] !== ' ' && grid[0][0] === grid[0][1] && grid[0][1] === grid[0][2]) return grid[0][0];
    if (grid[1][0] !== ' ' && grid[1][0] === grid[1][1] && grid[1][1] === grid[1][2]) return grid[1][0];
    if (grid[2][0] !== ' ' && grid[2][0] === grid[2][1] && grid[2][1] === grid[2][2]) return grid[2][0];

    // recognizes vertical wins
    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][0] && grid[1][0] === grid[2][0]) return grid[0][0];
    if (grid[0][1] !== ' ' && grid[0][1] === grid[1][1] && grid[1][1] === grid[2][1]) return grid[0][1];
    if (grid[0][2] !== ' ' && grid[0][2] === grid[1][2] && grid[1][2] === grid[2][2]) return grid[0][2];

    // recognizes diagonal wins
    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) return grid[0][0];
    if (grid[0][2] !== ' ' && grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) return grid[0][2];

    // recognizes ties
    if (!grid[0].includes(' ') && !grid[1].includes(' ') && !grid[2].includes(' ')) return 'T';

    // records empty grid as no winner
    // recognizes if there is no win yet
    return false;
  };

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    };

    Screen.render();
    Screen.quit();
  };

  doMove(row, col) {
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);

    let winner = TTT.checkWin(this.grid);
    if (winner) return TTT.endGame(winner);

    this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
    Screen.setMessage(`Player ${this.playerTurn}'s turn`);
    Screen.render();
  };

  select() {
    let row = this.cursor.row;
    let col = this.cursor.col;

    if (this.grid[row][col] !== ' ') {
      Screen.setMessage("You cannot move there");
      Screen.render();
    } else {
      this.doMove(row, col);
    };
  };
};

module.exports = TTT;