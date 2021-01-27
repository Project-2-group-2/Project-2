$(document).ready(function () {

  // Variable assignment
  const firstName = $("#first-name");
  const lastName = $("#last-name");
  const partyName = $("#party-name");
  const address = $("#party-address");
  const date = $("#date");
  const startTime = $("#start-time");
  const endTime = $("#end-time");
  const submitButton = $("#submit-button")
  const attendeeName = $("#party-attendee")
  const partyFavor = $("#party-favor")

  //Arrays
  var nameArray = []
  var partyArray = []
  var locationArray = []

  // Takes in values from input fields and arrays
  function userSubmit(e) {
    e.preventDefault();

    var data = {
      date: date.val().trim(),
      startTime: startTime.val().trim(),
      endTime: endTime.val().trim(),
      UserId: nameArray.slice(-1)[0],
      PartyId: partyArray.slice(-1)[0],
      LocationId: locationArray.slice(-1)[0]
    }
    // Creates a object to pass into AJAX
    //console.log(data)
    insertData(data);

  }

  // AJAX Post for Events Table
  function insertData(data) {

    $.post("/api/events", data)
      .then(function (res) {
        //console.log(res)
        alert("Party Created")
        getEvent()
      });
  }

  // Handles POST AJAX for users
  function nameSubmit(e) {
    e.preventDefault();
    if (!firstName.val().trim() || !firstName.val().trim()) {
      return;
    }

    var name = {
      fname: firstName.val().trim(),
      lname: lastName.val().trim(),

    }

    $.post("/api/users", name)
      .then(function (res) {
        //console.log(res)
      });

  }

  // Handles POST AJAX for parties
  function partySubmit(e) {
    e.preventDefault();

    var party = {
      partyName: partyName.val().trim(),
    }

    $.post("/api/parties", party)
      .then(function (res) {
        //console.log(res)
      });

  }

  // Handles POST AJAX for location
  function locationSubmit(e) {
    e.preventDefault();

    var location = {
      address: address.val().trim(),
    }

    $.post("/api/locations", location)
      .then(function (res) {
        //console.log(res)
      });

  }

  //Handles GET AJAX for user
  function getName() {
    $.get("/api/users", function (data) {
      var first = data[0].fname
      var last = data[0].lname
      var name = data[0].id
      nameArray.push(name)
      //console.log(nameArray[0])

    });
  }

  //Handles GET AJAX for party
  function getParty() {
    $.get("/api/parties", function (data) {

      //console.log(data[0])
      var party = data[0].partyName
      var partyId = data[0].id
      partyArray.push(partyId)

    });
  }

  //Handles GET AJAX for location
  function getLocation() {
    $.get("/api/locations", function (data) {

      //console.log(data[0])
      var location = data[0].address
      var locationId = data[0].id
      locationArray.push(locationId)

    });
  }

  function getEvent() {
    $.get("/api/events", function (data) {
      //console.log(data[0])
      // data.forEach(element =>  $(".event-list").prepend("<div>", element.User.fname + " " + element.Party.partyName + " " + element.Location.address +   "</div>"));

    })
  }

  //Test
  submitButton.on("click", function postInput(e) {
    e.preventDefault();
    partySubmit(e)
    locationSubmit(e)
    nameSubmit(e)
    setTimeout(function () {
      getParty()
      getLocation()
      getName()
    }, 100);
    setTimeout(function () {
      userSubmit(e)
    }, 300);

  })

  //Page 2
  function attendeeSubmit(e) {
    e.preventDefault();


    var attendee = {
      attendee: attendeeName.val().trim(),
    }

    $.post("/api/locations", attendee)
      .then(function (res) {
        //console.log(res)
      });

  }

})




