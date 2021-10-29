const tx = document.getElementsByTagName("input");
function onLoad() {
    document.getElementById('wrapper').style.filter = "opacity(100%)";
    document.getElementById('wrapper').style.transform = "translateY(0px)";

  for (let i = 0; i < tx.length; i++) {
    if (tx[i].type == "text") {
      tx[i].addEventListener("input", OnInput, false);
    }
  }
}

// Test if any or all text areas are blank
function OnInput() {
  if( !areAllFieldsComplete() ) {
    document.getElementsByTagName("button")[0].classList.add("closed")
  }

  if (this.value == "") {
    this.classList.add("empty");
  }
  else {
    this.classList.remove("empty");
    console.log(areAllFieldsComplete())
    if( areAllFieldsComplete() ) {
      document.getElementsByTagName("button")[0].classList.remove("closed")
    }
  }
}

// Return true if the user has inputted a value for each field
function areAllFieldsComplete() {
  for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == "") { return false;}
  }
  return true;
}
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function sendStaffRequest() {
  let form_id = document.getElementById("form_id").value;
  let form_discord = document.getElementById("form_discord").value;
  let form_roles = document.getElementById("form_roles").value;
  let form_experience = document.getElementById("form_experience").value;
  let id_image = "https://s.ppy.sh/a/" + form_id

  console.log(form_id)
  let body = {
  "username": "Staff Regs",
  "avatar_url": "https://cdc.clxxiii.dev/src/img/icon.png",
  "embeds": [
    {
      "title": "Someone just applied for staff!",
      "description": "Using the form on the website, someone just sent in a form!",
      "color": 11274124,
      "thumbnail": {
        "url": id_image
      },
      "author": {
        "name": form_discord,
        "icon_url": id_image
      },
      "fields": [
        {
          "name": "Profile Link",
          "value": "https://osu.ppy.sh/u/" + form_id
        },
        {
          "name": "Roles Applied To:",
          "value": form_roles
        },
        {
          "name": "Tournament Experience:",
          "value": form_experience
        }
      ]
    }
  ]
}

await sendPayload(body, "https://6t94885gfa.execute-api.us-east-2.amazonaws.com/cdc-staff-webhook");
window.location.href = "https://cdc.clxxiii.dev/?alert=staff-register"
}

async function sendPayload(p, url) {
  let params = {
    headers: {
      'Content-Type': "application/json"
    },
    method: 'POST',
    body: JSON.stringify(p)
  };

  try {
    response = await fetch(url, params);
    return response.status;
  }
  catch (error) {
    return 0;
  }
}
