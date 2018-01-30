let buttonA = document.getElementById('a2');
let buttonB = document.getElementById('b2');
let buttonC = document.getElementById('c2');
let buttonD = document.getElementById('d2');
let tekstExplain = document.getElementById('uitleg');
let emojiGoed = document.getElementById('honderdMiddag');
let emojiFout = document.getElementById('huilenMiddag');

function changeBorderA() {
    buttonA.style.outline = "5px solid red";
    tekstExplain.innerHTML = `Bijna goed! Irrigatiewater komt zowel uit de grond als uit rivieren.`;
    buttonB.style.outline = "none";
    buttonC.style.outline = "none";
    buttonD.style.outline = "none";
    emojiFout.innerHTML = '😭'
    emojiGoed.innerHTML = '';
}

function changeBorderB() {
    buttonB.style.outline = "5px solid red";
    tekstExplain.innerHTML = `Bijna goed! Irrigatiewater komt zowel uit de grond als uit rivieren.`;
    buttonA.style.outline = "none";
    buttonC.style.outline = "none";
    buttonD.style.outline = "none";
    emojiFout.innerHTML = '😭'
    emojiGoed.innerHTML = '';
}

function changeBorderC() {
    buttonC.style.outline = "5px solid #50fdcc";
    tekstExplain.innerHTML = `Heel goed! Irrigatiewater komt zowel uit de grond als uit rivieren.`;
    buttonA.style.outline = "none";
    buttonB.style.outline = "none";
    buttonD.style.outline = "none";
    emojiGoed.innerHTML = '😍';
    emojiFout.innerHTML = '';
}

function changeBorderD() {
    buttonD.style.outline = "5px solid red";
    tekstExplain.innerHTML = `Bijna goed! Irrigatiewater komt zowel uit de grond als uit rivieren.`;
    buttonA.style.outline = "none";
    buttonB.style.outline = "none";
    buttonC.style.outline = "none";
    emojiFout.innerHTML = '😭'
    emojiGoed.innerHTML = '';
}


buttonA.addEventListener('click', changeBorderA, true);
buttonB.addEventListener('click', changeBorderB, true);
buttonC.addEventListener('click', changeBorderC, true);
buttonD.addEventListener('click', changeBorderD, true);

$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
