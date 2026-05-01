// Game variables
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

// DOM Elements
const choiceButtons = document.querySelectorAll('.choice-btn');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resetBtn = document.getElementById('resetBtn');

// Game logic
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    // If both choices are same - Draw
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    // Rock beats Scissors
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    }

    // Paper beats Rock
    if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    }

    // Scissors beats Paper
    if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    }

    // Otherwise - Lose
    return 'lose';
}

function getResultMessage(playerChoice, computerChoice, result) {
    const choiceSymbols = {
        rock: '✊ Rock',
        paper: '✋ Paper',
        scissors: '✌️ Scissors'
    };

    const winMessages = {
        'rock-scissors': 'Your rock beats scissors',
        'paper-rock': 'Your paper beats rock',
        'scissors-paper': 'Your scissors beats paper'
    };

    const loseMessages = {
        'rock-paper': 'Computer\'s paper beats your rock',
        'paper-scissors': 'Computer\'s scissors beats your paper',
        'scissors-rock': 'Computer\'s rock beats your scissors'
    };

    if (result === 'draw') {
        return `Both chose ${choiceSymbols[playerChoice]}. It's a Draw!`;
    }

    if (result === 'win') {
        const key = `${playerChoice}-${computerChoice}`;
        return `You win! ${winMessages[key]}`;
    }

    if (result === 'lose') {
        const key = `${playerChoice}-${computerChoice}`;
        return `You lose! ${loseMessages[key]}`;
    }
}

// Update display
function updateDisplay(result) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    resultDisplay.className = 'result';
    resultDisplay.classList.add(result);
}

// Handle choice click
function handleChoiceClick(event) {
    const playerChoice = event.target.closest('.choice-btn').dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    // Update scores
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }

    // Update result message
    const message = getResultMessage(playerChoice, computerChoice, result);
    resultDisplay.textContent = message;

    // Update display with animation
    updateDisplay(result);

    // Add animation to buttons
    choiceButtons.forEach(btn => {
        btn.classList.remove(btn.dataset.choice);
    });
    
    const selectedBtn = document.querySelector(`[data-choice="${playerChoice}"]`);
    selectedBtn.classList.add(playerChoice);

    // Remove animation after delay
    setTimeout(() => {
        choiceButtons.forEach(btn => {
            btn.classList.remove(btn.dataset.choice);
        });
    }, 600);
}

// Reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = 'Make your choice!';
    resultDisplay.className = 'result';
    updateDisplay('draw');
}

// Event listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', handleChoiceClick);
});

resetBtn.addEventListener('click', resetGame);
