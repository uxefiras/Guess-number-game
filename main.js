"use strict";

let gusseingChecker = document.querySelector(".guessing-part");

let buttunClickerToCheck = document.querySelector(".check-number");
let Score = document.querySelector(".number-of-score");
let highScore = document.querySelector(".number-of-high-score");
let resetButton = document.querySelector(".reset-game");
let body = document.querySelector("body");

let luckyNumber = Math.floor(Math.random() * 20) + 1;

let scoreData = 20;

//Node ctreator
const node = document.createElement("h3");
const childHood = gusseingChecker.appendChild(node);
let checker;

buttunClickerToCheck.addEventListener("click", function() {
    checker = document.querySelector(".input-checker-additive").value;

    if (checker == luckyNumber) {
        highScore.innerHTML = scoreData;
        body.style.backgroundColor = "green";
        childHood.innerText = "Correct guess";
        luckyNumber = Math.floor(Math.random() * 20) + 1;
        buttunClickerToCheck.disabled = true;
    } else {
        scoreData--;
        Score.innerHTML = scoreData;
        if (checker > luckyNumber) {
            childHood.innerHTML = "Too high";
        } else if (checker < luckyNumber) {
            childHood.innerHTML = "Too low";
        }
    }
});

resetButton.addEventListener("click", function() {
    scoreData = 20;
    Score.innerHTML = scoreData;
    childHood.innerText = "";
    body.style.backgroundColor = "";

    buttunClickerToCheck.disabled = false;
    checker = document.querySelector(".input-checker-additive").value = "";
});