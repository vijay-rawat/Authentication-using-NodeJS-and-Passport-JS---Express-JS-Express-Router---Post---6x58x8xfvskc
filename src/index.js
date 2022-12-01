// Requiring Modules - WRITE ALL NECESSARY IMPORTS HERE
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./routes/router');
require('dotenv').config();

// Set up view engine and layout
app.use(expressLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Set up session - WRITE YOUR CODE HERE

app.use(express.urlencoded({ extended: false }));

// Set up Passport - WRITE YOUR CODE HERE

app.use(routes);

// Set up Express server
if (!module.parent)
    app.listen(3000, () => {
        console.log(`Listening on port 3000`);
    });

// UserDetails.register({ username: 'Matt', active: false }, 'matt123');
//The above statement states that the database already contains a user with username Matt and password matt123, you can register your own user info by uncommenting the above line and entering any username and password pair.

module.exports = app