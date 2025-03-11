from flask import render_template
from app import app

@app.route("/")
def home():
    return render_template("home.html")
@app.route("/report_issue")
def report_issue():
    return render_template("report_issue.html")

@app.route("/track-repair")
def track_repair():
    return render_template("track_repair.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")