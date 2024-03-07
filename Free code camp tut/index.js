let first_card = 10;
let second_card = 5;
let sum = first_card + second_card;
let hasBlackjack = false;
let isAlive = true;
let massage = "";
let massageEl = document.getElementById("massage-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let refreshEl = document.querySelector("body")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
// let refreshEl = document.getElementById("body")

console.log(sum);


console.log(hasBlackjack);
console.log(isAlive);


function startGame() {
    if (sum <= 20) {
        massage = "do you want to draw a new card ?";
    } else if (sum === 21) {
        massage = "You've got the BLACKJACK!";
        hasBlackjack = true;
    } else {
        massage = "You'r out of the game";
        isAlive = false;
    }
    massageEl.textContent = massage;
    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Cards : " + first_card + " , " + second_card;
}

function newCard() {
    let new_card = 5;
    sum += new_card
    if (sum <= 20) {
        massage = "do you want to draw a new card ?";
    } else if (sum === 21) {
        massage = "You've got the BLACKJACK!";
        hasBlackjack = true;
    } else {
        massage = "You'r out of the game";
        isAlive = false;
    }
    massageEl.textContent = massage;
    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Cards : " + first_card + " , " + second_card + " , " + new_card;
    if (hasBlackjack === true) {
        massage = "Refreshing...";
        btn1.style.display = "none";
        btn2.style.display = "none";
        setTimeout(function () {
            refreshEl.textContent = massage;
            location.reload();
        }, 3000);
    }
    if (isAlive === false) {
        btn1.style.display = "none";
        btn2.style.display = "none";
        setTimeout(function () {
            refreshEl.textContent = massage;
            location.reload();
        }, 5000);
    }

}
// var timeLeft = 10;
// var downloadTimer = setInterval(function(){
//   if(timeLeft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished";
//   } else {
//     document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
//   }
//   timeLeft -= 1;
// }, 1000);