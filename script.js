const container = document.querySelector('#container');

function makeGrid(rows, cols) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = 'hi';
        container.appendChild(square);
    }
}

makeGrid(16, 16);