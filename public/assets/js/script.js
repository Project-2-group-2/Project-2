// Variable assignment
const firstName = $("#first-name");
const lastName = $("#last-name");
const partyName = $("#party-name");
const address = $("#party-address");
const date = $("#date");
const startTime = $("#start-time");
const endTime = $("#end-time");
const submitButton = $("#submit-button")
const nameButton = $("#name-button")
const partyButton = $("#party-button")
const locationButton = $("#location-button")

//Arrays
var nameArray = []
var partyArray = []
var locationArray = []


// Takes in values from input fields and arrays
function userSubmit(event) {
  event.preventDefault();
  

  var data = {
    date: date.val().trim(),
    startTime: startTime.val().trim(),
    endTime: endTime.val().trim(),
    UserId: nameArray[0],
    PartyId: partyArray[0],
    LocationId: locationArray[0]
  }
 // Creates a object to pass into AJAX
 console.log(data)
  insertData(data);
  
}

// AJAX Post for Events Table
function insertData(data) {


    $.post("/api/events", data)
    .then(function(res){
      console.log(res)
      alert("Party Created")
    });
}


// Handles POST AJAX for users
function nameSubmit(event) {
    event.preventDefault();
if (!firstName.val().trim() || !firstName.val().trim()) {
    return;
  }

  var name = {
    fname: firstName.val().trim(),
    lname: lastName.val().trim(),

  }

  $.post("/api/users", name)
  .then(function(res){
    console.log(res)
  });


}


// Handles POST AJAX for parties
function partySubmit(event) {
  event.preventDefault();


var party = {
  partyName: partyName.val().trim(),
}

$.post("/api/parties", party)
.then(function(res){
  console.log(res)
});


}


// Handles POST AJAX for location
function locationSubmit(event) {
  event.preventDefault();


var location = {
  address: address.val().trim(),
}

$.post("/api/locations", location)
.then(function(res){
  console.log(res)
});


}


// On click for sumbit button that fires the userSubmit function
submitButton.on("click", function postInput(e) {
    e.preventDefault();
    userSubmit(event)
})

// On click for sumbit button that fires the nameSubmit function and getName function
nameButton.on("click", function postInput(e) {
    e.preventDefault();
    nameSubmit(event)
    setTimeout(function(){
    getName()
  }, 100);
})


// On click for sumbit button that fires the partySubmit function and getParty function
partyButton.on("click", function postInput(e) {
  e.preventDefault();
  partySubmit(event)
  setTimeout(function(){
  getParty()
}, 100);
})


// On click for sumbit button that fires the locationSubmit function and getLocation function
locationButton.on("click", function postInput(e) {
  e.preventDefault();
  locationSubmit(event)
  setTimeout(function(){
  getLocation()
}, 100);
})



//Handles GET AJAX for user
function getName() {
  $.get("/api/users", function(data) {
    var first = data[0].fname
    var last = data[0].lname
    var name = data[0].id
    nameArray.push(name)
    console.log(nameArray[0])
   

    //Tests GET AJAX
    $(".test1").text(first + " " + last)
  
  });
}


//Handles GET AJAX for party
function getParty() {
  $.get("/api/parties", function(data) {

    console.log(data[0])
    var party = data[0].partyName
    var partyId = data[0].id
    partyArray.push(partyId)
    
    //Tests GET AJAX
    $(".test2").text(party)
  
  });
}


//Handles GET AJAX for location
function getLocation() {
  $.get("/api/locations", function(data) {

    console.log(data[0])
    var location = data[0].address
    var locationId = data[0].id
    locationArray.push(locationId)
    
    //Tests GET AJAX
    $(".test3").text(location)
  
  });
}


