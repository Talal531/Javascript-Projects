// Initialize Firebase
var config = {
    apiKey: "AIzaSyAmVbV8bqStDRNn0GVfUoKN5_nqxmIoXzM",
    authDomain: "lab-12082017.firebaseapp.com",
    databaseURL: "https://lab-12082017.firebaseio.com",
    projectId: "lab-12082017",
    storageBucket: "lab-12082017.appspot.com",
    messagingSenderId: "692372459072"
};
firebase.initializeApp(config);

// access and get the firebase database
var database = firebase
    .database()
    .ref("/");

// get content value from model box get button
var createEventBtn = document.getElementById("createEventBtn");
//get eventPicture
var eventImage = document.getElementById("eventImage");
// get event name
var eventName = document.getElementById("eventName");
//get event location
var eventLocation = document.getElementById("eventLocation");
//get eventDate
var eventDate = document.getElementById("eventDate");
//get eventTime
var eventTime = document.getElementById("eventTime");
// get event description
var eventDescription = document.getElementById("eventDescription");


//create function
function createEvent() {
 
    var events = {
        // EventImage: eventImage.value,
        EventName: eventName.value,
        EventLocation: eventLocation.value,
        EventDate: eventDate.value,
        EventTime: eventTime.value,
        EventDescription: eventDescription.value,
        going: false
    };
    database.child("Events").push(events);
    // eventImage.value = '';
    eventName.value = '';
    eventLocation.value = '';
    eventDate.value = '';
    eventTime.value = '';
    eventDescription.value = '';

    
}
createEventBtn.addEventListener("click", validatation, false);

database.child("Events").on("child_added", function(snapshot){
    var Obj = snapshot.val();
    Obj.id = snapshot.key;
    console.log(snapshot.key)
    render(Obj);
})

// data rendering
var _events = document.getElementById("_events");
function render(events){
   
    var eventDiv = document.createElement("DIV");
    eventDiv.setAttribute("id", "eventDiv");
    eventDiv.setAttribute("class", "card border-light mb-3");

 
    //======== card-header start========
    var cardHeader = document.createElement("DIV");
    cardHeader.setAttribute("class", "card-header");

    var cardImage = document.createElement("IMG");
    cardImage.setAttribute("class", "card-img-top");
    cardImage.setAttribute("src", "http://via.placeholder.com/400x150");
    
    cardHeader.appendChild(cardImage);
    //=========== card-header end===========


    // ==========card-body start========
    var cardBody = document.createElement("DIV");
    cardBody.setAttribute("class", "card-body row");

    var dateTime = document.createElement("DIV");
    dateTime.setAttribute("class", "col-sm-3 text-center");
    dateTime.setAttribute("id", "dateTime");

    var strong = document.createElement("STRONG");

    var dateSpan = document.createElement("SPAN");
    dateSpan.setAttribute("id", "date");
    var dateSpanTxt = document.createTextNode(events.EventDate);
    dateSpan.appendChild(dateSpanTxt);

    var br = document.createElement("BR");

    var timeSpan = document.createElement("SPAN");
    timeSpan.setAttribute("id", "time");
    var timeSpanTxt = document.createTextNode(events.EventTime);
    timeSpan.appendChild(timeSpanTxt);

    strong.appendChild(dateSpan);
    strong.appendChild(br);
    strong.appendChild(timeSpan);

    dateTime.appendChild(strong);

    // name and description
    var eventDetail = document.createElement("DIV");
    eventDetail.setAttribute("id", "eventDetail");
    eventDetail.setAttribute("class", "col-sm-9");

    var eventName = document.createElement("H4");
    var eventNameTxt = document.createTextNode(events.EventName);
    eventName.appendChild(eventNameTxt);

    var eventDescription = document.createElement("P");
    var eventDescriptionTxt = document.createTextNode(events.EventDescription);
    eventDescription.appendChild(eventDescriptionTxt);

    var eventLocation = document.createElement("SMALL");
    eventLocation.setAttribute("class", "text-muted")
    var eventLocationTxt = document.createTextNode("Location: " + events.EventLocation);
    eventLocation.appendChild(eventLocationTxt);


    eventDetail.appendChild(eventName);
    eventDetail.appendChild(eventDescription);
    eventDetail.appendChild(eventLocation);

    cardBody.appendChild(dateTime);
    cardBody.appendChild(eventDetail);
    //======== card-body end=============


    // ========= card-footer-start=====
    var cardFooter = document.createElement("DIV");
    cardFooter.setAttribute("class", "card-footer");

    var small = document.createElement("SMALL");
    small.setAttribute("class", "text-left text-muted");
    var smallTxt = document.createTextNode("1 day ago");
    small.appendChild(smallTxt);

    var br1 = document.createElement("BR");

    var btnGoing = document.createElement("BUTTON");
    btnGoing.setAttribute("id", "goingBtn");
    btnGoing.setAttribute("class", "btn btn-info btn-sm");
    btnGoing.setAttribute("type", "button");
    var btnGoingTxt = document.createTextNode("Going");
    btnGoing.appendChild(btnGoingTxt);
    btnGoing.onclick = function (){
        // console.log(events.id + "clicked");
        going(events.id);
        
    }
    
    var btnInterested = document.createElement("BUTTON");
    btnInterested.setAttribute("id", "interestedBtn");
    btnInterested.setAttribute("class", "btn btn-info btn-sm");
    btnInterested.setAttribute("type", "button");
    var btnInterestedTxt = document.createTextNode("Interested");
    btnInterested.appendChild(btnInterestedTxt);

    cardFooter.appendChild(small);
    cardFooter.appendChild(br1);
    cardFooter.appendChild(btnGoing);
    cardFooter.appendChild(btnInterested);

    // card-footer-end===========

    eventDiv.appendChild(cardHeader);
    eventDiv.appendChild(cardBody);
    eventDiv.appendChild(cardFooter);


    _events.appendChild(eventDiv);
    // console.log(_events);
}

//validate form
var alertMsg = document.getElementById("alertMsg");
function validatation(){
    if(eventName.value == '' || eventLocation.value == '' || eventTime.value == '' || eventDate.value == '' || eventDescription.value == ''){
        alertMsg.style.display = "block";
        alertMsg.className = "alert alert-danger";
        alertMsg.textContent = "Please Fill all the Fields";
        
    }else{
        createEvent();
        alertMsg.style.display = "block";
        // alertMsg.className = "alert alert-success";
        // alertMsg.textContent = "Event Created";
        createEventBtn.setAttribute("data-dismiss", "modal");
        alert("created");        
        
    }
}





// var goingBtn = document.getElementById("goingBtn");
// goingBtn.addEventListener("click", going, false);
// var interestedBtn = document.getElementById("interestedBtn");

function going(eventId){
    console.log("Hello " + eventId);
//     if(goingBtn.textContent === "Going"){
//     goingBtn.textContent = "Not Going";
//     interestedBtn.style.display = "none";
//     }else{
//         goingBtn.textContent = "Going";
//     interestedBtn.style.display = "inline";
//     }
}


// function interested(){
//     if (interestedBtn.textContent === "Interested") {
//         interestedBtn.textContent = "Not Interested";
//         goingBtn.style.display = "none";
//     } else {
//         interestedBtn.textContent = "Interested";
//         goingBtn.style.display = "inline";
//     }
// }

// goingBtn.addEventListener("click", going, false);
// interestedBtn.addEventListener("click", interested, false);