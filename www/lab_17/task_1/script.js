document.querySelectorAll('.block').forEach(block => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => block.remove();
    block.appendChild(deleteButton);
});