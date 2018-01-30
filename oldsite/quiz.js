let buttonA = document.getElementById('a1');
let buttonB = document.getElementById('b1');
let tekstExplain = document.getElementById('uitleg');
let emojiGoed = document.getElementById('honderdOchtend');
let emojiFout = document.getElementById('huilenOchtend');

function changeBorderA() {
    buttonA.style.outline = "5px solid #50fdcc";
    tekstExplain.innerHTML = `
    Heel goed! Doordat koeien vier magen hebben en continu lopen te grazen laten ze de hele dag scheten. Hierdoor komt enorm veel methaan gas vrij. Daarnaast wordt de koeienpoep ook gebruikt om mest te maken voor de boeren. Hierdoor komt ook lachgas vrij.  De stof methaan is 23 keer schadelijker voor het milieu dan de CO2 die in de uitlaatgassen van de auto’s zit. En lachgas wel 296 keer!
    `;
    emojiGoed.innerHTML = '😍';
    emojiFout.innerHTML = '';
    buttonB.style.outline = "none";

}

function changeBorderB() {
    buttonB.style.outline = "5px solid red";
    tekstExplain.innerHTML = `
    Helaas! Doordat koeien vier magen hebben en continu lopen te grazen laten ze de hele dag scheten. Hierdoor komt enorm veel methaan gas vrij. Daarnaast wordt de koeienpoep ook gebruikt om mest te maken voor de boeren. Hierdoor komt ook lachgas vrij.  De stof methaan is 23 keer schadelijker voor het milieu dan de CO2 die in de uitlaatgassen van de auto’s zit. En lachgas wel 296 keer!`;
    emojiFout.innerHTML = '😭'
    emojiGoed.innerHTML = '';
    buttonA.style.outline = "none";
}



buttonA.addEventListener('click', changeBorderA, true);
buttonB.addEventListener('click', changeBorderB, true);


$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
