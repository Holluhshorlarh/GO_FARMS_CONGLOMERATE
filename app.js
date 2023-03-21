// imports and calls the dotenv module which is used to load environment variables from the .env file
require('dotenv').config();

// express module import
const express = require('express');

// import mongoose
const mongoose = require('mongoose');

// create an instance of the express application
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Middleware to serve the static file needed to render the home page
app.use(express.static('public'));

// Retrieves the value of environment variable named dbUrl and assigns it to the constant variable dbUrl
const {dbUrl, PORT} = process.env;

// Import user route module
const userRoutes = require('./Routes/userRoutes');

// Import farm product route module
const farmProductRoutes = require('./routes/farmProductRoutes');

// Import Order route module
const orderRouter = require('./Routes/orderRoutes');

// farm product routes
app.use('/api/v1', farmProductRoutes);

// User routes
app.use("/api/v1", userRoutes);

// // User Order Route
// app.use('/api/v1/', orderRouter);

// Route to serve the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const start = async () => {
    try {
      await mongoose.connect(dbUrl, {     // Establishes a connection to the MongoDB database
        useNewUrlParser: true,            // Set to true to avoid deprecation warnings
        useUnifiedTopology: true,         // Allows the use of the new Server Discover and Monitoring engine
      });
      console.log('Connected to database.');
      app.listen(PORT, () => {                     // listen to server on specified port
        console.log(`Server started on port: ${PORT}`);
      });
    } catch (error) {
      console.log('MongoDB connection error:', error);
    }
  }
  
  start();     // invokes the start function