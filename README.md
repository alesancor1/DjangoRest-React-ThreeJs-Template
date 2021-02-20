# <img src="https://raw.githubusercontent.com/alesancor1/DjangoRest-React-ThreeJs-Template/master/game/public/favicon.ico" height="50px">  DjangoRest & React+ThreeJs

Template repository using Django in backend as a Rest API consumed by React in front.

## Get Started 🚀

Follow these instructions in order to start your new project!

### Required 🔧

In order to build the app you will need the following frameworks and tools:

* [Node.js](https://nodejs.org/es/download/) - For executing React and install dependencies such as ThreeJs
* [Python + pip](https://www.python.org/downloads/) - Needed for Django & DjangoRestFramework

### Installing dependencies & Running code 📦

After the installation of Python & pip it's time to install Django and DjangoRestFramework:

* <b>Django</b> - See docs [here](https://docs.djangoproject.com/en/3.1/)
```
pip install Django==(vesion)
```

* <b>DjangoRestFramework</b> - Already configured in this template, just install through pip, see docs [here](https://www.django-rest-framework.org/)
```
pip install djangorestframework
```

Now that Django is installed we can run the db this way:
```
cd ./db
python manage.py runserver
```
<b>Note:</b> If python has not been added to PATH ```python``` will not be recogniced, instead you can use ```py -3``` (if you installed python 3 or higher) or ```py -2``` (if you installed python 2) 

<br></br>
Now let's install required dependencies for React-app (ThreeJs is already included)
```
cd ./app
npm install
```
Once the installation finish we can run the js code: 
```
npm start
```
This will open a browser window in <b>http://localhost:3000</b> (if not just do it manually)
You should see a blue cube spinning in the center of screen, the code for this cube is located in <b>App.js</b> file.


## Author ✒️

* **Alejandro Santisteban** - *alesancor1@alum.us.es* - [Github](https://github.com/alesancor1)
