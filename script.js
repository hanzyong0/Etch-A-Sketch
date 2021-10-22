// Make grid function
const container = document.querySelector('#container');

function makeGrid(rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

makeGrid(16, 16);

// Global variable to detect holding mousedown
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// Change color when clicked 
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', (e) => {
        if (isMouseDown) {
            e.target.classList.add('yellow');
        };
    });
});

squares.forEach((square) => {
    square.addEventListener('mousedown', (e) => {
        e.target.classList.add('yellow');
    });
});