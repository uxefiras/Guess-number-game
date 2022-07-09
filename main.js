"use strict";
//Selectors DOM elements
let gusseingChecker = document.querySelector(".guessing-part");
let buttunClickerToCheck = document.querySelector(".check-number");
let Score = document.querySelector(".number-of-score");
let highScore = document.querySelector(".number-of-high-score");
let resetButton = document.querySelector(".reset-game");
let body = document.querySelector("body");
let finalResult = document.querySelector(".result");

// Values for the game
let luckyNumber = Math.floor(Math.random() * 20) + 1;
let scoreData = 20;

//Node ctreator
const node = document.createElement("h3");
const childHood = gusseingChecker.appendChild(node);
let checker;

//Function to check the number
buttunClickerToCheck.addEventListener("click", function() {
    checker = document.querySelector(".input-checker-additive").value;
    console.log(checker);
    if (checker != "") {
        if (checker == luckyNumber) {
            highScore.innerHTML = scoreData;
            body.style.backgroundColor = "green";
            childHood.innerText = "Correct guess";
            finalResult.innerText = `${luckyNumber}`;
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
    } else {
        childHood.innerHTML = "Please enter a number";
    }
});

//Function to reset the game
resetButton.addEventListener("click", function() {
    scoreData = 20;
    Score.innerHTML = scoreData;
    childHood.innerText = "";
    body.style.backgroundColor = "";
    finalResult.innerText = "?";

    buttunClickerToCheck.disabled = false;
    checker = document.querySelector(".input-checker-additive").value = "";
});