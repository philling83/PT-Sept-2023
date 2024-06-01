# Python 1 Practice Assessment

Welcome to the Python Basics Practice Assessment!

In this assessment, you will write Python code to pass a series of unit tests. You will be using a popular TDD framework called
[Pytest]. Each test spec is worth 1 point.

* __Total Possible Points:__ 36 points

You will have **90 minutes** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Official documentation, including:
  * [Python]

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., a/A curriculum on Canvas, StackOverflow),
communication apps (e.g., Slack, Discord), search engines, notes, or any of your
previously written code.

[Python]: https://www.python.org/doc/

## Getting started

1. Clone this starter repo and open it in VS Code.
2. Make sure you are running a version of Python 3.9.
3. If you don't have Pytest installed already, run `pip install pytest`.
4. Run `pytest` to make sure the tests run.

## Usage

**Caution:** Some of the problems will require string formatting. The
instructions will use `{ }` to indicate a variable's position. Do not include
these braces in the final string.

1. **Manually test by running `python problem_01_conditional.py`.**  
   Before you run all the unit tests, use manual testing to compare your result
   with the expected result from the problem description. You may need to
   uncomment the manual test cases. Change the file name to the file that you
   would like to test.
2. **Run the tests by running `pytest`.**  
   This will run all unit tests. If you would like to run tests only for a
   specific file, provide the path to the test file, e.g., `pytest
   test/test_problem_01_conditional.py`. If you want more information from each
   test, include the `-v` flag in your command. If you want the test to stop
   after the first failure, use the `-x` flag. More information about how to use
   Pytest can be found here [https://docs.pytest.org/en/6.2.x/usage.html].
3. Your objective is to implement the code in each of the Python modules so that
   when you run `pytest`, all tests pass.

**Note:** Problem 9 (Functions) asks you to create a Pizza Processor class. This
problem is significantly longer and more complex than anything you would see on
the actual assessment, but working through it will prepare you well for anything
the actual assessment might ask you to do!

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `pytest` in the root directory to re-run all of the tests.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your program to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

[Pytest]: https://docs.pytest.org/en/6.2.x/index.html
[https://docs.pytest.org/en/6.2.x/usage.html]: https://docs.pytest.org/en/6.2.x/usage.html

[MDN]: https://developer.mozilla.org/en-US/
