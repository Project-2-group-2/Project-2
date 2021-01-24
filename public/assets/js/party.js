$( document ).ready(function() {



    var id = $(".event-id")
    id.hide()

    getEvent()

    function getEvent() {
        $.get("/api/events/one", function(data) {
            data.forEach(element => {
                console.log(element.id)
                console.log(id.text())
               
                if (element.id == id.text()) {
                    console.log(element.User.fname)
                $(".event-name").text(`Host: ${element.User.fname} ${element.User.lname}` )
            }
         
          })
        })
    }


function attendeeSubmit(e) {
    e.preventDefault();
  
  
  var attendee = {
    attendee: attendeeName.val().trim(),
  }
  
  $.post("/api/locations", attendee)
  .then(function(res){
    console.log(res)
  });
  
  }


})