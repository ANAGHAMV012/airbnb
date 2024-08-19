const textBox = document.getElementById('textbox')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')


let currentRow = 0;
let currentCol = 0;
let selectingRow = true;
const rows = document.querySelectorAll('.row');
const output = document.getElementById('output');
const selectButton = document.getElementById('selectButton');

function highlightCurrent() {
    rows.forEach(row => row.classList.remove('active'));
    const columns = rows[currentRow].querySelectorAll('.key');
    columns.forEach(key => key.classList.remove('active'));

    if (selectingRow) {
        rows[currentRow].classList.add('active');
    } else {
        columns[currentCol].classList.add('active');
    }
}

function moveToNext() {
    if (selectingRow) {
        currentRow = (currentRow + 1) % rows.length;
        currentCol = 0;  // Reset column to start when switching rows
    } else {
        const columns = rows[currentRow].querySelectorAll('.key');
        currentCol = (currentCol + 1) % columns.length;
    }
    highlightCurrent();
}

function selectCurrent() {
    if (!selectingRow) {
        const selectedKey = rows[currentRow].querySelectorAll('.key')[currentCol].textContent;
        output.textContent += selectedKey;
    }
    selectingRow = !selectingRow;  // Toggle between row and column selection
    highlightCurrent();
}

// Set up auto-scrolling for both rows and columns
function autoScroll() {
    moveToNext();
    if (!selectingRow && currentCol === 0) {
        selectingRow = true; // Automatically move to row selection after completing a row
    }
    setTimeout(autoScroll, 1000); // Adjust speed as needed
}

// Handle button click
selectButton.addEventListener('click', selectCurrent);

// Initialize
highlightCurrent();
autoScroll();