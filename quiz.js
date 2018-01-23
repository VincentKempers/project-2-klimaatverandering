let buttonA =  document.getElementById('a');
let buttonB =  document.getElementById('b');

function changeBorderA() {
  if(buttonA.style.border == "5px solid black") {
    buttonA.style.border = "5px solid red";
  } else {
    buttonA.style.border = "5px solid black";
  }
}

function changeBorderB() {
  if(buttonB.style.border === "5px solid black") {
    buttonB.style.border = "5px solid #50fdcc";
  } else {
    buttonB.style.border = "5px solid black";
  }
}

buttonA.addEventListener('click', changeBorderA, true);
buttonB.addEventListener('click', changeBorderB, true);