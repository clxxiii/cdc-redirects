async function forum() {
  animateUp();
  await sleep(500);
  window.location.href = "https://osu.ppy.sh/community/forums"
}

async function sheet() {
  animateUp();
  await sleep(500);
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScMuOom3WgmTB8jn4LSwfhlTjhghC01gto85nw9ELTyfZDBXw/viewform?usp=sf_link"
}

async function reg() {
  animateUp();
  await sleep(500);
  window.location.href = "https://cdc.clxxiii.dev/register"
}

async function challonge() {
  animateUp();
  await sleep(500);
  window.location.href = "https://challonge.com/cdc2021"
}

async function twitch() {
  animateUp();
  await sleep(500);
  window.location.href = "https://twitch.tv/clxxiiis_tournaments"
}

async function onLoad() {
  document.getElementById('body').style.filter = "opacity(100%)"
  document.getElementById('body').style.transform = "translateY(0px)"
}

async function animateUp() {
  document.getElementById('body').style.filter = "opacity(0%)"
  document.getElementById('body').style.transform = "translateY(-1000px)"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
