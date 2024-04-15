// Importing greetingsMap from greetings.js or assuming it's available in the environment
const greetingsMap = require('./../data/greetings');

// Assuming greetingsMap is imported from greetings.js or available in the environment

// Get all the languages and their greetings
const languages = Object.keys(greetingsMap);
let currentIndex = 0;

// Function to display the next greeting
function displayNextGreeting() {
    const language = languages[currentIndex];
    const greeting = greetingsMap[language];
    alert(`${greeting}, ${document.getElementById('nameInput').value}`);
    currentIndex = (currentIndex + 1) % languages.length; // Move to the next language
}

// Start displaying greetings every 3 seconds
setInterval(displayNextGreeting, 3000);
