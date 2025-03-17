from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.secret_key="your_secret_key"

CORS(app)


from app import routes

