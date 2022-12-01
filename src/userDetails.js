//WRITE CODE FOR ALL NECESSARY IMPORTS
const mongoose = require('mongoose');
require('dotenv').config();

// Connecting Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setting up the schema
const User = new mongoose.Schema({
  username: String,
  password: String,
});

// Setting up the passport plugin - WRITE YOUR CODE HERE

module.exports = mongoose.model('User', User, 'passportuser');