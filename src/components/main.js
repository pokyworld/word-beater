// import { words } from  "./data"; // from JS file using "export"

import json from "../data/words.json";  // more appropriate json import
const words = json.words;

window.addEventListener('load', init);

// globals

// Available levels
const levels = {
    easy: 10,
    medium: 5,
    hard: 3
};
// default : easy

if(!localStorage.currentLevel) {
    localStorage.currentLevel = levels.easy;
}

// To change level
let currentLevel = parseInt(localStorage.currentLevel);
let time = currentLevel;
let score = 0;
let isPlaying = true;
let counter;
let status;

// DOM Elements
const seconds = document.querySelector("#seconds");
const currentWord = document.querySelector("#current-word");
const wordInput = document.querySelector("#word-input");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");
const inputWrapper = document.querySelector("#input-wrapper");

const selectLevel = document.querySelector("#select-level");
Object.entries(levels).forEach((item, index) => {
    if(item[1] === parseInt(localStorage.currentLevel)) {
        selectLevel.selectedIndex = index;
    }
});


// selectLevel.selectedIndex = 1;
const restartButton = document.querySelector("#restart-button");



// Initialize game
export const init = () => {

    timeDisplay.textContent = time;
    message.textContent = "";
    scoreDisplay.textContent = 0;

    // Show number of seconds in UI
    seconds.textContent = currentLevel;

    // Load word from array
    showWord(words, currentWord);

    // Start matching on word input
    wordInput.addEventListener('input', startMatch);

    // Call countdown every second
    counter = setInterval(countdown, 1000);

    // Check game status
    status = setInterval(checkStatus, 50);
};

const showWord = (words, currentWord) => {

    // strip out current Word
    words = words.filter(word => word !== currentWord.textContent);

    // generate random new word from list
    const randIndex = Math.floor(Math.random() * words.length);

    // output random word
    currentWord.textContent = words[randIndex];
};

// start Match
const startMatch = () => {
    if(matchWords()) {
        // If matched, score increases and play resets
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words, currentWord);
        wordInput.value = "";
        score++;
    }

    // If score is < 0, display 0
    if (score < 0) {
        scoreDisplay.textContent = 0;
    } else {
        scoreDisplay.textContent = score;
    }
}

// Test word word matching
const matchWords = () => {
    if (wordInput.value.toLowerCase() === currentWord.textContent.toLowerCase()) {
        message.textContent = "Correct !!";
        return true;
      } else {
        message.text = "";
        return false;
      }
}

// Countdown timer
const countdown = () => {
    if(time > 1) {
        // decrement
        decrement();
    } else {
        decrement();
        // Game is over
        isPlaying = false;
    }
    timeDisplay.textContent = time;
}

const checkStatus = () => {
    if (!isPlaying && time === 0) {
        message.textContent = "Game Over !!";
        score = -1;
        clearTimeout(counter);
        clearTimeout(status);
        inputWrapper.classList.add("hidden");
    }
}

const decrement = () => {
    if(time > 0) {
        time--;
    } else { time = 0; }
}

const handleButtonClick = () => {
    window.location.reload();
};

const handleDropDownChange = (e) => {
    e.preventDefault();
    const level = e.target.value;
    currentLevel = levels[level];
    seconds.textContent = levels[level];
    localStorage.currentLevel = currentLevel;

}

// event listeners for drop-down and button
selectLevel.addEventListener("change", handleDropDownChange);
restartButton.addEventListener("click", handleButtonClick);
