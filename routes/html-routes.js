module.exports = function(app) {

  app.get("/", function(req, res) {
        res.render("index");
      });
  
  
  


  app.get("/parties/:id", function(req, res) {
    var event = {event: req.params.id}
    res.render("party", event);
  });


};
    