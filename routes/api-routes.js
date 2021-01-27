var db = require("../models");
module.exports = function (app) {
  // API Post for user fname and lname
  app.post("/api/users", function (req, res) {
    db.User.create({
      fname: req.body.fname,
      lname: req.body.lname
    }).then(function (data) {
      res.json(data);
    });
  });
  // API Post for party name
  app.post("/api/parties", function (req, res) {
    console.log("party route")
    db.Party.create({
      partyName: req.body.partyName
    }).then(function (data) {
      res.json(data);
    });
  });
  // API Post for location
  app.post("/api/locations", function (req, res) {
    db.Location.create({
      address: req.body.address
    }).then(function (data) {
      res.json(data);
    });
  });
  // API Post for events
  app.post("/api/events", function (req, res) {
    db.Event.create({
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      UserId: req.body.UserId,
      PartyId: req.body.PartyId,
      LocationId: req.body.LocationId
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/users", function (req, res) {
    db.User.findAll({
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      console.log(data)
      res.json(data);
    });
  });
  app.get("/api/parties", function (req, res) {
    db.Party.findAll({
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      console.log(data)
      res.json(data);
    });
  });
  app.get("/api/locations", function (req, res) {
    db.Location.findAll({
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      console.log(data)
      res.json(data);
    });
  });
  app.get("/api/events", function (req, res) {
    db.Event.findAll({
      include: [db.User, db.Party, db.Location],
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/events/one", function (req, res) {
    db.Event.findAll({
      include: [db.User, db.Party, db.Location],
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/events/all", function (req, res) {
    db.Event.findAll({
      include: [db.User, db.Party, db.Location],
    }).then(function (data) {
      res.json(data);
    });
  });
  ///Page 2
  //Start Attendee
  app.post("/api/attendee", function (req, res) {
    db.Attendee.create({
      attendeeName: req.body.attendee
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/attendee", function (req, res) {
    db.Attendee.findAll({
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      console.log(data)
      res.json(data);
    });
  });
  //End Attendee
  //Start Category
  app.post("/api/category", function (req, res) {
    db.Category.create({
      CategoryItem: req.body.categoryItem
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/category", function (req, res) {
    db.Category.findAll({
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      console.log(data)
      res.json(data);
    });
  });
  //End Category
  app.post("/api/guests", function (req, res) {
    db.Guest.create({
      PartyFavor: req.body.partyFavor,
      AttendeeId: req.body.attendeeId,
      CategoryId: req.body.categoryId,
      EventId: req.body.eventId
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/guest/all", function (req, res) {
    db.Guest.findAll({
      include: [db.Attendee, db.Category, db.Event],
    }).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/guests/one", function (req, res) {
    db.Guest.findAll({
      include: [db.Attendee, db.Category, db.Event],
      limit: 1,
      where: {},
      order: [['createdAt', 'DESC']]
    }).then(function (data) {
      res.json(data);
    });
  });
}

