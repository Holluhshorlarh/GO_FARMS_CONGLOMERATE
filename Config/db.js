// Import the mongoose package
const mongoose = require("mongoose");

// Define an async function to connect to the database
async function connectToDB() {
  try {
    // Use the mongoose.connect() method to establish a connection to the database
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true, // Set to true to avoid deprecation warnings
      useUnifiedTopology: true, // allows the use of the new Server Discover and Monitoring engine
      useFindAndModify: false, // allows the use of the native findOneAndUpdate() instead of the deprecated findAndModify()
      useCreateIndex: true, 
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

// Export the connectToDB function to be used by other modules
module.exports = connectToDB;
