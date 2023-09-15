const express = require('express');

const app = require("./src/app");
const mongoose = require('mongoose');
const Subscriber = require('./src/models/subscriber');

// Middleware to parse JSON bodies and URL-encoded bodies
app.use(express.json()); // Parsing JSON bodies
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://jaimatadibhadrakali:Naman99@cluster0.3zj9c95.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

connectToDatabase();


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
