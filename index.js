const express = require('express');

const app = require("./src/app");
const mongoose = require('mongoose');
const Subscriber = require('./src/models/subscriber');

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

mongoose.connect('mongodb://127.0.0.1:27017/subsriberdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Database connection error:', error));
db.once('open', () => {
  console.log('Connected to database');
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
