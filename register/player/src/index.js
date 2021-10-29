const tx = document.getElementsByTagName("input");

function onLoad() {
  let date = new Date();
  let startDate = setStartDate();
  let endDate = setEndDate();

  if (date.getTime() < startDate.getTime() || date.getTime() > endDate.getTime()) {
    document.getElementById('wrong-time-window').style.filter = "opacity(100%)"
    document.getElementById('wrapper').style.transform = "scale(0)";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    if (date.getTime() > endDate.getTime()) {
      document.getElementById('wrong-time-window').innerHTML = "<h2>Oh no! Registrations have closed</h2><br>sorry :("
    }
  }
  else {
    document.getElementById('wrapper').style.filter = "opacity(100%)";
    document.getElementById('wrapper').style.transform = "translateY(0px)";
  }

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

function setStartDate() {
  let startDate = new Date()
  startDate.setUTCFullYear(2021);
  startDate.setUTCMonth(10);
  startDate.setUTCDate(18);
  startDate.setUTCHours(0);
  startDate.setUTCMinutes(0);
  startDate.setUTCSeconds(0);

  return startDate;
}

function setEndDate() {
  let endDate = new Date()
  endDate.setUTCFullYear(2021);
  endDate.setUTCMonth(11);
  endDate.setUTCDate(10);
  endDate.setUTCHours(0);
  endDate.setUTCMinutes(0);
  endDate.setUTCSeconds(0);

  return endDate;
}

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx13MZUseulDBJsjPsN3j8ztnG_8lIUNwLL3uEF8rW-Mu9pX_VYf7f8lG-_mdPhbzcH/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function () {
      window.location.href = 'https://cdc.clxxiii.dev/?alert=player-register'
    }
  });
})
