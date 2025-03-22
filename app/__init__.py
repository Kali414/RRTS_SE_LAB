from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app)

app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["MONGO_URI"] = os.getenv("MONGO_URL")

from app import routes

