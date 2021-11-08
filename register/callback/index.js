const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

async function onLoad() {
  const url = new URL(
    "https://830vj7s4y4.execute-api.us-east-2.amazonaws.com/oauth/token"
);

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

let body = {
    // code: urlParams.get('code'),
    client_id: 10489,
    client_secret: "2QGibWe3PUJ99S6N7Zxb0FwrZ0OWvKQcSP16iuiE",
    grant_type: "client_credentials",
    scope: "public"
    // redirect_uri: 'https://cdc.clxxiii.dev/register'
}

// console.log(urlParams.get('code'))
let response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
})
response = await response.json()

let access_token = response.access_token;
console.log(response);
}
