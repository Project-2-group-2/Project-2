var db = require("../models");

module.exports = function(app) {


// API Post for user fname and lname    
app.post("/api/parties", function(req, res) {
    db.User.create({
        fname: req.body.fname,
        lname: req.body.lname
    }).then(function(data) {
      res.json(data);
    });
  });

}