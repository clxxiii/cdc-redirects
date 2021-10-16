async function redirect(url) {
  animateUp();
  sleep(500);
  window.location.href = url;
}

async function onLoad() {
  document.getElementById('body').style.filter = "opacity(100%)"
  document.getElementById('body').style.transform = "translateY(0px)"
}

async function animateUp() {
  document.getElementById('elements').style.filter = "opacity(0%)"
  document.getElementById('elements').style.transform = "translateY(-1000px)"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
