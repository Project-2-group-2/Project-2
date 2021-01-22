// Variable assignment
const firstName = $("#first-name");
const lastName = $("#last-name");
const submitButton = $("#submit-button")


// Takes in values from input fields
function userSubmit(event) {
  event.preventDefault();
  // Returns if fname or lname inputs are blank
  if (!firstName.val().trim().trim() || !firstName.val().trim().trim()) {
    return;
  }
 // Creates a object to pass into AJAX
  insertUser({
    fname: firstName.val().trim(),
    lname: lastName.val().trim()
     
  });
  
}

// AJAX Post
function insertUser(name) {
  $.post("/api/parties", name)
    .then();
}
// On click for sumbit button that fires the userSubmit function
submitButton.on("click", function postInput(e) {
    e.preventDefault();
    userSubmit(event)
})
