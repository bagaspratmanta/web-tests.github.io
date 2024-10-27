const screen = document.getElementById('screen');
const coordinatesDisplay = document.getElementById('coordinates');

screen.addEventListener('click', (event) => {
    const rect = screen.getBoundingClientRect();
    const x = event.clientX - rect.left; // X coordinate within the screen
    const y = event.clientY - rect.top;  // Y coordinate within the screen
    coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
});