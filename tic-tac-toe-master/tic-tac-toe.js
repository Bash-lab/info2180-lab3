document.addEventListener('DOMContentLoaded', function() {
    // Exercise 1: Add square class to each board div
    const boardSquares = document.querySelectorAll('#board div');
    const statusElement = document.getElementById('status');
    
    boardSquares.forEach(square => {
        square.classList.add('square');
    });
    
    // Exercise 2: Add X or O when clicked
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);
    
    // Exercise 4: Winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }
    
    // Exercise 5: New Game button functionality
    const newGameButton = document.querySelector('.btn');
    newGameButton.addEventListener('click', function() {
        // Reset game state
        gameState = Array(9).fill(null);
        currentPlayer = 'X';
        
        // Clear board visually
        boardSquares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
        
        // Reset status message
        statusElement.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusElement.classList.remove('you-won');
    });
    
    boardSquares.forEach((square, index) => {
        // Exercise 3: Add hover effects
        square.addEventListener('mouseenter', function() {
            if (gameState[index] === null) {
                this.classList.add('hover');
            }
        });
        
        square.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
        
        // Exercise 2 & 4: Click handler with win checking
        square.addEventListener('click', function() {
            if (gameState[index] === null) {
                // Update game state
                gameState[index] = currentPlayer;
                
                // Update visual representation
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Exercise 4: Check for winner
                const winner = checkWinner();
                if (winner) {
                    statusElement.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusElement.classList.add('you-won');
                    return;
                }
                
                // Switch players
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});