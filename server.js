// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});