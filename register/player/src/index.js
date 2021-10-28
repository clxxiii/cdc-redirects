const tx = document.getElementsByTagName("input");

function onLoad() {
  let date = new Date();
  let startDate = new Date();
  startDate = setStartDate(startDate);;

  if (date.getTime() > startDate.getTime() ) {
    document.getElementById('wrapper').style.filter = "opacity(100%)";
    document.getElementById('wrapper').style.transform = "translateY(0px)";
  }
  else {
    document.getElementById('too-early').style.filter = "opacity(100%)"
    document.getElementById('wrapper').style.transform = "scale(0)";
    document.getElementsByTagName('html')[0].style.overflow = "hidden"
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

function setStartDate(startDate) {
  startDate.setUTCFullYear(2021);
  startDate.setUTCMonth(11);
  startDate.setUTCDate(10);
  startDate.setUTCHours(0);
  startDate.setUTCMinutes(0);
  startDate.setUTCSeconds(0);

  return startDate;
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
