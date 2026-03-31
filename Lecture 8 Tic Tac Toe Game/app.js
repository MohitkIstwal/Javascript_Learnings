// Game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let gameMode = 'human'; // 'human' or 'ai'
let aiDifficulty = 'medium';
let moveCount = 0;
let lastWinningCells = [];

// Player names
let playerXName = 'Player X';
let playerOName = 'Player O';

// Game statistics (loaded from localStorage)
let stats = {
    xWins: 0,
    oWins: 0,
    draws: 0
};

// Victory messages
const victoryMessages = [
    '🎉 Wins!',
    '🏆 Victory!',
    '👑 Champion!',
    '⭐ Winner!',
    '🎊 Triumph!',
    '🥇 Gold Medal!',
    '🎯 Perfect!',
    '💪 Epic Win!',
    '🚀 Awesome!',
    '✨ Legendary!'
];

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM Elements
const cells = document.querySelectorAll('.cell');
const statusElement = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
const clearStatsBtn = document.getElementById('clearStatsBtn');
const gameBoard_DOM = document.getElementById('gameBoard');
const moveCountElement = document.getElementById('moveCount');
const modeBtns = document.querySelectorAll('.mode-btn');
const difficultyDiv = document.getElementById('difficulty');
const difficultySelect = document.getElementById('difficultySelect');
const moveSound = document.getElementById('moveSound');
const winSound = document.getElementById('winSound');
const playerXNameInput = document.getElementById('playerXName');
const playerONameInput = document.getElementById('playerOName');
const playerXWinsDisplay = document.getElementById('playerXWins');
const playerOWinsDisplay = document.getElementById('playerOWins');
const drawCountDisplay = document.getElementById('drawCount');
const player1Label = document.getElementById('player1Label');
const player2Label = document.getElementById('player2Label');

// Load stats from localStorage
function initializeGame() {
    loadStats();
    updateStatsDisplay();
    
    // Load player names from localStorage
    loadPlayerNames();
    updatePlayerNameDisplay();
    
    // Player name inputs
    playerXNameInput.addEventListener('change', () => {
        playerXName = playerXNameInput.value || 'Player X';
        savePlayerNames();
        updatePlayerNameDisplay();
        resetGame();
    });
    
    playerXNameInput.addEventListener('blur', () => {
        if (!playerXNameInput.value) {
            playerXNameInput.value = playerXName;
        }
    });
    
    // Mode selection
    modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            gameMode = e.target.dataset.mode;
            
            if (gameMode === 'ai') {
                difficultyDiv.style.display = 'block';
                playerOName = 'AI';
                playerONameInput.value = 'AI';
                aiDifficulty = difficultySelect.value;
            } else {
                difficultyDiv.style.display = 'none';
                playerONameInput.value = playerOName;
            }
            resetGame();
        });
    });

    // Difficulty selector
    difficultySelect.addEventListener('change', (e) => {
        aiDifficulty = e.target.value;
        resetGame();
    });

    // Cell click listeners
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
        cell.addEventListener('mouseover', handleCellHover);
        cell.addEventListener('mouseout', handleCellOut);
    });

    // Keyboard controls (1-9)
    document.addEventListener('keydown', handleKeyboardInput);

    resetBtn.addEventListener('click', resetGame);
    clearStatsBtn.addEventListener('click', clearStats);
    
    // Initialize the game
    resetGame();
}

// Wait for DOM to be ready, or run immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}

// Handle keyboard input (1-9 for grid positions)
function handleKeyboardInput(event) {
    if (!gameActive) return;
    
    const key = parseInt(event.key);
    if (key >= 1 && key <= 9) {
        const cellIndex = key - 1;
        if (gameBoard[cellIndex] === '') {
            // In AI mode, only allow X (human) to play
            if (gameMode === 'ai' && currentPlayer !== 'X') {
                return;
            }
            makeMove(cellIndex);
            
            // AI move after human move
            if (gameMode === 'ai' && currentPlayer === 'O' && gameActive) {
                setTimeout(aiMove, 500);
            }
        }
    }
}

// Handle cell hover preview
function handleCellHover(event) {
    const cell = event.target;
    const cellIndex = cell.getAttribute('data-index');
    
    if (gameBoard[cellIndex] === '' && gameActive) {
        cell.setAttribute('data-preview', currentPlayer);
    }
}

function handleCellOut(event) {
    const cell = event.target;
    cell.setAttribute('data-preview', '');
}

// Handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = clickedCell.getAttribute('data-index');
    
    // Check if cell is already filled or game is not active
    if (gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }

    // In AI mode, only allow X (human) to play
    if (gameMode === 'ai' && currentPlayer !== 'X') {
        return;
    }
    
    makeMove(cellIndex);
    
    // AI move after human move
    if (gameMode === 'ai' && currentPlayer === 'O' && gameActive) {
        setTimeout(aiMove, 500);
    }
}

// Make a move in the game
function makeMove(cellIndex) {
    // Place mark on board
    gameBoard[cellIndex] = currentPlayer;
    
    // Update cell display
    const cell = document.querySelector(`[data-index='${cellIndex}']`);
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    
    moveCount++;
    
    playSound(moveSound);
    
    // Update move counter
    moveCountElement.textContent = moveCount;
    
    // Check for winner
    const winner = checkWinner();
    
    if (winner) {
        const winnerName = winner === 'X' ? playerXName : (gameMode === 'ai' ? 'AI' : playerOName);
        const randomMessage = victoryMessages[Math.floor(Math.random() * victoryMessages.length)];
        statusElement.textContent = `${winnerName} ${randomMessage}`;
        statusElement.classList.add('winner');
        gameActive = false;
        playSound(winSound);
        
        // Create confetti
        createConfetti();
        
        // Update stats
        updateStats(winner);
        
        return;
    }
    
    // Check for draw
    if (gameBoard.every(cell => cell !== '')) {
        statusElement.textContent = "🤝 It's a Draw! 🤝";
        statusElement.classList.add('draw');
        gameActive = false;
        stats.draws++;
        saveStats();
        updateStatsDisplay();
        return;
    }
    
    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
    // Update status
    if (gameMode === 'ai' && currentPlayer === 'O') {
        statusElement.textContent = "🤖 AI is thinking...";
    } else {
        statusElement.textContent = `Player ${currentPlayer}'s Turn`;
    }
    statusElement.classList.remove('winner', 'draw');
}

// AI Move Logic
function aiMove() {
    let bestMove;
    
    switch(aiDifficulty) {
        case 'easy':
            bestMove = getEasyMove();
            break;
        case 'medium':
            bestMove = getMediumMove();
            break;
        case 'hard':
            bestMove = getHardMove();
            break;
        case 'impossible':
            bestMove = getImpossibleMove();
            break;
    }
    
    makeMove(bestMove);
}

// Easy AI - Random moves
function getEasyMove() {
    const availableMoves = gameBoard.map((cell, i) => cell === '' ? i : null).filter(i => i !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

// Medium AI - Random but try to win or block
function getMediumMove() {
    // Check if AI can win
    const winMove = findWinningMove('O');
    if (winMove !== null) return winMove;
    
    // Check if need to block player
    const blockMove = findWinningMove('X');
    if (blockMove !== null && Math.random() > 0.3) return blockMove;
    
    // Random move
    return getEasyMove();
}

// Hard AI - Strong strategy but not unbeatable
function getHardMove() {
    // Check if AI can win
    const winMove = findWinningMove('O');
    if (winMove !== null) return winMove;
    
    // Always block player
    const blockMove = findWinningMove('X');
    if (blockMove !== null) return blockMove;
    
    // Prefer center
    if (gameBoard[4] === '') return 4;
    
    // Prefer corners
    const corners = [0, 2, 6, 8].filter(i => gameBoard[i] === '');
    if (corners.length > 0) {
        return corners[Math.floor(Math.random() * corners.length)];
    }
    
    // Take any available
    return getEasyMove();
}

// Impossible AI - Perfect play using Minimax algorithm
function getImpossibleMove() {
    let bestScore = -Infinity;
    let bestMove = null;
    
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = 'O';
            const score = minimax(gameBoard, 0, false);
            gameBoard[i] = '';
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    
    return bestMove !== null ? bestMove : getEasyMove();
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
    const winner = getWinnerMinmax(board);
    
    // Terminal conditions
    if (winner === 'O') return 10 - depth; // AI wins (prioritize earlier wins)
    if (winner === 'X') return depth - 10; // Human wins (prioritize later losses)
    if (board.every(cell => cell !== '')) return 0; // Draw
    
    if (isMaximizing) {
        // AI's turn - maximize score
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        // Human's turn - minimize score
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Get winner for minimax (returns 'X', 'O', or null)
function getWinnerMinmax(board) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

// Find winning move for a player
function findWinningMove(player) {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = player;
            if (checkWinnerForBoard(gameBoard)) {
                gameBoard[i] = '';
                return i;
            }
            gameBoard[i] = '';
        }
    }
    return null;
}

// Check winner for a specific board state
function checkWinnerForBoard(board) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// Check for winner and highlight winning line
function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            lastWinningCells = [a, b, c];
            return gameBoard[a];
        }
    }
    return null;
}

// Update game statistics
function updateStats(winner) {
    if (winner === 'X') {
        stats.xWins++;
    } else {
        stats.oWins++;
    }
    saveStats();
    updateStatsDisplay();
}

// Save stats to localStorage
function saveStats() {
    localStorage.setItem('ticTacToeStats', JSON.stringify(stats));
}

// Load stats from localStorage
function loadStats() {
    const saved = localStorage.getItem('ticTacToeStats');
    if (saved) {
        stats = JSON.parse(saved);
    }
}

// Update stats display
function updateStatsDisplay() {
    playerXWinsDisplay.textContent = stats.xWins;
    playerOWinsDisplay.textContent = stats.oWins;
    drawCountDisplay.textContent = stats.draws;
}

// Clear stats
function clearStats() {
    if (confirm('Are you sure you want to clear all statistics?')) {
        stats = { xWins: 0, oWins: 0, draws: 0 };
        saveStats();
        updateStatsDisplay();
    }
}

// Save player names to localStorage
function savePlayerNames() {
    localStorage.setItem('ticTacToePlayerXName', playerXName);
    if (gameMode === 'human') {
        localStorage.setItem('ticTacToePlayerOName', playerOName);
    }
}

// Load player names from localStorage
function loadPlayerNames() {
    const savedXName = localStorage.getItem('ticTacToePlayerXName');
    const savedOName = localStorage.getItem('ticTacToePlayerOName');
    
    if (savedXName) playerXName = savedXName;
    if (savedOName) playerOName = savedOName;
}

// Update player name display
function updatePlayerNameDisplay() {
    playerXNameInput.value = playerXName;
    if (gameMode === 'human') {
        playerONameInput.disabled = false;
        playerONameInput.value = playerOName;
    } else {
        playerONameInput.disabled = true;
        playerONameInput.value = 'AI';
    }
    
    player1Label.textContent = playerXName;
    player2Label.textContent = gameMode === 'ai' ? 'AI' : playerOName;
}

// Create confetti animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = ['#ffebbb', '#ffcab0', '#e0ffcd', '#ffd700'][Math.floor(Math.random() * 4)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Reset game
function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    moveCount = 0;
    lastWinningCells = [];
    
    // DOM manipulation - Clear all cells
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'disabled', 'winning');
        cell.setAttribute('data-preview', '');
    });
    
    // Update status and move counter
    statusElement.textContent = gameMode === 'ai' ? "You are X, AI is O" : "Player X's Turn";
    statusElement.classList.remove('winner', 'draw');
    moveCountElement.textContent = '1';
}

// Play sound effects
function playSound(audioElement) {
    try {
        // Create simple beep sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (audioElement === moveSound) {
            // Move sound - short beep
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else {
            // Win sound - ascending tones
            oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
            oscillator.frequency.linearRampToValueAtTime(800, audioContext.currentTime + 0.2);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }
    } catch (e) {
        // Fallback if audio fails
        console.log('Sound effect skipped');
    }
}
