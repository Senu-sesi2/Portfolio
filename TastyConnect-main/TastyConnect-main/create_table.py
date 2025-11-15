import os
import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, MetaData, Table, inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base, Session
from werkzeug.datastructures import FileStorage
from flask_sqlalchemy import SQLAlchemy

# Get the absolute path of the directory containing the create_table.py file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Specify the relative path to the database file
database_filename = 'recipes.db'

# Construct the full path to the database file
database_path = os.path.join(current_dir, database_filename)

# Create the engine to connect to the SQLite database
engine = create_engine(f'sqlite:///{database_path}')

# Create a metadata object
metadata = MetaData()

# Associate the metadata with the engine
metadata.bind = engine

# Define the base class for declarative models
Base = declarative_base()
db = SQLAlchemy()

# Create the upload folder
upload_folder = os.path.join(current_dir, 'recipe_images')
if not os.path.exists(upload_folder):
    os.makedirs(upload_folder)
    print("The 'recipe_images' folder has been created successfully!")
else:
    print("The 'recipe_images' folder already exists!")

# Define the table schema
class RecipeTable(Base):
    __tablename__ = 'recipe'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    ingredients = Column(String)
    instructions = Column(String)
    nutritional_value = Column(String)
    dietary_restrictions = Column(String)
    image = Column(String(200))

def save_image(file):
    filename = file.filename
    file_path = os.path.join(upload_folder, filename)
    file.save(file_path)
    return filename

# Export the db object
__all__ = ['db']

# define table schema to store reviews
class Review(Base):
    __tablename__ = 'reviews'
    id = Column(Integer, primary_key=True)
    reviewer_name = Column(String)
    comment = Column(String)

    def __repr__(self):
        return f'<Recipe {self.title}>'
    

# Define the "user" table
class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)

# Create an inspector
inspector = inspect(engine)


# Create the table in the database
Base.metadata.create_all(engine)

# Check if the "user" table exists
if inspector.has_table("user"):
    print("The 'user' table exists.")
else:
    print("The 'user' table does not exist.")

# Check if the "user" table exists
if inspector.has_table("Review"):
    print("The 'Review' table exists.")
else:
    print("The 'Review' table does not exist.")

# Check if the "user" table exists
if inspector.has_table("recipe"):
    print("The 'recipetable' table exists.")
else:
    print("The 'recipetable' table does not exist.")

