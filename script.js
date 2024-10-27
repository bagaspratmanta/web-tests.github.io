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

// Show the modal when the confession icon is clicked
document.getElementById('confession-icon').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Close the modal only when the "yesss" button is clicked
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Close the confession modal
    document.getElementById('success-modal').style.display = 'block'; // Open the success modal
});

// Handle the "naw" button click
document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('no-button').style.display = 'none'; // Hide the naw button
    startRandomAppearance(); // Start the random appearance of the naw button
});

// Close the success modal when the close button is clicked
document.getElementById('success-close-button').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none'; // Close the success modal
});

// Function to make the "naw" button reappear randomly anywhere in the viewport
function startRandomAppearance() {
    setInterval(function() {
        // Randomly decide to show the button
        if (Math.random() < 0.5) { // 50% chance to show the button
            const noButton = document.getElementById('no-button');
            noButton.style.display = 'inline-block'; // Show the button
            
            // Get the viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const buttonWidth = noButton.offsetWidth;
            const buttonHeight = noButton.offsetHeight;

            // Calculate random positions within the viewport
            const randomX = Math.random() * (viewportWidth - buttonWidth);
            const randomY = Math.random() * (viewportHeight - buttonHeight);

            // Set the new position of the button
            noButton.style.position = 'absolute'; // Make it absolute to position it randomly
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;
        }
    }, 150); // Change the interval time as needed (3000 ms = 3 seconds)
}