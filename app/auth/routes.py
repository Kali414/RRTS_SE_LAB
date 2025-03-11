from flask import render_template,url_for,redirect,request

from app.auth import auth

@auth.route("/login", methods=["GET","POST"])
def login():
    if(request.form.get("email")=="kalicharansahoo91@gmail.com" and request.form.get("password")=="qwerty123"):
        return redirect(url_for("home"))
    return render_template("login.html")

@auth.route("/signup" , methods=["GET","POST"])
def signup():
    if(request.form.get("first")=="Kalicharan" and request.form.get("last")=="Sahoo" and request.form.get("email")=="kalicharansahoo91@gmail.com" and request.form.get("password")=="qwerty123"):
        return redirect(url_for("home"))
    return render_template("signup.html")