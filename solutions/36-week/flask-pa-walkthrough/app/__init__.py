from flask import Flask, render_template, redirect
from .forms import SimpleForm
from .config import Configuration
from .models import db, SimplePerson
from flask_migrate import Migrate

# from .routes import simple <- import for blueprint

app = Flask(__name__)
app.config.from_object(Configuration)
# app.register_blueprint(simple.bp) <- register blueprint
db.init_app(app)
Migrate(app, db)


# routes
@app.route("/")
def index():
    return render_template("main_page.html")


@app.route("/simple-form")
def simple_form():
    form = SimpleForm()
    return render_template("simple_form.html", form=form)


@app.route("/simple-form", methods=["POST"])
def simple_form_post():
    form = SimpleForm()
    if form.validate_on_submit():
        model = SimplePerson()
        form.populate_obj(model)
        db.session.add(model)
        db.session.commit()
        return redirect("/")
    return "Bad Data"


@app.route("/simple-form-data")
def simple_form_data():
    people = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template("simple_form_data.html", people=people)
