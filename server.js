//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;


// Ties in models folder
var db = require("./models");


//Handles JSON Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/html-routes.js")(app);


//Sequelize sync handler
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on localhost:" + PORT);
    });
  });