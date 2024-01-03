# Tic Tac Toe Command Line Game

In this practice, you will apply your TDD, OOP, and debugging skills to complete
a working Tic Tac Toe command line game. Whe you are finished, the game should
look like the gifs below.

When player X wins:

![ttt-X-win-gif]

When player O wins:

![ttt-O-win-gif]

When there is a tie (no winner):

![ttt-tie-gif]


You will use mocha test specs to guide the initial development of the Tic Tac
Toe game, but mocha test specs will not guide the entire project. The game will
meet all project requirements if it behaves similar to the gifs above, and if it
can correctly handle scenarios when player X wins, when player O wins, and when
there is a tie.

## Setup

1. Download the starter from GitHub.
2. Run `npm install` to install dependencies.
3. Run `npm test` to run all tests, OR follow the instructions in each phase to
   run a single test file at a time.
4. Press the `q` key anytime to quit the execution of the game.

**Note that the tests will error out if you run them before writing any code.
This is expected because you will be creating your own files. Read the test
error output to get started.**

## Background

The project starter includes some code to get you started. Much of the
functionality related to playing the game on the command line has already been
set up for you. Your primary responsibilities to complete the project include:

- Creating the `Cursor` and `TTT` classes by interpreting mocha test specs
- Invoking class and instance methods that are already provided in the `Screen`
  and `Command` classes
- Manually testing the completed game and debugging any issues during game play

You are provided with a few files to help you get started:

The __play-game.js__ file will be used to start the game. Do not modify this
file.

The `Screen` class is a class that manages all of the properties and methods
related to rendering the Tic Tac Toe game in the console. This includes
rendering the game board and current player positions on the board, displaying
messages to the player, and everything else that shows up in the console
during game play. Do not modify the code in the __class/screen.js__ file.

**You will need to invoke the methods from the `Screen` class in multiple
phases, so take some time to explore the properties and methods in this class.*

The `Command` class is a class that can be used to program keypress commands. Do
not modify anything in the __class/command.js__ file. You will be using this
class in phase 5 to create commands that allow the user to use specific keys on
the keyboard to play the game. You can look at the `Screen.initialize` method
for an example of creating a command using the `Command` constructor.

You can see more detailed documentation for both the `Screen` and `Command`
classes in the __documentation.md__ file.

The tests are broken out into 5 phases. Run the following commands for each
phase:

1. `npm run test-1`: Cursor class setup
2. `npm run test-2`: TTT class game setup
3. `npm run test-3`: TTT game logic
4. `npm run test-4`: Cursor movement and colors
5. `npm run test-5`: Keypress commands

Press the `q` key anytime to quit the execution of the game (for example, if a
test is hanging and does not exit on its own).

## Phase 1: Cursor Setup

In phase 1, you will use mocha tests to start development of the `Cursor` class
within the __class__ directory.

In this game, the cursor is a yellow square that a player can move around the
game board to choose a location for their move. In this phase, you will build
the constructor and a method related to the cursor's current position on the
game board. In phase 4, you will add logic for moving around the game board.

Run `npm run test-1` to run the mocha tests, and move on to phase 2 when all
tests are passing.

## Phase 2: TTT class game setup

The `TTT` class in the __class__ directory is responsible for game play. It
includes a constructor that manages the setup of a new Tic Tac Toe game and
tracks the current player, the cursor, and information about the game status.

You may need to invoke methods from the `Screen` class to complete this phase.

Run `npm run test-2` to run the mocha tests, and move on to phase 3 when all
tests are passing.

## Phase 3: TTT game logic

The `TTT` class also includes methods that manage the logic of game play,
including turn-taking, selecting a cell, completing a move, checking for a
winner, and ending the game.

You may need to invoke methods from the `Screen` class to complete this phase.

Run `npm run test-3` to run the mocha tests, and move on to phase 4 when all
tests are passing.

## Phase 4: Cursor movement and colors

In this phase, you will be building more logic into the `Cursor` class. The
class needs methods that will move the cursor up, down, left, and right. The
color of the cursor and the grid will also need to be managed so that the player
will always know where they are on the game board.

You may need to invoke methods from the `Screen` class to complete this phase.

Run `npm run test-4` to run the mocha tests, and move on to phase 5 when all
tests are passing.

## Phase 5: Keypress commands

To process keypresses, you will need to load `Command` objects into the `Screen`
class using `Screen.addCommand()`. This function takes a key
which triggers the command, a string description, and an action callback which
is executed when the key is pressed.

The mocha specs will guide you to create commands for the up arrow, down arrow,
right arrow, left arrow, and return keys. Create these commands from the
constructor of the `TTT` class.

Think about **context** when creating the new command instances from the `TTT`
class, and make sure that the third argument, the action, is a function. When
the action function is invoked, you need to make sure that the keypress commands
are applied to the cursor instance that is associated with the ttt instance.

Run `npm run test-5` to run the mocha tests, and move on to the final phase when
all tests are passing.

_Note that you may need to adjust the **context** of your keypress commands
during phase 6 if your up, down, left, and right arrow keys do not behave as
expected._

## Phase 6: Game Play With KeyPresses

The specs in this phase check to make sure that your arrow keypresses result in
the proper cursor movement, pressing return results in selecting a cell, and
completes a move. The specs also check that the cursor position and grid are
updated correctly, and that player X and O take turns during game play.

Read the specs carefully to understand the moves that are happening during the
test. Then, run `npm run test-6` to run the tests.

If any tests are failing, debug the functions in the `TTT` and `Cursor` class
until you get them all to pass.

## Phase 7: Final updates and manual testing

By the end of phase 6, you will have completed much of the logic for the
`Cursor` and `TTT` classes. However, to complete the game, you will need to play
the game from the command line.

First, navigate to the __class/screen.js__ file and un-comment all of the
`console.log` statements. You will also need to un-comment the last line of the
`Screen.quit` method in that file. There are a total of **13 lines** that need to be un-commented.

> Note: At this point, you will no longer need to use the mocha tests, and they
> will no longer run properly. From this point on, test the behavior of the game
> by playing the game, as described below. The mocha tests do not need to pass
> to complete your project; the game only needs to run properly from the
> command line.

Run `node play-game.js` to play the game. The initial game board and message
should look like this. If you do not see the correct board and message
rendering, make sure you have invoked `Screen.render()` at the end of the `TTT`
class constructor.

![TTT-game-start]

Follow the prompts on the screen to see player O and X take turns during game
play. Make sure the cursor movement, colors, and messages are all showing up in
the right place at the right time, similar to the gifs at the top of the page.

**Debugging tip #1: General Debugging Tools**

You will need to flex your debugging muscles to complete this phase, and use
multiple debugging tools. If you generally rely on using `console.log`
statements for debugging, you may become frustrated by all of the content
rendered on the screen, which may interfere with your debugging `console.log`s.
If so, consider the following approaches:

- Try using the `Screen.setMessage` method for debugging purposes, similar to
  how you would typically use a `console.log`. For example, to check the value
  of the `winner` variable, you could insert `Screen.setMessage({ winner })`
  into a function where it is in scope. During game play, you would then see a
  new message object rendered on the screen, similar in format to `{ winner:
  'X'}` You may need to comment out other `Screen.setMessage` statements within
  the function so they do not interfere with your debugging message. _Make sure
  you remove all of these debugging messages before submitting your game._

- Use the VSCode debugger to step through the code and trace the value of your
  variables at each step.

- You can also comment out some of the `console.log` statements that are built
  into the `Screen` class to focus in on your debugging without everything
  rendering. Specifically, commenting out comment #3 (`console.clear`) or line
  comment #2 (`process.exit(1)`) can be helpful if you are not seeing your debugging
  messages show up in the console during game play. _Make sure you comment them
  all back in before final testing and submitting your project._

**Debugging tip #2: Re-rendering the Screen**

Anywhere you have code that changes something on the screen, you will need to
invoke the `Screen.render()` method to show the newly-updated screen. If you
notice that the game board, cursor, or messages are lagging or delayed, check
the functions in the `TTT` and `Cursor` classes to see if you need to add a
`Screen.render()` within a function to make a screen update show up immediately.

**Debugging tip #3: Tie Game**

It is important to manually test scenarios in which there is no winner, with
every cell filled with an X or an O, but no winner. If you are not seeing the
appropriate tie message ("Tie game!"), then you will need to debug why a
different winner message is being printed. Think about how you are invoking the
`endGame` method when there is a tie - what argument do you need to pass in
order to print the tie message?

**Debugging tip #4: Ending the Game**

Does your game actually end after a win or tie? Take a look through the `Screen`
class to find a method that will end the game. Make sure you invoke this method
within the game logic to ensure that the game officially ends. You will know
that it ended correctly if you are returned to your command prompt, similar to
what you see in the gifs at the top of the page.

## Final Manual Testing

When you are finished with all phases, thoroughly test your game by playing it
multiple times with different move combinations, winners, and ties. Make sure it
behaves correctly in all scenarios with no bugs.

**Do not run the mocha tests at this point; they do NOT need to pass when you
have a working command line game.**

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Rename your folder to begin with your `firstName-lastName`
3. Zip up your folder
4. Upload it

[ttt-O-win-gif]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRmNjk0YTQzN2EzN2I4YzM0NzIyMDQyODI2N2I5OTUzZTg4NTUwOSZjdD1n/gxAWeUXtMfUS7Db5lf/giphy.gif
[ttt-X-win-gif]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzcwMGQ5MzBkNzY4MjY3OTRmNGRhNTQ3ZTcxZDY0OGEwMzVmZGI4ZCZjdD1n/F2K5pXrea3nywm5QRI/giphy.gif
[ttt-tie-gif]: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTMzNjg4NGJhY2E5MDJhNWVkOGU1NTJkMmNmZDc2NDUxNTcwZTliYyZjdD1n/AsobVptr8IWKZxakn9/giphy.gif
[O-source-mp4]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-04/assets/TTT-O-win.mp4
[X-source-mp4]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-04/assets/TTT-X-win.mp4
[tie-source-mp4]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-04/assets/TTT-tie.mp4
[TTT-game-start]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-04/assets/ttt-start-game.png
