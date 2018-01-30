let buttonA = document.getElementById('a3');
let buttonB = document.getElementById('b3');
let tekstExplain = document.getElementById('uitleg');
let emojiGoed = document.getElementById('honderdAvond');
let emojiFout = document.getElementById('huilenAvond');

function changeBorderA() {
    buttonA.style.outline = "5px solid red";
    tekstExplain.innerHTML = `
    Bijna! Hoewel het produceren van kaas zeker een bijdrage heeft aan Co2 uitstoot komt er bij varkensvlees nog meer kijken. 
Niet alleen is Co2 een gevolg maar ook de enorme hoeveelheid water die wij verbruiken.
    `;
    buttonB.style.outline = "none";
    emojiFout.innerHTML = '😭'
    emojiGoed.innerHTML = '';
}

function changeBorderB() {
    buttonB.style.outline = "5px solid #50fdcc";
    tekstExplain.innerHTML = `
    Helemaal Goed! Hoewel het produceren van kaas zeker een bijdrage heeft aan Co2 uitstoot komt er bij varkensvlees nog meer kijken. Niet alleen is Co2 een gevolg maar ook de enorme hoeveelheid water die wij verbruiken.`;
    buttonA.style.outline = "none";
    emojiGoed.innerHTML = '😍';
    emojiFout.innerHTML = '';

}




buttonA.addEventListener('click', changeBorderA, true);
buttonB.addEventListener('click', changeBorderB, true);

$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
