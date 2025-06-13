// Завдання 1
function addDiv() {
    const container = document.querySelector('.container');
    const newDiv = document.createElement('div');
    newDiv.textContent = 'New Div';
    newDiv.style.backgroundColor = 'lightblue';
    newDiv.style.padding = '10px';
    newDiv.style.margin = '5px 0';
    container.appendChild(newDiv);
}

// Завдання 2
function editDivContent() {
    const editableDiv = document.getElementById('editableDiv');
    const newText = prompt('Enter new text:');
    if (newText !== null) {
        editableDiv.textContent = newText;
    }
}

// Завдання 3
function toggleElements() {
    const elements = document.querySelectorAll('.toggle-item');
    elements.forEach(element => {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    });
}