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

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.classList.toggle('yellow');
    });
});