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
    "code": urlParams.get('code'),
}

console.log(urlParams.get('code'))
fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json())
.then(response => console.log(response));
}
