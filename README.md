# youtube_subscriber
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

API Endpoints
1. "/ " -> This default route will render the "index.html file" when the app launches.
2. "/subscribers " -> This endpoint returns an array of all subscribers in the database.
3. "/subscribers/names " -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel

   Application Folder Structure
[src/app.js] -> For handling requests and responses.

[/index.js] -> To connect and start the server.

[src/createDatabase.js] -> To create database on MongoDB.

[src/data.js] -> Data that has to be connnected to a database.

[src/models/subscribers.js] -> For the schema.

[src/index.html] -> The home page for the application.



Installation
You'll need to have Node.js and MongoDB installed on your computer in order to begin working on the project.

Once installed, Clone this repository to your local machine.

Install the required dependencies as mentioned below by using npm install .

Start the server by nodemon index.js

Dependencies
Following dependencie are needed to run this application:

express

mongoose

nodemon.




Web Deployment :https://get-youtube-subscriber-db5m.onrender.com/

