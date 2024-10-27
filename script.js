const screen = document.getElementById('screen');
const internetExplorerIcon = document.querySelector('.internet-explorer');
const settingsIcon = document.querySelector('.icon[title="Settings"]'); // Select the Settings icon
const myComputerIcon = document.querySelector('.icon[title="My Computer"]'); // Select the My Computer icon

document.getElementById('close-tab').addEventListener('click', function() {
    window.close(); // This will attempt to close the current tab
});

// Open a new tab that redirects to Google when the Internet Explorer icon is clicked
internetExplorerIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the screen
    window.open('https://www.google.com', '_blank'); // Open Google in a new tab
});

// Open Windows Settings when the Settings icon is clicked
settingsIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the screen
    window.open('ms-settings:', '_self'); // Attempt to open Windows Settings
});
