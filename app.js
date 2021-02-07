let newGame = document.querySelector("#ngbtn")
let rollBtn = document.querySelector("#rolldicebtn")
let holdBtn = document.querySelector("#holdbtn")
let diceImg = document.querySelector ("#die")

newGame.addEventListener("click", () => {
   rollBtn.style.visibility = "visible";
   holdBtn.style.visibility = "visible";
   diceImg.style.visibility = "visible";
});


// function rollDice () {
//     let rollResult = Math.ceil(Math.random() * 6);
//     if (rollResult ==)
// }


diceImg.innerHTML = '<img src =img/dice' + rollResult + '.png'
