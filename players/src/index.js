const tier1 = document.getElementById("tier1")
const tier2 = document.getElementById("tier2")
const tier3 = document.getElementById("tier3")
const tier4 = document.getElementById("tier4")

async function onLoad() {
    let response = await fetch("https://script.google.com/macros/s/AKfycbwyauATAA4xKxlN-dR0LNPYaFdd_i1u60mJ_WuJt3Tr1bUT8E-CemuEgfcPX0hVpO56ag/exec")
    response = await response.json()
    console.log(response);

    // buildPlayerContainers(tier1, response.tier1);
    // buildPlayerContainers(tier2, response.tier2);
    // buildPlayerContainers(tier3, response.tier3);
    // buildPlayerContainers(tier4, response.tier4);
    buildPlayerContainers(parse, response.playerlist);

}

function redirect(e) {
    window.open(e);
}