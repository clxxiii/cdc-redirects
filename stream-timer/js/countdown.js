// Get date variable from query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let dateString = urlParams.get("time")


// Set the date we're counting down to
var countDownDate = new Date(dateString).getTime();

// Replace showtime screen with error message if no date provided
if(dateString == null) {
  var mins10 = new Date(new Date().getTime() + 10*60000 + 2*1000);
  window.location.search = "?time=" + mins10.toISOString();
}

// Update the count down every 1 second
var x = setInterval(function() {
  // Define html elements
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let colon = document.getElementById("colon");
  let textContainers = document.getElementsByClassName("text-container");
  let img = document.getElementsByClassName("img")[0];
  
  // Get today's date and time
  var now = new Date().getTime();
  
  

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutesText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsText = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the countdown elements
  if (distance >= 0) {
    minutes.innerHTML = minutesText
    seconds.innerHTML = secondsText
  }

  // slowly unblur tournament icon as timer runs down
  img.style.filter = "opacity(0.3) blur(" + distance / 1000 + "px)"

  // Remove minutes section if 0 minutes
  if (minutesText == 0) {
    minutes.style.width = 0;
    colon.style.width = 0;
    minutes.style.opacity = 0;
    colon.style.opacity = 0;
  } else {
    minutes.style.width = "";
    colon.style.width = "";
    minutes.style.opacity = 1;
    colon.style.opacity = 1;
  }


  // If the count down is finished, do some things
  if (distance < 0) {
    minutes.innerHTML = 0
    seconds.innerHTML = 0
    
    img.style.filter = "opacity(0.85)"
    img.style.animation = "3s spin ease-in-out"
    for (i = 0; i < textContainers.length; i++) {
      let c = textContainers[i];

      c.style.transform = "translate(-100%, 0)";
      c.style.animation = "1500ms slideleft ease-in-out"
    }

    clearInterval(x);

  }
}, 1000);
