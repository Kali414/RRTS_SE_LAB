from flask import render_template,url_for,redirect,request,session
import pymongo

from app.auth import auth

client=pymongo.MongoClient("mongodb://localhost:27017/")
db=client["Practice_1"]
collection=db["user_data"]

@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        role=request.form.get("role")
        
        user = collection.find_one({"email": email, "password": password})
        
        if user:
            session["name"] = user["first_name"] + " " + user["last_name"]
            return redirect(url_for("home"))
        
    return render_template("login.html")


@auth.route("/signup" , methods=["GET","POST"])
def signup():
    if(request.method=="POST"):
        first_name=request.form.get("first")
        last_name=request.form.get("last")
        email=request.form.get("email")
        number=request.form.get("number")
        city=request.form.get("city")
        state=request.form.get("state")
        password=request.form.get("password")
        role=request.form.get("role")

        if(first_name and last_name and email and number and city and state and password and role):
            data={
                "first_name":first_name,
                "last_name":last_name,
                "email":email,
                "number":number,
                "city":city,
                "state":state,
                "password":password,
                "role":role
            }
            collection.insert_one(data)
            session["name"]=first_name+" "+last_name
            session["role"]=role
            session["email"]=email

            return redirect(url_for("home"))
        else:
            return redirect(url_for("signup"))
    return render_template("signup.html")


@auth.route("/logout")
def clear_session():
    session.clear()
    return render_template("home.html",name=None)


