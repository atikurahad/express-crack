const express = require('express');
const router = require('./src/routes/api');
const app = express();
const mongoose = require('mongoose');


//sequrity middlewares import
 const cors = require('cors');
 const xss = require('xss-clean');
 const rateLimit = require('express-rate-limit');
 const mongoSanitize = require('express-mongo-sanitize');

 // sequrity middlewares implementation
 app.use(cors());
 app.use(express.json());
 app.use(xss());
 app.use(mongoSanitize());

 // Define a rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  });
    app.use(limiter);


  //MongoDB database connection
async function connectToMongoDB() {
  try {
      const URI = `mongodb://0.0.0.0:27017/practice`;
      await mongoose.connect(URI);
      console.log("Connected to MongoDB");

      // Perform database operations here
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
  }
}

// Call the async function to connect to MongoDB
connectToMongoDB();

app.use("/api/v1",router)


module.exports = app;