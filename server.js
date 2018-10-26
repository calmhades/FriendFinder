var express = require("express");
//setup path, bodyparse, express, and PORT
var path = require("path");
var bodyParser = require("body-parser")
var app = express();
var PORT = process.env.PORT || 3000;

//load bodyparser types
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set port to listen
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});

//link htmlRoutes to server.js
require('./app/routing/htmlRoutes.js')(app);

// link apiRoutes to server.js
require('./app/routing/apiRoutes.js')(app);
