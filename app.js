import {
    checkGuess,
    evalResult
} from './compareUtils.js';

import {
    endGame,
    resetGame
} from './gameStateUtils.js';

// fluctuating variables (I think these might be okay as const? Since they reference a place, not a value?)
let userInput = document.getElementById('user-guess');
let guessCounter = document.getElementById('remaining-guesses');

// buttons
const guessButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-button');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listener for guess button
guessButton.addEventListener('click', () => {	
    if (userInput.value){
        const guess = userInput.valueAsNumber;
        userInput.value = '';

        const result = checkGuess(guess, randomNumber);

        evalResult(result);
        if (result === 0) {
            endGame('win');
            return;
        }
        
        guessesRemaining--;
        guessCounter.textContent = guessesRemaining;

        if (guessesRemaining < 1) {
            endGame();
            return;
        }
    }
});

// reset the game
resetButton.addEventListener('click', () => {
    resetGame();
    randomNumber = Math.ceil(Math.random() * 20);
    guessesRemaining = 4;
    guessCounter.textContent = guessesRemaining;
});