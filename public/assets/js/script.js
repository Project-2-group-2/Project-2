// Variable assignment
const firstName = $("#first-name");
const lastName = $("#last-name");
const partyName = $("#party-name");
const address = $("#party-address");
const date = $("#date");
const startTime = $("#start-time");
const endTime = $("#end-time");
const submitButton = $("#submit-button")


// Takes in values from input fields
function userSubmit(event) {
  event.preventDefault();
  // Returns if fname or lname inputs are blank
  if (!firstName.val().trim() || !firstName.val().trim()) {
    return;
  }

  var data = {
    fname: firstName.val().trim(),
    lname: lastName.val().trim(),
    partyName: partyName.val().trim(),
    address: address.val().trim(),
    date: date.val().trim(),
    startTime: startTime.val().trim(),
    endTime: endTime.val().trim()
  }
 // Creates a object to pass into AJAX
 console.log(data)
  insertData(data);
  
}

// AJAX Post
function insertData(data) {
  $.post("/api/users", data)
    .then(function(res){
      console.log(res)
    });

    $.post("/api/parties", data)
    .then(function(res){
      console.log(res)
    });

    $.post("/api/locations", data)
    .then(function(res){
      console.log(res)
    });

    $.post("/api/events", data)
    .then(function(res){
      console.log(res)
    });
}
// On click for sumbit button that fires the userSubmit function
submitButton.on("click", function postInput(e) {
    e.preventDefault();
    userSubmit(event)
})
