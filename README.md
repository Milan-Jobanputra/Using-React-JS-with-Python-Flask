# Using-React-JS-with-Python-Flask

# How to use basic React js integration in Python using Flask Framework.

When working with Python and React, you typically use Python for the backend (server-side) and React for the frontend (client-side). 
Below is a simple example using a Python web framework, Flask, for the backend, and React for the frontend.

# Create a Flask App (backend):
Install Flask using pip if you haven't already:

pip install flask

Create a file named app.py 

# Create a React App (frontend):

Make sure you have Node.js and npm installed. Create a new React app:

npx create-react-app react-app
cd react-app


We bit modified the content of the src/App.js , Here uploade file have modifed one.

Update public/index.html as per given in file here. 

# Run the Apps:
In one terminal, run the Flask backend:

python app.py

In another terminal, run the React frontend:

npm start

Visit http://localhost:3000 in your browser, and you should see "React with Python" along with the message fetched from the Flask backend.

This is a simple example, and in a real-world application, you would likely have more complex interactions, additional routes, state management, and possibly use a build tool like Webpack to bundle your frontend code.





