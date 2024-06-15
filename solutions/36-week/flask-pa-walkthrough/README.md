# Python 2 Practice Assessment - Flask

In this assessment, you will create a simple, data-driven web application using
Python. The tests are provided for you in this project; however, there is no
Pipfile because part of this assessment is for you to initialize and use your
own virtual environment using Pipenv.

* __Total Possible Points:__ 21 points

You will have **3 hours** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but they must be within
  camera range
* VS Code or a console for testing and experimentation
* Node
* Postman (when useful)
* Official documentation, including:
  * [Python]
  * [Flask]
  * [WTForms]
  * [FlaskWTF]
  * [Jinja]
  * [Flask-migrate]
  * [FlaskSQLAlchemy]
  * [SQLAlchemy]
  * [Alembic-documentation]

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., a/A curriculum on Canvas, StackOverflow),
communication apps (e.g., Slack, Discord), search engines, notes, or any of your
previously written code.

## Getting started

Clone the assessment at the bottom of this page.

Your application should use a SQLite3 database.

Use Pipenv to install the following dependencies.

* pytest
* pycodestyle
* pylint
* rope
* flask
* flask-sqlalchemy
* alembic
* flask-migrate
* python-dotenv
* sqlalchemy
* wtforms
* flask-wtf

Once you have those installed, activate your virtual environment.

The tests will expect you to store your application's code in an __app/__
directory. Inside the __app/__ directory, you will need to

* Create a __\_\_init\_\_.py__ file which will contain your Flask app declaration
* Create a __forms.py__ file which will contain your form classes
* Create a __models.py__ file which will contain your Flask-SQLAlchemy model
  classes.
* Create a __config.py__ file which will contain your configuration object

**NOTE:** If you are going to view this application in the browser while you
develop it, you will need to set a `SECRET_KEY` in your configuration. The unit
tests do not require it to be set. There is a reminder, later, to add it when
you'll need it.

## The requirements

For each of the following routes, you need to implement the requirements. These
requirements are what the tests test.

Test your application by running the command `pytest` from the root directory.

### App location

In the __app/\_\_init\_\_.py__ file, create your Flask application. You must
name the variable that holds the Flask application `app`.

You can define the routes wherever you'd like: in their own Blueprints or in the
__app/\_\_init\_\_.py__ file. Think of what file you need to import the `app`
from the `app` directory.

### GET "/"

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the following HTML:

```html
<h1>Python Flask Practice Assessment</h1>
```

### GET "/simple-form"

You must create a form class using Flask-WTF and WTForms. You must define this
in the `app.forms` module. The form class must be named `SimpleForm`. It must
define a form with the following specifications.

| Field name | Label       | Data type to collect   | Validators    |
| ---------- | ----------- | ---------------------- | ------------- |
| name       | "Name"      | string                 | data required |
| age        | "Age"       | integer                |               |
| bio        | "Biography" | multiline, long string |               |
| submit     | "Submit"    | n/a                    |               |

**NOTE:** The bio field is a TEXTAREA!!!

Create a route to handle `GET /simple-form`. In it use the form class you just
defined and render a template containing the form HTML.

The response from this HTTP request must be of type "text/html" (Flask sets this
for you when you render a template) and contain the form fields described above.
The method of the form should be "post" and "/simple-form". It should look
exactly like this.

```html
<form method="post" action="/simple-form">
```

**NOTE:** If you are going to view this in the browser, then you need to do things:

* Don't forget to put the `{{ form.csrf_token }}` value in your form. (The
  `form` variable, there, is whatever you name the form parameter for the
  template.)
* Go ahead and create a class named `Configuration` in `app.config`. Add a
  `SECRET_KEY` value to it. Get that configuration into your application by
  following the instructions in the next section.

### POST "/simple-form"

In the `app.config` module, create a class named `Configuration`. In there,
create an attribute named `SQLALCHEMY_DATABASE_URI` and set it to the value of
`'sqlite:///dev.db'`.

Import your environment variables into app.config.py (We trust that you know how
to use `os.environ.get`)

Notes:
 - If you are going to view this in the browser, add a `SECRET_KEY` attribute to
   the `Configuration` object, as well, and set it to anything.
 - SQLAlchemy will issue a warnings about `SQLALCHEMY_TRACK_MODIFICATIONS`.
   These will not effect your tests passing, and can be ignored.  Alternatively
   you may set it's value to False in your configuration object to address the
   warnings.

Import the `Configuration` class into the __app/\_\_init\_\_.py__ file and use
it to configure your Flask application.

Create a mapping class (model) in the `app.models` module named `SimplePerson`.
It must use the table name "simple_people". It must have the following mappings
on it.

 Remember that you will need to construct a `db` object by calling the
 `SQLAlchemy` constructor.  In order to avoid circular dependencies (caused by
 importing from `app`) import `db` into your __app/\_\_init\_\_.py__ and call
 `init_app` on it.

| Column name | Data type     | Constraints |
| ----------- | ------------- | ----------- |
| id          | INTEGER       | Primary key |
| name        | VARCHAR(50)   | not null    |
| age         | INTEGER       |             |
| bio         | VARCHAR(2000) |             |

**Note:** The assessment can cover INTEGER, VARCHAR, BOOLEAN, and TEXT types.

Create a migration for this and upgrade your database.

* Create a *separate* route to handle `POST /simple-form`.
* It should take the data from the posted form page (name, age, bio) and use the
  `SimpleForm` validate it
* If the form validates, it should
  * use the `SimplePerson` to insert it into the database using the
  `SimplePerson`
  * redirect to "/".
* If the form does not validate, it should show a message that reads "Bad Data"
  (the content type can be anything, including plain text).

### GET "/simple-form-data"

Create a route to handle `GET /simple-form-data`. In that route, have it query
all of the records, using the `SimplePerson`, for names that begin with
"M". Loop over those records in your view and render them using the following
template.

```html
<-- Your for loop, here -->
<div>{{ person.name }}</div>
<div>{{ person.age }}</div>
<div>{{ person.bio }}</div>
{% endfor %}
```

## The tests

The tests are grouped into two categories: simple and data-driven. The "simple"
tests do not require a database. The "data-driven" tests require you to store
data in a database by creating proper models. The model classes will be
inspected.

### The "simple" tests

These tests will check that the responses have values in the HTML and in your
`SimpleForm` class.

### The "database" tests

These tests will check your `Configuration` class, that those values are put
into your Flask application's `config` object, the model exist in your
`app.models` module, and that your routes handle and show data created in your
application.

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

[MDN]: https://developer.mozilla.org/en-US/
[Python]: https://docs.python.org/3/index.html
[WTForms]: https://wtforms.readthedocs.io/en/2.3.x/
[FlaskWTF]: https://flask-wtf.readthedocs.io/en/stable/
[Flask]: https://flask.palletsprojects.com/en/1.1.x/
[Flask-migrate]: https://flask-migrate.readthedocs.io/en/latest/
[FlaskSQLAlchemy]: https://flask-sqlalchemy.palletsprojects.com/en/2.x/
[SQLAlchemy]: https://docs.sqlalchemy.org/en/13/
[Alembic-documentation]: https://alembic.sqlalchemy.org/en/latest/
[Jinja]: https://jinja.palletsprojects.com/en/3.0.x/
