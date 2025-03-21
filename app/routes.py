from flask import render_template,jsonify,request,flash,redirect,url_for,session
import pymongo
from app import app


import os
from dotenv import load_dotenv
load_dotenv()
Mongo_URL=os.getenv("Mongo_URL")
client=pymongo.MongoClient(Mongo_URL)
db=client["Practice_1"]
collection=db["Complaints"]

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/report_issue", methods=["GET", "POST"])
def report_issue():
    if not session.get("name"):
        return redirect(url_for("auth.login"))
        
    if request.method == "GET" :
        return render_template("report_issue.html")

    last_issue = collection.find_one(sort=[("issue_id", -1)]) 
    issue_title = request.form.get("title")
    state=request.form.get("state")
    city=request.form.get("city")
    location = request.form.get("location")
    description = request.form.get("description")
    issue_type = request.form.get("issue_type")
    severity_level = request.form.get("severity")
    image = request.files.get("images")

    if issue_title and location and description and issue_type and severity_level and image:
        data = {
            "issue_title": issue_title,
            "location": location,
            "description": description,
            "issue_type": issue_type,
            "state":state,
            "city":city,
            "severity_level": severity_level,
            "image":image.read()

        }
        collection.insert_one(data)
        flash("Issue reported successfully!", "success")
        return redirect(url_for("home"))
    else:
        flash("All fields are required!", "danger")

    return render_template("report_issue.html")

@app.route("/track-repair")
def track_repair():
    if not session.get("name"):
        return redirect(url_for("auth.login"))

    return render_template("track_repair.html")

@app.route("/contact",methods=["GET","POST"])
def contact():
    return render_template("contact.html")


@app.route("/repairs")
def repairs():

    if(request.method=="GET"):
        query = list(collection.find().limit(10))
        return jsonify(query),200
    
    city = request.form.get("city")
    user_id = request.form.get("user_id")
    status = request.form.get("status")

    query = {"$or": [{"city": city}, {"user_id": user_id}, {"status": status}]}

    repair = list(collection.find(query))
    print(repair)

    
    # repair = [
    #     { "id": "R001", "location": "Downtown", "status": "pending" },
    #      { "id": "R002", "location": "Uptown", "status": "in_progress" },
    #     { "id": "R003", "location": "West Side", "status": "completed" },
    #     { "id": "R004", "location": "East Side", "status": "pending" }
    # ]

    return jsonify(repair),200