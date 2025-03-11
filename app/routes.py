from flask import render_template,jsonify
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

@app.route("/repairs")
def repairs():
    repair = [
        { "id": "R001", "location": "Downtown", "status": "pending" },
        { "id": "R002", "location": "Uptown", "status": "in_progress" },
        { "id": "R003", "location": "West Side", "status": "completed" },
        { "id": "R004", "location": "East Side", "status": "pending" }
    ]
    return jsonify(repair),200