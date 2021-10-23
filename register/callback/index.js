const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

async function onLoad() {
  const url = new URL(
    "https://osu.ppy.sh/oauth/token"
);

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

let body = {
    "client_id": 10489,
    "code": urlPaams.get('code'),
    "grant_type": "authorization_code",
    "redirect_uri": "http:\/\/localhost:4000"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json())
.then(response => console.log(response));
}
