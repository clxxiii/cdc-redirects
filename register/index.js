async function player() {
  animateUp();
  await sleep(500);
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScMuOom3WgmTB8jn4LSwfhlTjhghC01gto85nw9ELTyfZDBXw/viewform?usp=sf_link"
}

async function staff() {
  animateUp();
  await sleep(500);
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeC2ZO_nPfC2AX1zC3G5EXwDC2GksOi56DUNw30jCIPSVvZnQ/viewform?usp=sf_link"
}

function onLoad() {
  document.getElementById('body').style.filter = "opacity(100%)"
  document.getElementById('body').style.transform = "translateY(0px)"
}

function animateUp() {
  document.getElementById('body').style.filter = "opacity(0%)"
  document.getElementById('body').style.transform = "translateY(-1000px)"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
