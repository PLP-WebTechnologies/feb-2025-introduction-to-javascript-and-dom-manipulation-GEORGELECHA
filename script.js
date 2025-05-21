// DOM Elements
const demoText = document.getElementById('demoText');
const textChanger = document.getElementById('textChanger');
const styleChanger = document.getElementById('styleChanger');
const elementAdder = document.getElementById('elementAdder');
const elementRemover = document.getElementById('elementRemover');
const outputContainer = document.getElementById('outputContainer');

// Change Text Content
textChanger.addEventListener('click', () => {
    demoText.textContent = 'Text changed dynamically!';
});

// Modify CSS Styles
styleChanger.addEventListener('click', () => {
    demoText.style.backgroundColor = '#ffd700';
    demoText.style.padding = '15px';
    demoText.style.borderRadius = '4px';
});

// Add New Elements
elementAdder.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-element';
    newElement.textContent = `New Item ${outputContainer.children.length}`;
    outputContainer.appendChild(newElement);
});

// Remove Elements
elementRemover.addEventListener('click', () => {
    if (outputContainer.children.length > 1) { // Keep initial paragraph
        outputContainer.lastElementChild.remove();
    }
});