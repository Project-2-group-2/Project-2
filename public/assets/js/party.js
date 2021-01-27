$( document ).ready(function() {
  // Variable Assigment
  const attendeeName = $("#party-attendee")
  const partyFavor = $("#party-favor")
  const partyButton = $("#party-favor-button")
  // Arrays
  attendeeArray = []
  categoryArray = []
  eventArray = []
    var id = $(".event-id")
    id.hide()
    getEvent()
    function getEvent() {
        $.get("/api/events/one", function(data) {
          console.log(data)
            data.forEach(element => {
                console.log("this one" + element)
                console.log(id.text())
                eventArray.push(parseInt(id.text()))
                console.log("event array " + eventArray[0])
                if (element.id == id.text()) {
                    console.log(element.User.fname)
                $(".event-name").text(`Host: ${element.User.fname} ${element.User.lname}
                Party: ${element.Party.partyName}
                Date: ${element.date}
                Start time: ${element.startTime}
                End time: ${element.endTime}` )
            }
          })
        })
    }
// Attendee Start
function attendeeSubmit(e) {
    e.preventDefault();
  var attendee = {
    attendee: attendeeName.val().trim(),
  }
  $.post("/api/attendee", attendee)
  .then(function(res){
    console.log(res)
  });
  }
   //Handles GET AJAX for attendee
   function getAttendee() {
    $.get("/api/attendee", function (data) {
      console.log(data[0])
      var attendeeId = data[0].id
      attendeeArray.push(attendeeId)
    });
  }
// Attendee End
// Category Start
function categorySubmit(e) {
  e.preventDefault();
var category = {
  categoryItem: 3,
}
$.post("/api/category", category)
.then(function(res){
  console.log(res)
});
}
 //Handles GET AJAX for attendee
 function getCategory() {
  $.get("/api/category", function (data) {
    console.log(data[0])
    var categoryId = data[0].id
    categoryArray.push(categoryId)
  });
}
// Category End
   // Takes in values from input fields and arrays
   function partyFavorSubmit(e) {
    e.preventDefault();
    var data = {
      partyFavor: partyFavor.val().trim(),
      attendeeId: attendeeArray.slice(-1)[0],
      categoryId: categoryArray.slice(-1)[0],
      eventId: eventArray.slice(-1)[0]
    }
    // Creates a object to pass into AJAX
    console.log(data)
    partyData(data);
  }
   // AJAX Post for Guest Table
   function partyData(data) {
    $.post("/api/guests", data)
      .then(function (res) {
        console.log(res)
        // alert("Party Created")
        getOneGuests()
      });
  }
    //Test
    partyButton.on("click", function postInput(e) {
      e.preventDefault();
      attendeeSubmit(e)
      categorySubmit(e)
      // nameSubmit(e)
      setTimeout(function () {
        getAttendee()
        getCategory()
        // getName()
      }, 100);
      setTimeout(function () {
        partyFavorSubmit(e)
      }, 200);
    })
    function getAllGuests() {
      $.get("/api/guest/all", function (data) {
        console.log(data[0])
        data.forEach(element => {if (element.EventId == id.text())  {
          if (element.Category.CategoryItem == 1) {
            var categoryCard = $(".insert-beverages")
          }
          if (element.Category.CategoryItem == 2) {
            var categoryCard = $(".insert-food")
          }
          if (element.Category.CategoryItem == 3) {
            var categoryCard = $(".insert-other")
          }
          console.log("cate card" + categoryCard)
          categoryCard.append(
            `
          <li>${element.Attendee.attendeeName} is bringing: ${element.PartyFavor}</li>
          `
        );
        }
      })
    })
    }
    function getOneGuests() {
      $.get("/api/guests/one", function (data) {
        console.log(data[0])
        data.forEach(element => {if (element.EventId == id.text())  {
          if (element.Category.CategoryItem == 1) {
            var categoryCard = $(".insert-beverages")
          }
          if (element.Category.CategoryItem == 2) {
            var categoryCard = $(".insert-food")
          }
          if (element.Category.CategoryItem == 3) {
            var categoryCard = $(".insert-other")
          }
         categoryCard.append(
          `
        <li>${element.Attendee.attendeeName} is bringing: ${element.PartyFavor}</li>
        `
        );
        }
      })
    })
    }
getAllGuests()
})