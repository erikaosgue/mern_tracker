const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Will allow us to have env variables in
// the .env file
require('dotenv').config();

// Creates our express server
const app = express();
const port = process.env.PORT || 5000;


// cors middleware
app.use(cors());

// Allow to parse Json (Send and recieve Json)
app.use(express.json());


//Set up the connection with mongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Create an instance connection
const conection = mongoose.connection;
conection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
})

// Start our server
app.listen(port, () => {
  // console.log('Server is running on port' + port);
  console.log(`Server is running on port ${port}`);
})