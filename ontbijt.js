// $(document).ready(function() {
//   $('#fullpage').fullpage({
//     // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
//     anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//     autoScrolling: true,
//     scrollOverflow: false,
//     verticalCentered: false,
//     scrollingSpeed: 1000
//   });
// });

// $(document).on('click', '#secNext', function(){
//   $.fn.fullpage.moveSectionDown();
// });

// $(document).on('click', '#turnOff', function(){
//   $.fn.fullpage.setAllowScrolling(false);
// });


var food = {
  "kaas":{
    explainChoice: 'dit is een slechte keuze pik',
    ratingChoice: '-10/5',
    imgChoice: 'img/kaas.png'
  },
    "brood":{
    explainChoice: 'dit is een goede keuze pik',
    ratingChoice: '10/5',
    imgChoice: 'img/brood.png'
  },"glas melk":{
    explainChoice: 'dit is een goede keuze pik',
    ratingChoice: '10/5',
    imgChoice: 'img/brood.png'
  }
};

var userBreakfastStart = document.getElementById("userBreakfastStart").value;
var userBreakfastWith = document.getElementById("inputBreakfastWith").value;
var userBreakfastAnd = document.getElementById("inputBreakfastAnd").value;

function breakFast() {
  localStorage.setItem("userBreakfastStart", userBreakfastStart);
  localStorage.setItem("userBreakfastWith", userBreakfastWith);
  localStorage.setItem("userBreakfastAnd", userBreakfastAnd);
  createPage();
}


function createPage() {
  var firstBreakfastChoice = localStorage.getItem("userBreakfastStart");
  var secondBreakfastChoice = localStorage.getItem("userBreakfastWith");
  var thirdBreakfastChoice = localStorage.getItem("userBreakfastAnd");
  var showBreakfastResult = document.getElementById('showBreakfastResult');
  

  showBreakfastResult.innerHTML = 
  `
  </div>
    <h2>${firstBreakfastChoice}</h2>
    <p>${food[`${firstBreakfastChoice}`].explainChoice}</p>
    <p>${food[`${firstBreakfastChoice}`].ratingChoice}</p>
  </div>
  </div>
    <p>${secondBreakfastChoice}</p>
    <p>${food[`${secondBreakfastChoice}`].explainChoice}</p>
    <p>${food[`${secondBreakfastChoice}`].ratingChoice}</p>
  </div>
    </div>
    <p>${thirdBreakfastChoice}</p>
    <p>${food[`${thirdBreakfastChoice}`].explainChoice}</p>
    <p>${food[`${thirdBreakfastChoice}`].ratingChoice}</p>
  </div>
  `;
}

// function goTo() {
//   window.location.href = "index.html";
// }
