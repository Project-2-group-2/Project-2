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

// API Post for party name
  app.post("/api/parties", function(req, res) {
    db.Party.create({
        partyName: req.body.partyName
    }).then(function(data) {
      res.json(data);
    });
  });

// API Post for location
  app.post("/api/parties", function(req, res) {
    db.Location.create({
        address: req.body.address
    }).then(function(data) {
      res.json(data);
    });
  });

  // APT Post for events
  app.post("/api/parties", function(req, res) {
    db.Event.create({
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    }).then(function(data) {
      res.json(data);
    });
  });

}

