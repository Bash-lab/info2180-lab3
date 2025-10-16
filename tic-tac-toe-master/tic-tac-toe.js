document.addEventListener('DOMContentLoaded', function() {
    // Get all the div elements inside the game board
    const boardSquares = document.querySelectorAll('#board div');
    
    // Add the 'square' class to each board div
    boardSquares.forEach(square => {
        square.classList.add('square');
    });
});