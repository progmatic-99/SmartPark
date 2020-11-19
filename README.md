## SmartPark

#### PWA for Parking Space using IOT


![Basic Prototype](prototype.svg)

#### Steps to run the django app:-

> These steps are for **Linux based OS**

1. Create a virtual env with `python3 -m venv env`
2. Activate virtual env with `. env/bin/activate`
3. Install requirements using `pip install -r requirements.txt`
4. Delete the migrations folder, if any.
5. Make migration, `py manage.py makemigrations booking`
6. `py manage.py migrate --run-syncdb`
7. Run the server locally using `python3 manage.py runserver`
8. Go to `http://127.0.0.1:8000/`
