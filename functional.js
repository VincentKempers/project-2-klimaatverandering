// Breakfast
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

// Lunch
var userLunchStart = document.getElementById("userLunchStart").value;
var userLunchWith = document.getElementById("inputLunchWith").value;
var userLunchAnd = document.getElementById("inputLunchAnd").value;

var showFoodNameLunch = document.getElementById("nameOfFood-Middag");
var showRatingLunch = document.getElementById("rating-Middag");
var showExplanationLunch = document.getElementById("explanation-Middag");
var showLinkLunch = document.getElementById("linkTainer-Middag");

var firstShownLunch = document.getElementById("showChosenOne-Middag");
var secondShownLunch = document.getElementById("showChosenTwo-Middag");
var thirdShownLunch = document.getElementById("showChosenThree-Middag");

var firstLunchChoice = localStorage.getItem("userLunchStart");
var secondLunchChoice = localStorage.getItem("userLunchWith");
var thirdLunchChoice = localStorage.getItem("userLunchAnd");


// Avond

var userDinnerStart = document.getElementById("userDinnerStart").value;
var userDinnerWith = document.getElementById("inputDinnerWith").value;
var userDinnerAnd = document.getElementById("inputDinnerAnd").value;

var showFoodNameDinner = document.getElementById("nameOfFood-Avond");
var showRatingDinner = document.getElementById("rating-Avond");
var showExplanationDinner = document.getElementById("explanation-Avond");
var showLinkDinner = document.getElementById("linkTainer-Avond");

var firstShownDinner = document.getElementById("showChosenOne-Avond");
var secondShownDinner = document.getElementById("showChosenTwo-Avond");
var thirdShownDinner = document.getElementById("showChosenThree-Avond");

var firstDinnerChoice = localStorage.getItem("userDinnerStart");
var secondDinnerChoice = localStorage.getItem("userDinnerWith");
var thirdDinnerChoice = localStorage.getItem("userDinnerAnd");

// End game



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
  createPageBreakfast();
  showExplainSecond();
  showExplainThird();
  showExplainFirst();
}

function Lunch() {
  localStorage.removeItem("userLunchStart");
  localStorage.removeItem("userLunchWith");
  localStorage.removeItem("userLunchAnd");
  userLunchStart = document.getElementById("userLunchStart").value;
  userLunchWith = document.getElementById("inputLunchWith").value;
  userLunchAnd = document.getElementById("inputLunchAnd").value;
  localStorage.setItem("userLunchStart", userLunchStart);
  localStorage.setItem("userLunchWith", userLunchWith);
  localStorage.setItem("userLunchAnd", userLunchAnd);
  firstLunchChoice = localStorage.getItem("userLunchStart");
  secondLunchChoice = localStorage.getItem("userLunchWith");
  thirdLunchChoice = localStorage.getItem("userLunchAnd");
  createPageLunch();
  showExplainSecondLunch();
  showExplainThirdLunch();
  showExplainFirstLunch();
}

function Dinner() {
  localStorage.removeItem("userDinnerStart");
  localStorage.removeItem("userDinnerWith");
  localStorage.removeItem("userDinnerAnd");
  userDinnerStart = document.getElementById("userDinnerStart").value;
  userDinnerWith = document.getElementById("inputDinnerWith").value;
  userDinnerAnd = document.getElementById("inputDinnerAnd").value;
  localStorage.setItem("userDinnerStart", userDinnerStart);
  localStorage.setItem("userDinnerWith", userDinnerWith);
  localStorage.setItem("userDinnerAnd", userDinnerAnd);
  firstDinnerChoice = localStorage.getItem("userDinnerStart");
  secondDinnerChoice = localStorage.getItem("userDinnerWith");
  thirdDinnerChoice = localStorage.getItem("userDinnerAnd");
  createPageDinner();
  showExplainSecondDinner();
  showExplainThirdDinner();
  showExplainFirstDinner();
}


function createPageBreakfast() {
  firstShownBreakfast.innerHTML = localStorage.getItem("userBreakfastStart");
  secondShownBreakfast.innerHTML = localStorage.getItem("userBreakfastWith");
  thirdShownBreakfast.innerHTML = localStorage.getItem("userBreakfastAnd");
  showExplainFirst();
  showExplainSecond();
  showExplainThird();
  showExplainFirst();
  
}

function createPageLunch() {
  firstShownLunch.innerHTML = localStorage.getItem("userLunchStart");
  secondShownLunch.innerHTML = localStorage.getItem("userLunchWith");
  thirdShownLunch.innerHTML = localStorage.getItem("userLunchAnd");
  showExplainFirstLunch();
  showExplainSecondLunch();
  showExplainThirdLunch();
  showExplainFirstLunch();
}

function createPageDinner() {
  firstShownDinner.innerHTML = localStorage.getItem("userDinnerStart");
  secondShownDinner.innerHTML = localStorage.getItem("userDinnerWith");
  thirdShownDinner.innerHTML = localStorage.getItem("userDinnerAnd");
  showExplainFirstDinner();
  showExplainSecondDinner();
  showExplainThirdDinner();
  showExplainFirstDinner();
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

function showExplainFirstLunch() {
  showFoodNameLunch.innerHTML = localStorage.getItem("userLunchStart");
  showRatingLunch.innerHTML = food[`${localStorage.getItem("userLunchStart")}`].ratingChoice;
  showExplanationLunch.innerHTML = food[`${localStorage.getItem("userLunchStart")}`].explainChoice;
  showLinkLunch.innerHTML = food[`${localStorage.getItem("userLunchStart")}`].linkChoice;
}

function showExplainSecondLunch() {
  showFoodNameLunch.innerHTML = localStorage.getItem("userLunchWith");
  showRatingLunch.innerHTML = food[`${localStorage.getItem("userLunchWith")}`].ratingChoice;
  showExplanationLunch.innerHTML = food[`${localStorage.getItem("userLunchWith")}`].explainChoice;
  showLinkLunch.innerHTML = food[`${localStorage.getItem("userLunchStart")}`].linkChoice;
}

function showExplainThirdLunch() {
  showFoodNameLunch.innerHTML = localStorage.getItem("userLunchAnd");
  showRatingLunch.innerHTML = food[`${localStorage.getItem("userLunchAnd")}`].ratingChoice;
  showExplanationLunch.innerHTML = food[`${localStorage.getItem("userLunchAnd")}`].explainChoice;
  showLinkLunch.innerHTML = food[`${localStorage.getItem("userLunchStart")}`].linkChoice;
}

function showExplainFirstDinner() {
  showFoodNameDinner.innerHTML = localStorage.getItem("userDinnerStart");
  showRatingDinner.innerHTML = food[`${localStorage.getItem("userDinnerStart")}`].ratingChoice;
  showExplanationDinner.innerHTML = food[`${localStorage.getItem("userDinnerStart")}`].explainChoice;
  showLinkDinner.innerHTML = food[`${localStorage.getItem("userDinnerStart")}`].linkChoice;
}

function showExplainSecondDinner() {
  showFoodNameDinner.innerHTML = localStorage.getItem("userDinnerWith");
  showRatingDinner.innerHTML = food[`${localStorage.getItem("userDinnerWith")}`].ratingChoice;
  showExplanationDinner.innerHTML = food[`${localStorage.getItem("userDinnerWith")}`].explainChoice;
  showLinkDinner.innerHTML = food[`${localStorage.getItem("userDinnerStart")}`].linkChoice;
}

function showExplainThirdDinner() {
  showFoodNameDinner.innerHTML = localStorage.getItem("userDinnerAnd");
  showRatingDinner.innerHTML = food[`${localStorage.getItem("userDinnerAnd")}`].ratingChoice;
  showExplanationDinner.innerHTML = food[`${localStorage.getItem("userDinnerAnd")}`].explainChoice;
  showLinkDinner.innerHTML = food[`${localStorage.getItem("userDinnerStart")}`].linkChoice;
}

var food = {
  "Boterham":{
    explainChoice: "Een goede keuze! Het brood wat wij eten, bestaat vaak voornamelijk uit    granen. De productie van granen is minder belastend voor het milieu dan bijvoorbeeld die van koffie, olie of dierlijke producten. Rijst heeft een grotere impact op het milieu dan andere graansoorten en is daarmee een uitzondering. Voor de teelt van rogge is minder kunstmest en bestrijdingsmiddelen nodig dan andere granen.",
    linkChoice:`<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/brood.aspx">http://www.voedingscentrum.nl/encyclopedie/brood.aspx</a>`,
    ratingChoice: `<div id="circle"></div>`,
    imgChoice: "img/kaas.png"
  },
  "Pindakaas":{
    explainChoice: `Slimme keuze! Noten eten is beter voor het milieu dan vlees. Dus het smeren van pindakaas op je boterham i.p.v. een plakje ham, is velen malen gunstiger voor het klimaat. Het watergebruik van noten kan wel hoog zijn, wat vergelijkbaar is met vlees. Er is echter een groot verschil tussen soorten: kastanjes en pinda’s zijn het gunstigst, gevolgd door Europese soorten: walnoot, hazelnoot en pistachenoot. Als je kijkt naar de hoeveelheid eiwit die ze leveren ten opzichte van de milieubelasting scoren noten een stuk beter dan vlees.`,
    ratingChoice: `<div id="circle"></div><div id="circle"></div>`,
    linkChoice:`<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/peulvruchten.aspx">http://www.voedingscentrum.nl/encyclopedie/peulvruchten.aspx</a>`,
    imgChoice: "img/pindakaas.png"
  },
  "Glas water":{
    explainChoice: "Een frisse keuze! Kraanwater is 30 tot 1.300 maal beter voor het milieu dan flessenwater en alle andere dranken uit de fles. Dat komt vooral doordat voor kraanwater helemaal geen verpakking nodig is. De vervuiling in verpakte dranken zit vooral in het soort verpakkingsmateriaal. Het schoonmaken, transporteren, produceren en afdanken van de flessen kost veel energie. Vooral de wegwerp PET-fles, waarin water en andere frisdranken in worden verkocht, is een belasting voor het milieu. Als je deze koopt, kun je nog het beste voor grote flessen met statiegeld kiezen. Dan wordt het plastic na inlevering opnieuw gebruikt.",
    linkChoice:`<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/water.aspx">http://www.voedingscentrum.nl/encyclopedie/water.aspx</a>`,
    ratingChoice: `<div id="circle"></div>`,
    imgChoice: "img/water.png"
  },
  "Tosti met kaas":{
    explainChoice: `Kaas is erg slecht voor het klimaat, al wordt dat vaak erg onderschat. Je kunt er niet meer om heen dat Nederland een kaasland is. Zo zijn wij een van de grootste zuivelexporteurs ter wereld. Maar of wij er trots op moeten zijn, is ook maar de vraag. Goed voor het klimaat is deze industrie namelijk niet. 1 kilo kaas zorgt namelijk voor een co-2 uitstoot van 8,9 kilo. Dat is meer dan wat een kip of varken uitstoot. Per kilo stoot een kip 6,2 kg co-2 uit, wat gelijkt staat aan 31 km in een auto rijden. Dat zijn aardig wat kilometers als je weet dat we jaarlijks miljoenen kilo kaas produceren.`,
    linkChoice:`<a target="_blank" href="Zuivelonline.nl ">Zuivelonline.nl</a>`,
    ratingChoice: `<div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div>`,
    imgChoice: 'img/kaas.png'
  },
  "Appel":{
    explainChoice: `Een gezonde keuze! Een appel is niet alleen lekker, maar ook gezond voor jou en het klimaat. Europese appels hebben het hele jaar door de laagste klimaatbelasting. Appels uit Chili, Brazilië en Zuid Afrika scoren ook redelijk. Appels uit Nieuw Zeeland hebben een hoge klimaatbelasting. Dus blijf ze vooral eten! `,
    linkChoice:` <a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/fruit.aspx">http://www.voedingscentrum.nl/encyclopedie/fruit.aspx</a>`,
    ratingChoice: `<div id="circle"></div>`,
    imgChoice: 'img/appel.png'
  },
  "Glas melk":{
    explainChoice: `Is melk goed voor elk? Hoewel de schade van een glaasje melk niet eens zo slecht is, is melk wel de basis van heel veel producten. Denk hierbij aan boter, kaas, yoghurt en kwart. Voor 1 kilo boter is bijvoorbeeld 25 liter melk nodig! Daarnaast zijn de scheten van een koe en het mest niet heel gezond voor het milieu. Daarnaast is Nederland een van de grootste zuivelexporteurs ter wereld, dus alles bij elkaar opgeteld is het toch erg schadelijk voor het klimaat.`,
    linkChoice:`<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/melk-en-melkproducten.aspx">http://www.voedingscentrum.nl/encyclopedie/melk-en-melkproducten.aspx</a`,
    ratingChoice: `<div id="circle"></div><div id="circle"></div>`,
    imgChoice: 'img/melk.png'
  },
  "Hamburgers":{
    explainChoice: `Dit is een slechte keuze! Kun je niet zonder vlees? Dan kun je beter (wit vlees) eten dan rund (rood vlees), want dat is beter voor het milieu. Een van de redenen dat vlees veel milieubelasting oplevert, is dat er voor 1 kilogram vlees gemiddeld 5 kilo plantaardig veevoer nodig is. Om dit veevoer te maken zijn veel grondstoffen, land, water en energie nodig. Daarnaast heeft een koe vier magen en laat daarom veel scheten waar methaan in zit. Koeien poepen ook veel. Uit die mestproductie komt een lachgas vrij. De stof methaan is 23 keer schadelijker voor het milieu dan de CO2 die in de uitlaatgassen van de auto’s zit. En lachgas wel 296 keer! Wist je dat de productie van 1 kilo rundvlees is even schadelijk voor het milieu is als een autorit van 45 kilometer?`,
    linkChoice:`<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/rundvlees.aspx ">http://www.voedingscentrum.nl/encyclopedie/rundvlees.aspx</a>`,
    ratingChoice: `<div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div>`,
    imgChoice: 'img/hamburger.png'
  },
  "Spek":{
    explainChoice: 'Dit is een slechte keuze! Wel begrijpen wij dat spek een gerecht net wat lekkerder maakt. Varkensvlees beïnvloedt het klimaat meer dan kip ( wel 40% meer!), maar minder dan rundvlees. Dat komt vooral doordat er meer voer nodig is om ze te laten groeien. Voor 1 kilo varkensvlees is 3 tot 5 kilo voer nodig. De productie van varkensvoer kost energie, water en land. Een deel van het voer is afval uit de voedingsindustrie. Daardoor valt de milieubelasting per varken mee. Verder heeft ook het vervoer van vlees invloed op het klimaat.',
    linkChoice:`<a href="http://www.voedingscentrum.nl/encyclopedie/brood.aspx">http://www.voedingscentrum.nl/encyclopedie/brood.aspx</a>`,
    ratingChoice: `<div target="_blank" id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div><div id="circle"></div>`,
    imgChoice: 'img/spek.png'
  },
  "Wat frisdrank":{
    explainChoice: `Kan beter, maar niet slecht! De vervuiling in verpakte dranken zit vooral in het soort verpakkingsmateriaal. Het schoonmaken, transporteren, produceren en afdanken van de flessen kost veel energie. Vooral de wegwerp PET-fles, waarin water en andere frisdranken in worden verkocht, is een belasting voor het milieu. Als je deze koopt, kun je nog het beste voor grote flessen met statiegeld kiezen. Dan wordt het plastic na inlevering opnieuw gebruikt.`,
    linkChoice: `<a target="_blank" href="http://www.voedingscentrum.nl/encyclopedie/frisdrank.aspx">http://www.voedingscentrum.nl/encyclopedie/frisdrank.aspx</a>`,
    ratingChoice: `<div id="circle"></div>`,
    imgChoice: 'img/brood.png'
  }
};

// Ochtend Click events
firstShownBreakfast.addEventListener('click', showExplainFirst,true);
secondShownBreakfast.addEventListener('click', showExplainSecond,true);
thirdShownBreakfast.addEventListener('click', showExplainThird,true);
// Middag Click events
firstShownLunch.addEventListener('click', showExplainFirstLunch,true);
secondShownLunch.addEventListener('click', showExplainSecondLunch,true);
thirdShownLunch.addEventListener('click', showExplainThirdLunch,true);
// Avond Click events
firstShownDinner.addEventListener('click', showExplainFirstDinner,true);
secondShownDinner.addEventListener('click', showExplainSecondDinner,true);
thirdShownDinner.addEventListener('click', showExplainThirdDinner,true);
