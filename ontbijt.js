
var userBreakfastStart = document.getElementById("userBreakfastStart").value;
var userBreakfastWith = document.getElementById("inputBreakfastWith").value;
var userBreakfastAnd = document.getElementById("inputBreakfastAnd").value;

var showFoodName = document.getElementById("nameOfFood");
var showRating = document.getElementById("rating");
var showExplanation = document.getElementById("explanation");
var showLink = document.getElementById("linkTainer");

var firstShownBreakfast = document.getElementById("showChosenOne");
var secondShownBreakfast = document.getElementById("showChosenTwo");
var thirdShownBreakfast = document.getElementById("showChosenThree");

var firstBreakfastChoice = localStorage.getItem("userBreakfastStart");
var secondBreakfastChoice = localStorage.getItem("userBreakfastWith");
var thirdBreakfastChoice = localStorage.getItem("userBreakfastAnd");
var getInputName = localStorage.getItem("userName");
var inputName = document.getElementById("userNameInput").value;


function breakfast() {
  localStorage.removeItem("userBreakfastStart");
  localStorage.removeItem("userBreakfastWith");
  localStorage.removeItem("userBreakfastAnd");
  userBreakfastStart = document.getElementById("userBreakfastStart").value;
  userBreakfastWith = document.getElementById("inputBreakfastWith").value;
  userBreakfastAnd = document.getElementById("inputBreakfastAnd").value;
  localStorage.setItem("userBreakfastStart", userBreakfastStart);
  localStorage.setItem("userBreakfastWith", userBreakfastWith);
  localStorage.setItem("userBreakfastAnd", userBreakfastAnd);
  firstBreakfastChoice = localStorage.getItem("userBreakfastStart");
  secondBreakfastChoice = localStorage.getItem("userBreakfastWith");
  thirdBreakfastChoice = localStorage.getItem("userBreakfastAnd");
  createPage();
  showExplainFirst();
  showExplainSecond();
  showExplainThird();
  showExplainFirst();
}


function createPage() {
  firstShownBreakfast.innerHTML = localStorage.getItem("userBreakfastStart");
  secondShownBreakfast.innerHTML = localStorage.getItem("userBreakfastWith");
  thirdShownBreakfast.innerHTML = localStorage.getItem("userBreakfastAnd");
  showExplainFirst();
  showExplainSecond();
  showExplainThird();
  showExplainFirst();
}

function showExplainFirst() {
  showFoodName.innerHTML = localStorage.getItem("userBreakfastStart");
  showRating.innerHTML = food[`${localStorage.getItem("userBreakfastStart")}`].ratingChoice;
  showExplanation.innerHTML = food[`${localStorage.getItem("userBreakfastStart")}`].explainChoice;
  showLink.innerHTML = food[`${localStorage.getItem("userBreakfastStart")}`].linkChoice;
}

function showExplainSecond() {
  showFoodName.innerHTML = localStorage.getItem("userBreakfastWith");
  showRating.innerHTML = food[`${localStorage.getItem("userBreakfastWith")}`].ratingChoice;
  showExplanation.innerHTML = food[`${localStorage.getItem("userBreakfastWith")}`].explainChoice;
  showLink.innerHTML = food[`${localStorage.getItem("userBreakfastStart")}`].linkChoice;
}

function showExplainThird() {
showFoodName.innerHTML = localStorage.getItem("userBreakfastAnd");
  showRating.innerHTML = food[`${localStorage.getItem("userBreakfastAnd")}`].ratingChoice;
  showExplanation.innerHTML = food[`${localStorage.getItem("userBreakfastAnd")}`].explainChoice;
  showLink.innerHTML = food[`${localStorage.getItem("userBreakfastStart")}`].linkChoice;

}

var food = {
  "boterham":{
    explainChoice: "Een goede keuze! Het brood wat wij eten, bestaat vaak voornamelijk uit    granen. De productie van granen is minder belastend voor het milieu dan bijvoorbeeld die van koffie, olie of dierlijke producten. Rijst heeft een grotere impact op het milieu dan andere graansoorten en is daarmee een uitzondering. Voor de teelt van rogge is minder kunstmest en bestrijdingsmiddelen nodig dan andere granen.",
    linkChoice:`<a href="http://www.voedingscentrum.nl/encyclopedie/brood.aspx">http://www.voedingscentrum.nl/encyclopedie/brood.aspx</a>`,
    ratingChoice: "1",
    imgChoice: "img/kaas.png"
  },
    "pindakaas":{
    explainChoice: `Slimme keuze! Noten eten is beter voor het milieu dan vlees. Dus het smeren van pindakaas op je boterham i.p.v. een plakje ham, is velen malen gunstiger voor het klimaat. Het watergebruik van noten kan wel hoog zijn, wat vergelijkbaar is met vlees. Er is echter een groot verschil tussen soorten: kastanjes en pinda’s zijn het gunstigst, gevolgd door Europese soorten: walnoot, hazelnoot en pistachenoot. Als je kijkt naar de hoeveelheid eiwit die ze leveren ten opzichte van de milieubelasting scoren noten een stuk beter dan vlees.`,
    ratingChoice: "2",
    linkChoice:`<a href="http://www.voedingscentrum.nl/encyclopedie/brood.aspx">http://www.voedingscentrum.nl/encyclopedie/brood.aspx</a>`,
    imgChoice: "img/pindakaas.png"
  },"glas water":{
    explainChoice: "Een frisse keuze! Kraanwater is 30 tot 1.300 maal beter voor het milieu dan flessenwater en alle andere dranken uit de fles. Dat komt vooral doordat voor kraanwater helemaal geen verpakking nodig is. De vervuiling in verpakte dranken zit vooral in het soort verpakkingsmateriaal. Het schoonmaken, transporteren, produceren en afdanken van de flessen kost veel energie. Vooral de wegwerp PET-fles, waarin water en andere frisdranken in worden verkocht, is een belasting voor het milieu. Als je deze koopt, kun je nog het beste voor grote flessen met statiegeld kiezen. Dan wordt het plastic na inlevering opnieuw gebruikt.",
    linkChoice:`<a href="http://www.voedingscentrum.nl/encyclopedie/brood.aspx">http://www.voedingscentrum.nl/encyclopedie/brood.aspx</a>`,
    ratingChoice: "1",
    imgChoice: "img/water.png"
  }
};

firstShownBreakfast.addEventListener('click', showExplainFirst,true);
secondShownBreakfast.addEventListener('click', showExplainSecond,true);
thirdShownBreakfast.addEventListener('click', showExplainThird,true);
