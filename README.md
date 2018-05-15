# React Native & Django Authentication

This project is a simple example of the use of the above mentioned technologies in the context of authentication.
It consists of a frontend React Native application and a Django powered backend auth API enabled by the Rest Framework. 

## Prerequisites

* Python > 3.4
* nodejs > 9

## Installation

Clone this directory:

```bash
git clone https://github.com/afdezl/django-rn-auth-example.git
cd django-rn-auth-example
```

There are to subdirectories that contain the React Native frontend and the Djanjo + Rest Framework backend.

### Backend API installation

Navigate to the **backend** directory, create a virtualenv and install the project requirements.

_NOTE: This project will only work with Python > 3.4_

```bash
cd backend

# Create a virtualenv
mkvirtualenv django-rn-auth
pip install -r requirements.txt
```

As this is a Django project, it is recommended that you run the initial migrations and create a supersuer to get started.

```bash
python manage.py migrate
python manage.py createsuperuser
```

### React Native app installation

Navigate to the **authapp** directory and install the required node pacakges:

```bash
npm install
```

Once the installation is over, you will also need to grab your phone and download the Expo app (this is the simplest solution) from the Play store or App store.

Optionally, you can create a virtual device on your computer.

## Usage

To get started with a working version of the project you must have completed the above steps or ensured that all the setup is ready.

Open a terminal window and navigate to the **django-rn-auth/backend** directory, start a local dev server with you local IP as parameter:

```bash
python manage.py runserver <YOUR_LOCAL_IP>:8000
```

Open another terminal window and navigate to the **django-rn-auth/authapp** directory.

You will need to make sure that the project config file **django-rn-auth/authapp/src/config/index.js** has your local IP assigned to the `localIP` variable.

Once this is properly configured, on the *authapp* project root start a dev server:

```bash
npm start
```

A QR code will be displayed on the screen, make sure your phone and laptop are connected to the same network and scan the QR code through the Expo app.

The application should start and you can login with your superuser credentials or create a new user.


