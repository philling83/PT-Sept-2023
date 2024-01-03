# Documentation for Screen and Command API

Read through this documentation for more detail on the provided code in the
`Screen` and the `Command` API.

## Screen API

`Screen` is a static class with the following methods. You do not need to
modify this class at all. The functionality you will need is documented below.

### Initialize

* `Screen.initialize(numRows, numCols)` will initialize a grid with the given
  dimensions.

### Gridlines

* `Screen.setGridlines(gridLines)` will insert lines between each grid element
  is `gridLines` is true, or hide them if `gridLines` is false.

### Commands

* `Screen.addCommand(key, description, action)` will add a command that calls
  the `action` callback anytime `key` is typed on the keyboard. `description`
  will be displayed in the help message.
* `Screen.printCommands()` will show a list of all loaded commands and their
  descriptions.

To process keypresses, you will need to load `Command` objects into the Screen
API using `Screen.addCommand`. This function takes a `key` which triggers the
command, a string `description`, and an `action` callback which is executed
when `key` is pressed.

### Updating the grid

* `Screen.setGrid(row, col, char)` sets the character at `row` and `col` to
  the given `char`.
* `Screen.setTextColor(row, col, color)` sets the text color at `row` and
  `col` to the given `color`.
* `Screen.setBackgroundColor(row, col, color)` sets the background color at
  `row` and `col` to the given `color`.

Valid colors are:
  * black
  * red
  * green
  * yellow
  * blue
  * cyan
  * white
  * magenta

### Quitting

* `Screen.setQuitMessage(quitMessage)` sets a message to be printed when the
  user quits.
* `Screen.quit(showMessage=true)` quits the game and prints the message if
  `showMessage` is true.

### Rendering

* `Screen.render()` will update the display. This must be called anytime the
  grid or messages change.

### Displaying a message

* `Screen.setMessage(msg)` takes in a string to be printed below the grid each
  time it is rendered.


## Command API

`Command` is a class with one following method. You do not need to
modify this class at all. The functionality you will need is documented below.

### Execute

* `command.execute()` is an instance method that will execute the action from
  the command instance. You will see this method used in the test specs to test
  game play functionality in phases 5 and 6.
