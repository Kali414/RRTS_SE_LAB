from flask import render_template,url_for,redirect,request,session
import pymongo


from app.auth import auth

import os
from dotenv import load_dotenv
load_dotenv()
Mongo_URL=os.getenv("Mongo_URL")
client=pymongo.MongoClient(Mongo_URL)
db=client["Practice_1"]
#collection=db["user_data"]

@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        role=request.form.get("role")

        if(role=="resident"):
            collection=db["Resident"]
            user = collection.find_one({"email": email, "password": password})
        
            if user:
                session["name"] = user["first_name"] + " " + user["last_name"]
                return redirect(url_for("home"))
            else:
                return redirect(url_for("auth.signup"))

        elif(role=="Supervisor"):
            collection=db["Supervisor"]
            user = collection.find_one({"email": email, "password": password})
        
            if user:
                # return redirect("Link for supervisor",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))
            else:
                return redirect(url_for("auth.signup"))
            
        elif(role=="City Admin"):
            collection=db["City_Admin"]
            user = collection.find_one({"email": email, "password": password})
        
            if user:
                # return redirect("Link for City admin",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))
            else:
                return redirect(url_for("auth.signup"))
            
        else:
            collection=db["Mayor"]
            user = collection.find_one({"email": email, "password": password})
        
            if user:
                # return redirect("Link for supervisor",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))
            else:
                return redirect(url_for("auth.signup"))
            
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
            print(role)

            if(role=="resident"):
                collection=db["Resident"]
                user = collection.find_one({"email": email, "password": password})
                if user:
                    return redirect(url_for("auth.login"))
                # Attempt to find the document with the highest _id
                last_doc = collection.find_one(sort=[("_id", -1)])

                if last_doc is None:
                    # If no document is found, start with "R001"
                    new_id = "R001"
                else:
                    # Get the last _id and increment its numeric part
                    last_id = last_doc.get("_id")
                    # Extract numeric part, increment it, and format with zero-padding for 3 digits
                    new_num = int(last_id[1:]) + 1
                    new_id = "R" + str(new_num).zfill(3)

                # Add the new _id to the data dictionary
                data["_id"] = new_id

                # Insert the new document into the collection
                collection.insert_one(data)
                session["name"]=first_name+" "+last_name
                session["role"]=role
                session["email"]=email
                return redirect(url_for("home"))

            elif(role=="supervisor"):
                collection=db["Supervisor"]
                user = collection.find_one({"email": email, "password": password})
                if user:
                    return redirect(url_for("auth.login"))
                #Attempt to find the document with the highest _id
                last_doc = collection.find_one(sort=[("_id", -1)])

                if last_doc is None:
                    # If no document is found, start with "R001"
                    new_id = "S001"
                else:
                    # Get the last _id and increment its numeric part
                    last_id = last_doc.get("_id")
                    # Extract numeric part, increment it, and format with zero-padding for 3 digits
                    new_num = int(last_id[1:]) + 1
                    new_id = "S" + str(new_num).zfill(3)

                # Add the new _id to the data dictionary
                data["_id"] = new_id
                collection.insert_one(data)
                # return redirect("Link for supervisor",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))

            elif(role=="city_admin"):
                collection=db["City_admin"]
                user = collection.find_one({"email": email, "password": password})
                if user:
                    return redirect(url_for("auth.login"))

                #Attempt to find the document with the highest _id
                last_doc = collection.find_one(sort=[("_id", -1)])

                if last_doc is None:
                    # If no document is found, start with "R001"
                    new_id = "C001"
                else:
                    # Get the last _id and increment its numeric part
                    last_id = last_doc.get("_id")
                    # Extract numeric part, increment it, and format with zero-padding for 3 digits
                    new_num = int(last_id[1:]) + 1
                    new_id = "C" + str(new_num).zfill(3)

                # Add the new _id to the data dictionary
                data["_id"] = new_id
                collection.insert_one(data)
                # return redirect("Link for city admin",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))

            else:
                collection=db["Mayor"]
                user = collection.find_one({"email": email, "password": password})
                if user:
                    return redirect(url_for("auth.login"))

                #Attempt to find the document with the highest _id
                last_doc = collection.find_one(sort=[("_id", -1)])

                if last_doc is None:
                    # If no document is found, start with "M001"
                    new_id = "M001"
                else:
                    # Get the last _id and increment its numeric part
                    last_id = last_doc.get("_id")
                    # Extract numeric part, increment it, and format with zero-padding for 3 digits
                    new_num = int(last_id[1:]) + 1
                    new_id = "M" + str(new_num).zfill(3)

                # Add the new _id to the data dictionary
                data["_id"] = new_id
                collection.insert_one(data)
                 # return redirect("Link for mayor",name=first_name+" "+last_name,role=role,email=email)
                return redirect(url_for("home"))
            
        else:
            return redirect(url_for("signup"))

    return render_template("signup.html")


@auth.route("/logout")
def clear_session():
    session.clear()
    return redirect(url_for("home"))


