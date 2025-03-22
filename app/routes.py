from flask import render_template,jsonify,request,flash,redirect,url_for,session
from app import app

from database import resident,supervisor,city_admin,mayor,complaint,issues,db

@app.route("/")
def home():
    return render_template("home.html")


@app.route("/report_issue", methods=["GET", "POST"])
def report_issue():
    if not session.get("name"):
        return redirect(url_for("auth.login"))
        
    if request.method == "GET" :
        return render_template("report_issue.html")

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
        complaint.insert_one(data)
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
        query = list(complaint.find().limit(10))
        return jsonify(query),200
    
    city = request.form.get("city")
    user_id = request.form.get("user_id")
    status = request.form.get("status")

    query = {"$or": [{"city": city}, {"user_id": user_id}, {"status": status}]}

    repair = list(complaint.find(query))
    print(repair)

    
    # repair = [
    #     { "id": "R001", "location": "Downtown", "status": "pending" },
    #      { "id": "R002", "location": "Uptown", "status": "in_progress" },
    #     { "id": "R003", "location": "West Side", "status": "completed" },
    #     { "id": "R004", "location": "East Side", "status": "pending" }
    # ]

    return jsonify(repair),200