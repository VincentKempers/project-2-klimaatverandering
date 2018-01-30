$(document).ready(function() {
  $('#fullpage').fullpage({
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    autoScrolling: true,
    scrollOverflow: false,
    scrollingSpeed: 1000
  });
});

$(document).on('click', '#secNext', function(){
  $.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#turnOff', function(){
  $.fn.fullpage.setAllowScrolling(false);
});


let button = document.getElementById('submit');
let showName = document.getElementById('showName').innerHTML = localStorage.getItem("userName");

function othername() {
  localStorage.removeItem("userName");
  localStorage.removeItem("userAge");
  localStorage.removeItem("userPlace");
  localStorage.removeItem("userSchool");
  localStorage.removeItem("userClass");
  var inputName = document.getElementById("userNameInput").value;
  var inputAge = document.getElementById("userAgeInput").value;
  var inputPlace = document.getElementById("userPlaceInput").value;
  var inputSchool = document.getElementById("userSchoolInput").value;
  var inputClass = document.getElementById("userClassInput").value;
  localStorage.setItem("userName", inputName);
  localStorage.setItem("userAge", inputAge);
  localStorage.setItem("userPlace", inputPlace);
  localStorage.setItem("userSchool", inputSchool);
  localStorage.setItem("userClass", inputClass);
}

function goTo() {
  window.location.href = "index.html";
}

button.addEventListener('click', goTo, true);

document.getElementById('showName').innerHTML = showName;