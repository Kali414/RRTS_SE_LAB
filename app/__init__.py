from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app)

app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
from app import routes

