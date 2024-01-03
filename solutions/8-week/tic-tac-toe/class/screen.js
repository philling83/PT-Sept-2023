// DO NOT MODIFY STARTER CODE IN THIS FILE

// UN-COMMENT ALL 13 CONSOLE.LOG AND PROCESS.EXIT STATEMENTS TO PLAY THE GAME
// These 13 statements must be commented out for the mocha tests to run properly

const keypress = require('keypress');
const Command = require('./command');

class Screen {
  static numCols = 0;
  static numRows = 0;
  static grid = [];

  static borderChar = " ";
  static spacerCount = 1;

  static gridLines = false;

  static defaultTextColor = '\x1b[37m';       // white
  static defaultBackgroundColor = '\x1b[40m'; // black

  static textColors = [];
  static backgroundColors = [];

  static message = "";

  static commands = {};

  static keypressCallback = null;

  static initialized = false;

  static initialize(numRows = 3, numCols = 3) {
    Screen.numRows = numRows;
    Screen.numCols = numCols;

    Screen.grid = [];
    Screen.textColors = [];
    Screen.backgroundColors = [];

    for (let row = 0; row < numRows; row++) {
      Screen.grid.push(new Array(numCols).fill(" "));
      Screen.textColors.push(new Array(numCols).fill(Screen.defaultTextColor));
      Screen.backgroundColors.push(new Array(numCols).fill(Screen.defaultBackgroundColor));
    };

    Screen.setQuitMessage("\nThank you for playing! \nGoodbye.\n");
    const quitCmd = new Command('q', 'quit the game', Screen.quit);
    Screen.commands['q'] = quitCmd;

    Screen.initialized = true;

    Screen.waitForInput();
  };

  static setGridlines(gridLines) {
    Screen.gridLines = gridLines;
    Screen.render();
  };

  static setMessage(msg) {
    Screen.message = msg;
  };

  static setGrid(row, col, char) {
    if (!Screen.initialized) return;

    if (char.length !== 1) {
      throw new Error("invalid grid character");
    };

    Screen.grid[row][col] = char;
  };

  static quit(showMessage = true) {
    if (showMessage) {
      // console.log(Screen.quitMessage);                // #1 of 13
    };

    // process.exit(1);                                    // #2 of 13
  };

  static setBackgroundColor(row, col, color) {
    if (!Screen.initialized) return;

    const colorCodes = { // background color
      blackBg: '\x1b[40m',
      redBg: '\x1b[41m',
      greenBg: '\x1b[42m',
      yellowBg: '\x1b[43m',
      blueBg: '\x1b[44m',
      cyanBg: '\x1b[46m',
      whiteBg: '\x1b[47m',
      magentaBg: '\x1b[45m',
    };

    let code = colorCodes[color + 'Bg'];

    if (!code) {
      throw new Error("Invalid background color");
    };

    Screen.backgroundColors[row][col] = code;
  };

  static addCommand(key, description, action) {
    if (key === 'q') {
      throw new Error("you cannot overwrite 'q'");
    };

    Screen.commands[key] = new Command(key, description, action);
  };

  static render() {
    if (!Screen.initialized) return;

    const spacer = new Array(Screen.spacerCount).fill(' ').join('');

    // console.clear();                                    // #3 of 13

    let borderLength = Screen.numCols * (Screen.spacerCount * 2 + 1) + 2;
    if (Screen.gridLines) borderLength += Screen.numCols - 1;
    let horizontalBorder = new Array(borderLength).fill(Screen.borderChar).join('');

    // console.log(horizontalBorder);                      // #4 of 13

    for (let row = 0; row < Screen.numRows; row++) {
      const rowCopy = [...Screen.grid[row]];

      for (let col = 0; col < Screen.numCols; col++) {
        let textColor = Screen.textColors[row][col] ? Screen.textColors[row][col] : "";
        let backgroundColor = Screen.backgroundColors[row][col] ? Screen.backgroundColors[row][col] : "";
        if (!(textColor && backgroundColor)) textColor = '\x1b[0m';

        let vertLine = (Screen.gridLines && col > 0) ? '|' : '';
        rowCopy[col] = `${Screen.defaultBackgroundColor}${vertLine}\x1b[0m${textColor}${backgroundColor}${spacer}${rowCopy[col]}${spacer}\x1b[0m`;
      };

      if (Screen.gridLines && row > 0) {
        let horizontalGridLine = new Array(rowCopy.length * 4 - 1).fill('-');
        horizontalGridLine.unshift(`${Screen.borderChar}${Screen.defaultBackgroundColor}`);
        horizontalGridLine.push(`\x1b[0m${Screen.borderChar}`);

        // console.log(horizontalGridLine.join(''));   // #5 of 13
      };

      rowCopy.unshift(`${Screen.borderChar}`);
      rowCopy.push(`${Screen.borderChar}`);

      // console.log(rowCopy.join(''));                  // #6 of 13
    };

    // console.log(horizontalBorder);                      // #7 of 13

    // console.log("");                                    // #8 of 13

    // console.log(Screen.message);                        // #9 of 13
  };

  static setQuitMessage(quitMessage) {
    Screen.quitMessage = quitMessage;
  };

  static setTextColor(row, col, color) {
    if (!Screen.initialized) return;

    const colorCodes = {
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      white: '\x1b[37m',
    };

    let code = colorCodes[color];

    if (!code) {
      throw new Error("Invalid color");
    };

    Screen.textColors[row][col] = code;
  };

  static printCommands() {
    // console.log('');                                    // #10 of 13

    for (let cmd in Screen.commands) {
      let description = Screen.commands[cmd].description;
      console.log(`  ${cmd} - ${description}`);
    };

    // console.log('');                                    // #11 of 13
  };

  static waitForInput() {
    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {

      if (!key) {
        // console.log("Warning: Unknown keypress");   // #12 of 13
      } else if (!Screen.commands.hasOwnProperty(key.name)) {
        Screen.render();
        // console.log(`${key.name} not supported.`);   // #13 of 13
        Screen.printCommands();
      } else {
        Screen.render();
        Screen.commands[key.name].execute();
      };
    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
  };

  static setKeypressCallback(keypressCallback) {
    Screen.keypressCallback = keypressCallback;
  };
};

module.exports = Screen;