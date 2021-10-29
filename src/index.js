const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


async function redirect(url) {
  animateUp();
  sleep(500);
  window.location.href = url;
}

async function onLoad() {
  document.getElementById('wrapper').style.filter = "opacity(100%)";
  document.getElementById('wrapper').style.transform = "translateY(0px)";
  sendAlerts();
}

async function animateUp() {
  document.getElementById('elements').style.filter = "opacity(0%)"
  document.getElementById('elements').style.transform = "translateY(-1000px)"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sendAlerts() {
  let alertBox = document.getElementById('alert')
  let alert = urlParams.get('alert');
  if (alert == "player-register") {
    alertBox.innerHTML = "Your player registration was successful, Good Luck!"
  }
  else if (alert == "staff-register") {
    alertBox.innerHTML = "Your staff registration was successful, Thanks for your help!"
  }
  else if (alert == null) {
    alertBox.style.filter = "opacity(0)"
  }
  else {
    alertBox.innerHTML = alert
  }
}
