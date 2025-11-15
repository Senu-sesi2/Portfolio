import requests
from flask import Flask, flash, render_template, request, redirect, url_for, send_from_directory, make_response, get_flashed_messages
from werkzeug.utils import secure_filename
from flask_sqlalchemy import SQLAlchemy
from create_table import RecipeTable, engine
import os
from flask import jsonify
import json
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from waitress import serve

REVIEWS_FILE = 'reviews.json'
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.join(os.path.dirname(__file__), "recipes.db")}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Recommended for performance
app.secret_key = '8930475930'  # Secret key
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(__file__), 'recipe_images')
db = SQLAlchemy(app)
login_manager = LoginManager(app)

# EDAMAM API configuration
EDAMAM_API_URL = 'https://api.edamam.com/api/recipes/v2'
EDAMAM_APP_ID = 'd5bc01db'
EDAMAM_API_KEY = '7cb36906dd09adf1ac5dd13da5f09ae0'

# Link the RecipeTable class to the database engine
RecipeTable.metadata.create_all(engine)


# Recipe model
class Recipe(RecipeTable, db.Model):

    def __repr__(self):
        return f'<Recipe {self.title}>'


# User model
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            flash("Username already exists. Please choose a different username.", "error")
            return redirect(url_for('register'))

        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()

        flash("Account created successfully! You can now log in.", "success")
        return redirect(url_for('login'))
    # Clear the flash message queue before rendering the registration template
    for message in get_flashed_messages():
        flash(message)

    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = User.query.filter_by(username=username).first()
        if user and user.password == password:
            login_user(user)
            flash("Logged in successfully!", "success")
            return redirect(url_for('index'))

        flash("Invalid username or password. Please try again.", "error")
        return redirect(url_for('login'))
     # Clear the flash message queue before rendering the login template
    for message in get_flashed_messages():
        flash(message)

    return render_template('login.html')


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash("Logged out successfully!", "success")
    return redirect(url_for('index'))


@app.route('/search', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        query = request.form['query']

        # Make a request to the EDAMAM API to retrieve recipe data
        response = requests.get(
            EDAMAM_API_URL,
            params={'q': query, 'app_id': EDAMAM_APP_ID, 'app_key': EDAMAM_API_KEY}
        )

        if response.status_code == 200:
            data = response.json()
            recipes = data.get('hits', [])
            return render_template('results.html', recipes=recipes)

    return render_template('search.html')


@app.route('/create', methods=['GET', 'POST'])
@login_required
def create():
    if not current_user.is_authenticated:
        # Redirect the user to the login page
        return redirect(url_for('login'))
    if request.method == 'POST':
        title = request.form['title']
        ingredients = request.form['ingredients']
        instructions = request.form['instructions']
        nutritional_value = request.form['nutritional_value']
        dietary_restrictions = request.form['dietary_restrictions']
        image = request.files.get('image')

        try:
            if image:  # Check if an image was uploaded
                filename = secure_filename(image.filename)  # Sanitize the filename
                image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))  # Save the image file

            new_recipe = Recipe(
                title=title,
                ingredients=ingredients,
                instructions=instructions,
                nutritional_value=nutritional_value,
                dietary_restrictions=dietary_restrictions,
                image=filename if image else None  # Set the image filename or None if no image uploaded
            )

            db.session.add(new_recipe)
            db.session.commit()

            flash("Recipe created successfully!", "success")
            return redirect(url_for('index'))
        except Exception as e:
            # Log the error for debugging
            print(f"Error creating recipe: {e}")
            # Display a flash message to the user
            flash("An error occurred while creating the recipe. Please try again.", "error")
            return render_template('create.html')  # Re-render the create form with error message
         # Clear the flash message queue before rendering the login template
    if request.method == 'GET':
        for message in get_flashed_messages():
            flash(message)

    

    return render_template('create.html')


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


def load_reviews():
    if os.path.exists(REVIEWS_FILE):
        with open(REVIEWS_FILE, 'r') as file:
            return json.load(file)
    return []


def save_reviews(reviews):
    with open(REVIEWS_FILE, 'w') as file:
        json.dump(reviews, file, indent=4)


@app.route('/submit_review', methods=['POST'])
@login_required
def submit_review():
    data = request.get_json()
    review = data.get('review')

    if not review:
        return jsonify({'error': 'Review text is required'}), 400

    reviews = load_reviews()
    reviews.append({'review': review})

    save_reviews(reviews)

    return jsonify({'message': 'Review submitted successfully'}), 200

@app.route('/view_recipe')
def view_recipe():
    return render_template('view_recipe.html')


@app.route('/view_more_recipes')
def view_recipes():
    all_recipes = Recipe.query.all()
    return render_template('recipes.html', recipes=all_recipes)


if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=5000)
