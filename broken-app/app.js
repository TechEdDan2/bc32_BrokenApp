const express = require('express');
const ExpressError = require('./expressError');
const ghRoutes = require('./routes/githubRoutes');

const axios = require('axios');
var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// ------------- //
//    Routes     //
// ------------- //
app.get('/', (req, res) => {
  return res.send("<h1>Welcome to the <i>Express</i> Github User API!</h1> <p>Visit /users to search for users.</p>");
});

// --------------------- //
// Express Router Routes //
// --------------------- //
app.use('/users', ghRoutes);

// --------------------- //
// Error Handling Routes //
// --------------------- //
// Dealing with the favicon issue
app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
})

//404 handler
app.use(function (req, res, next) {
  return next(new ExpressError("Not Found", 404));
});

// Generic Error Handler
app.use(function (err, req, res, next) {
  // The default status is 500 Internal Server Error
  let status = err.status || 500;

  //Set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});


module.exports = app;
