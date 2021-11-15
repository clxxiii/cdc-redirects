// Get date variable from query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let dateString = urlParams.get("time")


// Set the date we're counting down to
var countDownDate = new Date(dateString).getTime();

// Replace showtime screen with error message if no date provided
if(dateString == null) {
  var mins10 = new Date(new Date().getTime() + 10*60000 + 2*1000);
  window.location.search = "?time=" + mins10.toLocaleString();
}

// Update the count down every 1 second
var x = setInterval(function() {
  // Define html elements
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let textContainers = document.getElementsByClassName("text-container");
  let bg = document.getElementsByClassName("bg");
  let showtime = document.getElementsByClassName("showtime")[0].getElementsByClassName("title")[0];
  
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
  // If the count down is finished, do some things
  if (distance < 0) {
    minutes.innerHTML = 0
    seconds.innerHTML = 0
    
    for (i = 0; i < textContainers.length; i++) {
      let c = textContainers[i];

      c.style.transform = "translate(-100%, 0)";
      c.style.animation = "1500ms slideleft ease-in-out"
    }

    clearInterval(x);

  }
}, 1000);
