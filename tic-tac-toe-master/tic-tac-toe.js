document.addEventListener('DOMContentLoaded', function() {
    // Get all the div elements inside the game board
    const boardSquares = document.querySelectorAll('#board div');
    
    // Add the 'square' class to each board div
    boardSquares.forEach(square => {
        square.classList.add('square');
    });
    
    // Exercise 2: Add X or O when clicked
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);
    
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
        
        // Exercise 2: Click handler
        square.addEventListener('click', function() {
             // Only proceed if square is empty
            if (gameState[index] === null) {
                // Update game state
                gameState[index] = currentPlayer;
                
                // Update visual representation
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                // Switch players
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});