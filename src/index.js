const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


async function redirect(url) {
  animateUp();
  await sleep(500);
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
  await sleep(1000)
  document.getElementById('elements').style.transform = "translateY(0)"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function sendAlerts() {
  try {
    let alertBox = document.getElementById('alert')
    let alert = urlParams.get('alert');
    if (alert == "player-register") {
      alertBox.innerHTML = "Your player registration was successful, Good Luck!"
    }
    else if (alert == "staff-register") {
      alertBox.innerHTML = "You will be contacted on discord if your application is accepted. Thanks for applying!"
    }
    else if (alert == null) {
      alertBox.style.filter = "opacity(0)"
    }
    else {
      alertBox.innerHTML = alert
    }
  }
  catch (e) {
    console.log("Ran into error while trying to send an alert: " + e.message);
  }
}
