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

// Reset button
const btn = document.querySelector('#reset');

function erase() {
    location.reload();
};

// Prompt user for grid size
let a;
let b;
function getRows() {
    a = prompt('What is the number of rows?');
    while (a > 100) {
        alert('Number must be less than or equals to 100');
        a = prompt('What is the number of rows?');
    };
    sessionStorage.setItem('a', String(a));
};

function getCols() {
    b = prompt('What is the number of columns?');
    while (b > 100) {
        alert('Number must be less than or equals to 100');
        b = prompt('What is the number of columns?');
    };
    sessionStorage.setItem('b', String(b));
};

// Reload and make new grid
btn.addEventListener('click', () => {
    erase();
    getRows();
    getCols();
});

a = Number(sessionStorage.getItem('a'));
b = Number(sessionStorage.getItem('b'));

// Check whether page is first load
if (sessionStorage.getItem('a') == null || sessionStorage.getItem('b') == null) {
    makeGrid(16, 16);
} else {
    makeGrid(a, b);
};

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